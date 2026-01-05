import { useTranslation } from 'react-i18next';
import { PixelCard, PixelCardHeader, PixelCardTitle, PixelCardContent } from '@/components/PixelCard';
import { PixelBadge } from '@/components/PixelBadge';
import { PixelButton } from '@/components/PixelButton';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { useProjects } from '@/hooks/useProjects';

export function ProjectsPage() {
  const { t } = useTranslation();
  const { projects, isLoading, error } = useProjects();

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <PixelCard variant="ghost">
              <PixelCardContent>
                <p className="font-pixel text-sm animate-blink">
                  {t('common.loading')} ▄▄▄▄▄_
                </p>
              </PixelCardContent>
            </PixelCard>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <PixelCard variant="warning">
              <PixelCardContent>
                <p className="font-pixel text-sm text-retro-warning mb-2">
                  {t('common.error')}
                </p>
                <p className="font-mono text-xs opacity-75">
                  {error}
                </p>
              </PixelCardContent>
            </PixelCard>
          </div>
        </div>
      </div>
    );
  }

  const getBadgeVariant = (index) => {
    const variants = ['default', 'secondary', 'accent', 'warning', 'ghost'];
    return variants[index % variants.length];
  };

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-pixel text-2xl md:text-3xl text-retro-primary mb-4">
            {t('projects.title')}
          </h1>
          <p className="font-pixel text-xs text-retro-secondary">
            [ {t('projects.subtitle')} ]
          </p>
        </div>

        {/* Quest Select Screen */}
        <div className="mb-8 text-center">
          <div className="inline-block border-2 border-retro-primary/50 px-6 py-3">
            <p className="font-pixel text-[10px] text-retro-primary">
              SELECT YOUR QUEST <span className="animate-blink">▼</span>
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <PixelCard
              key={project.key}
              variant={project.variant}
              className="group"
              style={{
                animation: `fade-in 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <PixelCardHeader>
                <div className="flex items-start justify-between gap-4">
                  <PixelCardTitle className="flex items-center gap-2">
                    <Folder size={16} className="opacity-75" />
                    {project.name}
                  </PixelCardTitle>
                  <PixelBadge variant={project.variant}>
                    #{String(index + 1).padStart(2, '0')}
                  </PixelBadge>
                </div>
              </PixelCardHeader>

              <PixelCardContent>
                <p className="font-mono text-sm mb-4 opacity-90">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="font-pixel text-[8px] text-retro-gray mb-2 uppercase">
                    {t('projects.techStack')}:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <PixelBadge key={tech} variant={getBadgeVariant(i)}>
                        {tech}
                      </PixelBadge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <PixelButton variant={project.variant} size="sm" className="w-full">
                      <Github size={14} className="mr-2" />
                      {t('projects.viewCode')}
                    </PixelButton>
                  </a>
                </div>
              </PixelCardContent>

              {/* Hover Effect - Quest Active Indicator */}
              <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-pixel text-xs animate-blink">◀</span>
              </div>
            </PixelCard>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <PixelCard variant="ghost" className="inline-block">
            <PixelCardContent>
              <p className="font-mono text-sm mb-4">
                &gt; MORE QUESTS AVAILABLE ON GITHUB_
              </p>
              <a
                href="https://github.com/MonkeyDDeveloper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PixelButton variant="default" size="md">
                  <Github size={16} className="mr-2" />
                  VIEW ALL REPOSITORIES
                  <ExternalLink size={14} className="ml-2" />
                </PixelButton>
              </a>
            </PixelCardContent>
          </PixelCard>
        </div>
      </div>
    </div>
  );
}
