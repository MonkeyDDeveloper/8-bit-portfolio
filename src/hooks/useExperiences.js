import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { portfolioAPI } from '@/services/api';
import { defaultExperienceMetadata, experiencesMetadata } from '@/config/experiencesMetadata';
import { formatExperiencePeriod } from '@/utils/dateFormatter';

export function useExperiences() {
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    async function fetchExperiences() {
      setIsLoading(true);
      setError(null);

      try {
        const apiCompanyExperiences = await portfolioAPI.getCompanyExperienceRelations();

        // Cargar experiences y companies en paralelo
        const [experienceResults, companyResults] = await Promise.all([
          // Todas las experiences
          Promise.all(
            apiCompanyExperiences.map(async (ce) => {
              try {
                const experience = await portfolioAPI.getExperience(ce.experience_id);
                return { id: ce.id, experience };
              } catch (err) {
                console.log(`Error loading experience for id ${ce.id}`);
                return null;
              }
            })
          ),
          // Todas las companies
          Promise.all(
            apiCompanyExperiences.map(async (ce) => {
              try {
                const company = await portfolioAPI.getCompany(ce.company_id);
                return { id: ce.id, company };
              } catch (err) {
                console.log(`Error loading company for id ${ce.id}`);
                return null;
              }
            })
          ),
        ]);

        // Combinar resultados en un objeto
        const experiencesWithCompanyData = {};

        for (const result of experienceResults.filter(Boolean)) {
          experiencesWithCompanyData[result.id] = { experience: result.experience, company: null };
        }

        for (const result of companyResults.filter(Boolean)) {
          if (experiencesWithCompanyData[result.id]) {
            experiencesWithCompanyData[result.id].company = result.company;
          }
        }

        // todo sorry javi of the future, hardcoded by now

        // Mapear y enriquecer datos
        const enrichedExperiences = Object.entries(experiencesWithCompanyData)
          .map(([key, exp]) => {
            const companyInfo = exp.company;
            const experienceInfo = exp.experience;
            const metadata = experiencesMetadata[key] || defaultExperienceMetadata;

            return {
              key: `experience-${key}`,
              title: experienceInfo.title,
              description: experienceInfo.description,
              period: formatExperiencePeriod(
                experienceInfo.start_date,
                experienceInfo.end_date,
                experienceInfo.is_current,
                i18n.language
              ),
              startDate: new Date(experienceInfo.start_date),
              current: experienceInfo.is_current === 1,
              company: companyInfo?.name || 'Unknown',
              location: metadata.location,
              tech: [],
              variant: metadata.variant,
              level: metadata.level,
            };
          })
          // Ordenar: current primero, luego por fecha más reciente
          .sort((a, b) => {
            if (a.current && !b.current) return -1;
            if (!a.current && b.current) return 1;
            return b.startDate - a.startDate;
          });

        setExperiences(enrichedExperiences);
      } catch (err) {
        setError(err.message || 'Failed to load experiences');
        console.error('Experiences fetch error:', err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchExperiences();
  }, [i18n.language]);

  return { experiences, isLoading, error };
}