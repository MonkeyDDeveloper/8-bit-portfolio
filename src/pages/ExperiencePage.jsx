import { useTranslation } from 'react-i18next';
import { PixelCard, PixelCardHeader, PixelCardTitle, PixelCardContent } from '@/components/PixelCard';
import { PixelBadge } from '@/components/PixelBadge';
import { Briefcase, MapPin, Calendar, Swords, Shield, Terminal, Star, ChevronRight } from 'lucide-react';
import { useExperiences } from '@/hooks/useExperiences';

const LEVEL_BADGE_VARIANTS = {
  LEGENDARY: 'warning',
  EPIC:      'accent',
  RARE:      'secondary',
  COMMON:    'default',
};

const LEVEL_GLOW = {
  LEGENDARY: 'shadow-[0_0_16px_rgba(245,158,11,0.55)]',
  EPIC:      'shadow-[0_0_12px_rgba(96,165,250,0.45)]',
  RARE:      'shadow-[0_0_8px_rgba(59,130,246,0.3)]',
  COMMON:    '',
};

const LEVEL_ICONS = {
  LEGENDARY: '★★★',
  EPIC:      '★★',
  RARE:      '★',
  COMMON:    '◆',
};

const BADGE_VARIANTS = ['default', 'secondary', 'accent', 'warning', 'ghost'];

function calculateYearsOfExperience(experiences) {
  if (!experiences || experiences.length === 0) return '0';
  const oldest = new Date(Math.min(...experiences.map((e) => e.startDate)));
  const now = new Date();
  let years = now.getFullYear() - oldest.getFullYear();
  const m = now.getMonth() - oldest.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < oldest.getDate())) years--;
  return `${years}`;
}

