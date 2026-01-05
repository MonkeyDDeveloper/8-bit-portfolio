import { useState, useEffect } from 'react';
import { portfolioAPI } from '@/services/api';
import { projectsMetadata, defaultProjectMetadata } from '@/config/projectsMetadata';

export function useProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      setIsLoading(true);
      setError(null);

      try {
        const apiProjects = await portfolioAPI.getProjects();

        // Mapear y enriquecer datos de API
        const enrichedProjects = apiProjects.map(project => {
          const metadata = projectsMetadata[project.id] || defaultProjectMetadata;

          return {
            key: `project-${project.id}`,
            name: project.name,           // Inglés desde API (no i18n)
            description: project.description, // Inglés desde API (no i18n)
            tech: metadata.tech,
            github: project.github_uri,
            variant: metadata.variant,
          };
        });

        setProjects(enrichedProjects);
      } catch (err) {
        setError(err.message || 'Failed to load projects');
        console.error('Projects fetch error:', err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return { projects, isLoading, error };
}
