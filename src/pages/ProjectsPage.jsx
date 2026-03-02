import { useTranslation } from 'react-i18next';
import { PixelCard, PixelCardHeader, PixelCardTitle, PixelCardContent } from '@/components/PixelCard';
import { PixelBadge } from '@/components/PixelBadge';
import { PixelButton } from '@/components/PixelButton';
import { ExternalLink, Github, Folder, Terminal, Star } from 'lucide-react';
import { useProjects } from '@/hooks/useProjects';

const RARITY_LABELS = {
  default:   'STANDARD',
  secondary: 'ADVANCED',
  accent:    'EXPERT',
  warning:   'LEGENDARY',
  ghost:     'HIDDEN',
};

const RARITY_GLOW = {
  warning: 'hover:shadow-[0_0_20px_rgba(245,158,11,0.45)]',
  accent:  'hover:shadow-[0_0_16px_rgba(96,165,250,0.35)]',
  secondary: 'hover:shadow-[0_0_14px_rgba(59,130,246,0.3)]',
  default: 'hover:shadow-[0_0_12px_rgba(30,58,138,0.35)]',
  ghost:   '',
};

const RARITY_STARS = {
  warning:   '★★★★',
  accent:    '★★★',
  secondary: '★★',
  default:   '★',
  ghost:     '◈',
};

const BADGE_VARIANTS = ['default', 'secondary', 'accent', 'warning', 'ghost'];

export function ProjectsPage() {
  const { t } = useTranslation();
  const { projects, isLoading, error } = useProjects();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <PixelCard variant="ghost" className="text-center py-10 px-16">
          <PixelCardContent>
            <Terminal size={24} className="mx-auto mb-4 opacity-40 animate-bounce-pixel" />
            <p className="font-pixel text-xs animate-blink">{t('common.loading')} ▄▄▄▄▄</p>
          </PixelCardContent>
        </PixelCard>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <PixelCard variant="warning" className="text-center py-10 px-16">
          <PixelCardContent>
            <p className="font-pixel text-xs text-retro-warning mb-2">{t('common.error')}</p>
            <p className="font-mono text-xs opacity-60">{error}</p>
          </PixelCardContent>
        </PixelCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-12" style={{ animation: 'fade-in 0.4s ease-out both' }}>
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="flex-1 max-w-24 h-px bg-retro-primary/60" />
            <p className="font-mono text-xs text-retro-secondary/60 tracking-widest">
              {t('projects.subtitle')}
            </p>
            <div className="flex-1 max-w-24 h-px bg-retro-primary/60" />
          </div>
          <h1
            className="font-pixel text-2xl md:text-4xl text-retro-accent mb-6"
            style={{ textShadow: '3px 3px 0 #1e3a8a' }}
          >
            {t('projects.title')}
          </h1>
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-1 bg-retro-primary"
                style={{ width: i % 2 === 0 ? 16 : 8, opacity: 0.4 + i * 0.05 }}
              />
            ))}
          </div>
          <div className="inline-block border-2 border-retro-primary/50 px-6 py-2.5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-retro-accent/5 to-transparent" />
            <p className="font-pixel text-xs text-retro-secondary relative z-10">
              SELECT YOUR QUEST <span className="animate-blink">▼</span>
            </p>
          </div>
        </div>

        {/* ── Projects grid ── */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <PixelCard
              key={project.key}
              variant={project.variant}
              className={`group relative flex flex-col transition-all duration-200 ${RARITY_GLOW[project.variant] || ''}`}
              style={{ animation: `fade-in 0.4s ease-out ${0.1 + index * 0.08}s both` }}
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-current opacity-0 group-hover:opacity-50 transition-opacity" />

              <PixelCardHeader>
                <div className="flex items-start justify-between gap-3">
                  <PixelCardTitle className="flex items-center gap-2 flex-1">
                    <Folder size={14} className="opacity-60 shrink-0" />
                    {project.name}
                  </PixelCardTitle>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <span className="font-pixel text-[8px] opacity-30">
                      {RARITY_STARS[project.variant] || '★'}
                    </span>
                    <PixelBadge variant={project.variant} className="text-[8px] py-0.5">
                      {RARITY_LABELS[project.variant] || 'STANDARD'}
                    </PixelBadge>
                    <span className="font-pixel text-[8px] opacity-30">
                      #{String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </PixelCardHeader>

              <PixelCardContent className="flex flex-col flex-1">
                <p className="font-mono text-base mb-4 text-retro-white/90 leading-relaxed flex-1">
                  {project.description}
                </p>

                {project.tech.length > 0 && (
                  <div className="mb-4">
                    <p className="font-pixel text-[9px] text-retro-gray mb-1.5 uppercase">
                      {t('projects.techStack')}:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech, i) => (
                        <PixelBadge key={tech} variant={BADGE_VARIANTS[i % BADGE_VARIANTS.length]}>
                          {tech}
                        </PixelBadge>
                      ))}
                    </div>
                  </div>
                )}

                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <PixelButton variant={project.variant} size="sm" className="w-full">
                    <Github size={13} className="mr-2" />
                    {t('projects.viewCode')}
                  </PixelButton>
                </a>
              </PixelCardContent>

              {/* Hover indicator */}
              <span className="absolute top-1/2 -right-2.5 -translate-y-1/2 font-pixel text-xs opacity-0 group-hover:opacity-100 transition-opacity animate-blink pointer-events-none">
                ◀
              </span>
            </PixelCard>
          ))}
        </div>

        {/* GitHub CTA */}
        <div
          className="mt-12 text-center"
          style={{ animation: `fade-in 0.4s ease-out ${0.2 + projects.length * 0.08}s both` }}
        >
          <div className="border-4 border-retro-gray/30 shadow-[8px_8px_0_0_currentColor] text-retro-gray/30 inline-block hover:shadow-[0_0_24px_rgba(96,165,250,0.15)] transition-shadow">
            <div className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Star size={12} className="text-retro-warning opacity-60" fill="currentColor" />
                <p className="font-pixel text-[10px] text-retro-gray/50">MORE QUESTS AVAILABLE</p>
                <Star size={12} className="text-retro-warning opacity-60" fill="currentColor" />
              </div>
              <p className="font-mono text-sm mb-4 text-retro-gray">
                &gt; EXPLORE ALL REPOSITORIES ON GITHUB<span className="animate-blink">_</span>
              </p>
              <a
                href="https://github.com/MonkeyDDeveloper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PixelButton variant="default" size="md">
                  <Github size={14} className="mr-2" />
                  VIEW ALL REPOSITORIES
                  <ExternalLink size={13} className="ml-2" />
                </PixelButton>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}