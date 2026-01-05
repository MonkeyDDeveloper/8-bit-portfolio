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
        // const apiCompanyExperiences = await portfolioAPI.getCompanyExperienceRelations();
        //
        // // Cargar experiences y companies en paralelo
        // const [experienceResults, companyResults] = await Promise.all([
        //   // Todas las experiences
        //   Promise.all(
        //     apiCompanyExperiences.map(async (ce) => {
        //       try {
        //         const experience = await portfolioAPI.getExperience(ce.experience_id);
        //         return { id: ce.id, experience };
        //       } catch (err) {
        //         console.log(`Error loading experience for id ${ce.id}`);
        //         return null;
        //       }
        //     })
        //   ),
        //   // Todas las companies
        //   Promise.all(
        //     apiCompanyExperiences.map(async (ce) => {
        //       try {
        //         const company = await portfolioAPI.getCompany(ce.company_id);
        //         return { id: ce.id, company };
        //       } catch (err) {
        //         console.log(`Error loading company for id ${ce.id}`);
        //         return null;
        //       }
        //     })
        //   ),
        // ]);
        //
        // // Combinar resultados en un objeto
        // const experiencesWithCompanyData = {};
        //
        // for (const result of experienceResults.filter(Boolean)) {
        //   experiencesWithCompanyData[result.id] = { experience: result.experience, company: null };
        // }
        //
        // for (const result of companyResults.filter(Boolean)) {
        //   if (experiencesWithCompanyData[result.id]) {
        //     experiencesWithCompanyData[result.id].company = result.company;
        //   }
        // }
        //
        // // todo sorry javi of the future, hardcoded by now
        //
        // // Mapear y enriquecer datos
        // const enrichedExperiences = Object.entries(experiencesWithCompanyData)
        //   .map(([key, exp]) => {
        //     const companyInfo = exp.company;
        //     const experienceInfo = exp.experience;
        //     const metadata = experiencesMetadata[key] || defaultExperienceMetadata;
        //
        //     return {
        //       key: `experience-${key}`,
        //       title: experienceInfo.title,
        //       description: experienceInfo.description,
        //       period: formatExperiencePeriod(
        //         experienceInfo.start_date,
        //         experienceInfo.end_date,
        //         experienceInfo.is_current,
        //         i18n.language
        //       ),
        //       startDate: new Date(experienceInfo.start_date),
        //       current: experienceInfo.is_current === 1,
        //       company: companyInfo?.name || 'Unknown',
        //       location: metadata.location,
        //       tech: [],
        //       variant: metadata.variant,
        //       level: metadata.level,
        //     };
        //   })
        //   // Ordenar: current primero, luego por fecha más reciente
        //   .sort((a, b) => {
        //     if (a.current && !b.current) return -1;
        //     if (!a.current && b.current) return 1;
        //     return b.startDate - a.startDate;
        //   });

        let enrichedExperiences = [
  {
    "key": "experience-5",
    "title": "Implementations Engineer At AltScore",
    "description": "I use the company's platform tools to deliver customized risk assessment solutions for clients, which involves integrating multiple external data sources, configuring business rules and scoring models, and implementing client-specific workflows like KYB/KYC evaluations and financial calculations (LGD, PD). I translate client requirements into working configurations while ensuring data accuracy and analyst-friendly outputs.",
    "period": "Jan 2025 - Present",
    "startDate": new Date("2025-01-08T00:00:00.000Z"),
    "current": true,
    "company": "AltScore",
    "location": "Remote (From Ecuador)",
    "tech": [],
    "variant": "warning",
    "level": "LEGENDARY"
  },
  {
    "key": "experience-4",
    "title": "Software Engineer at Dacodes",
    "description": "Created an application to manage the capacitation of operators in Yucatán, México.",
    "period": "Apr 2024 - Dec 2024",
    "startDate": new Date("2024-05-01T00:00:00.000Z"),
    "current": false,
    "company": "Dacodes",
    "location": "Remote (From Ecuador)",
    "tech": [],
    "variant": "secondary",
    "level": "EPIC"
  },
  {
    "key": "experience-3",
    "title": "Frontend Developer at CacaoWebStudio",
    "description": "Developed a client's page using the new version of Shopify Theme Dawn.",
    "period": "Oct 2023 - Feb 2024",
    "startDate": new Date("2023-11-01T00:00:00.000Z"),
    "current": false,
    "company": "Cacao Web Studio",
    "location": "Remote (From Ecuador)",
    "tech": [],
    "variant": "ghost",
    "level": "COMMON"
  },
  {
    "key": "experience-2",
    "title": "FullStack Developer at Soluciones y Proyectos SA",
    "description": "Implemented Nomina360, a web app for human resources management.",
    "period": "Sep 2022 - Nov 2023",
    "startDate": new Date("2022-10-01T00:00:00.000Z"),
    "current": false,
    "company": "Soluciones y Proyectos SA",
    "location": "Remote (From Ecuador)",
    "tech": [],
    "variant": "secondary",
    "level": "EPIC"
  },
  {
    "key": "experience-1",
    "title": "FullStack Developer at MonkeyDDevelopment",
    "description": "We created a web application to streamline the student enrollment process.",
    "period": "Jan 2021 - Jul 2022",
    "startDate": new Date("2021-02-01T00:00:00.000Z"),
    "current": false,
    "company": "MonkeyDDeveloper",
    "location": "Remote (From Ecuador)",
    "tech": [],
    "variant": "default",
    "level": "EPIC"
  }
]

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