export function ExperiencePage() {
  const { t } = useTranslation();
  const { experiences, isLoading, error } = useExperiences();

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

  const yearsOfExperience = calculateYearsOfExperience(experiences);

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-4xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-10" style={{ animation: 'fade-in 0.4s ease-out both' }}>
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="flex-1 max-w-24 h-px bg-retro-primary/60" />
            <p className="font-mono text-xs text-retro-secondary/60 tracking-widest">
              {t('experience.subtitle')}
            </p>
            <div className="flex-1 max-w-24 h-px bg-retro-primary/60" />
          </div>
          <h1
            className="font-pixel text-2xl md:text-4xl text-retro-accent"
            style={{ textShadow: '3px 3px 0 #1e3a8a' }}
          >
            {t('experience.title')}
          </h1>
          <div className="flex justify-center gap-1 mt-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-1 bg-retro-primary"
                style={{ width: i % 2 === 0 ? 16 : 8, opacity: 0.4 + i * 0.05 }}
              />
            ))}
          </div>
        </div>

        {/* ── Battle stats bar ── */}
        <div
          className="mb-10"
          style={{ animation: 'fade-in 0.4s ease-out 0.1s both' }}
        >
          <div className="border-2 border-retro-primary/30 px-6 py-3 flex justify-center items-center gap-8 flex-wrap relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-retro-primary/10 to-transparent pointer-events-none" />
            <div className="flex items-center gap-2 relative z-10">
              <Swords size={15} className="text-retro-danger" />
              <span className="font-pixel text-xs">{experiences.length} BATTLES WON</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-retro-gray/30 relative z-10" />
            <div className="flex items-center gap-2 relative z-10">
              <Shield size={15} className="text-retro-accent" />
              <span className="font-pixel text-xs">{yearsOfExperience}+ YEARS EXP</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-retro-gray/30 relative z-10" />
            <div className="flex items-center gap-2 relative z-10">
              <Star size={15} className="text-retro-warning" fill="currentColor" />
              <span className="font-pixel text-xs">FULL STACK</span>
            </div>
          </div>
        </div>

        {/* ── Timeline ── */}
        <div className="relative pl-10 md:pl-12">
          {/* Vertical line */}
          <div className="absolute left-3.5 top-2 bottom-8 w-0.5 bg-gradient-to-b from-retro-accent/60 via-retro-primary/30 to-transparent" />

          {experiences.map((exp, index) => (
            <div
              key={exp.key}
              className="relative mb-8 last:mb-0"
              style={{ animation: `fade-in 0.4s ease-out ${0.15 + index * 0.12}s both` }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute -left-10 top-5 w-4 h-4 border-2 ${
                  exp.current
                    ? `bg-retro-accent border-retro-accent ${LEVEL_GLOW.EPIC}`
                    : 'bg-retro-primary border-retro-primary'
                }`}
              >
                {exp.current && (
                  <div className="absolute inset-0.5 bg-retro-white/30 animate-pulse" />
                )}
              </div>

              {/* Connector */}
              <div className="absolute -left-6 top-[22px] h-0.5 w-5 bg-retro-primary/30" />

              <PixelCard
                variant={exp.variant}
                className={`relative group ${LEVEL_GLOW[exp.level] || ''}`}
              >
                {/* Level badge + stars */}
                <div className={`absolute -top-3 right-4 flex items-center gap-1.5 ${LEVEL_GLOW[exp.level] || ''}`}>
                  <span className="font-pixel text-[8px] opacity-50">
                    {LEVEL_ICONS[exp.level] || '◆'}
                  </span>
                  <PixelBadge variant={LEVEL_BADGE_VARIANTS[exp.level] || 'default'}>
                    {exp.level}
                  </PixelBadge>
                </div>

                {/* Hover chevron */}
                <ChevronRight
                  size={14}
                  className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-40 transition-opacity"
                />

                <PixelCardHeader>
                  <div className="space-y-1.5 pr-24">
                    <PixelCardTitle className="flex items-center gap-2">
                      <Briefcase size={14} className="opacity-70 shrink-0" />
                      {exp.title}
                    </PixelCardTitle>
                    <p className="font-pixel text-[10px] opacity-80">
                      @ {exp.company}
                      {exp.current && (
                        <span className="ml-2 text-retro-accent animate-blink">
                          [{t('experience.current')}]
                        </span>
                      )}
                    </p>
                    <div className="flex flex-wrap gap-3 text-retro-gray">
                      <span className="flex items-center gap-1 font-mono text-xs">
                        <MapPin size={12} />{exp.location}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-xs">
                        <Calendar size={12} />{exp.period}
                      </span>
                    </div>
                  </div>
                </PixelCardHeader>

                <PixelCardContent>
                  <p className="font-mono text-base mb-4 text-retro-white/90 leading-relaxed">
                    <span className="text-retro-secondary mr-1.5 select-none">&gt;</span>
                    {exp.description}
                  </p>

                  {exp.tech.length > 0 && (
                    <div>
                      <p className="font-pixel text-[9px] text-retro-gray mb-2 uppercase">
                        {t('experience.techStack')}:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((tech, i) => (
                          <PixelBadge key={tech} variant={BADGE_VARIANTS[i % BADGE_VARIANTS.length]}>
                            {tech}
                          </PixelBadge>
                        ))}
                      </div>
                    </div>
                  )}
                </PixelCardContent>
              </PixelCard>
            </div>
          ))}
        </div>

        {/* End marker */}
        <div
          className="text-center mt-10"
          style={{ animation: `fade-in 0.4s ease-out ${0.2 + experiences.length * 0.12}s both` }}
        >
          <div className="inline-block border-2 border-retro-primary/30 px-6 py-2.5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-retro-accent/5 to-transparent" />
            <p className="font-pixel text-xs text-retro-secondary/70 relative z-10">
              &gt; THE ADVENTURE CONTINUES<span className="animate-blink">_</span>
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
          style={{ animation: `fade-in 0.4s ease-out ${0.3 + experiences.length * 0.12}s both` }}
        >
          {[
            { label: 'COMPANIES',    value: experiences.length, variant: 'default',   glow: 'hover:shadow-[0_0_16px_rgba(30,58,138,0.4)]' },
            { label: 'YEARS',        value: `${yearsOfExperience}+`, variant: 'secondary', glow: 'hover:shadow-[0_0_16px_rgba(59,130,246,0.35)]' },
            { label: 'TECHNOLOGIES', value: '20+', variant: 'default',   glow: 'hover:shadow-[0_0_16px_rgba(30,58,138,0.4)]' },
            { label: 'PROJECTS',     value: '10+', variant: 'secondary', glow: 'hover:shadow-[0_0_16px_rgba(59,130,246,0.35)]' },
          ].map((stat) => (
            <PixelCard
              key={stat.label}
              variant={stat.variant}
              className={`text-center py-4 relative overflow-hidden group cursor-default transition-all duration-200 ${stat.glow}`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-current opacity-0 group-hover:opacity-50 transition-opacity" />
              <p className="font-pixel text-xl md:text-2xl group-hover:scale-110 transition-transform origin-bottom">{stat.value}</p>
              <p className="font-pixel text-[9px] mt-2 opacity-60">{stat.label}</p>
            </PixelCard>
          ))}
        </div>

      </div>
    </div>
  );
}