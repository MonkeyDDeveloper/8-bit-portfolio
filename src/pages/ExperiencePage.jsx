import { useTranslation } from 'react-i18next';
import { PixelCard, PixelCardHeader, PixelCardTitle, PixelCardContent } from '@/components/PixelCard';
import { PixelBadge } from '@/components/PixelBadge';
import { Briefcase, MapPin, Calendar, Swords, Shield } from 'lucide-react';
import { useExperiences } from '@/hooks/useExperiences';

export function ExperiencePage() {
  const { t } = useTranslation();
  const { experiences, isLoading, error } = useExperiences();

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen px-4 py-24">
        <div className="max-w-4xl mx-auto">
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
        <div className="max-w-4xl mx-auto">
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

  const getLevelColor = (level) => {
    switch (level) {
      case 'LEGENDARY': return 'text-retro-warning';
      case 'EPIC': return 'text-retro-accent';
      case 'RARE': return 'text-retro-secondary';
      default: return 'text-retro-primary';
    }
  };

  const getBadgeVariant = (index) => {
    const variants = ['default', 'secondary', 'accent', 'warning', 'ghost'];
    return variants[index % variants.length];
  };

  // calc years of experience sice the oldest one until now, using a library or something like that, it should be too difficult
  const calculateYearsOfExperience = (experiences) => {
    if (!experiences || experiences.length === 0) {
      return '0';
    }

    const startDates = experiences.map(exp => exp.startDate);
    const oldestStartDate = new Date(Math.min(...startDates));
    const currentDate = new Date();

    let years = currentDate.getFullYear() - oldestStartDate.getFullYear();
    const m = currentDate.getMonth() - oldestStartDate.getMonth();

    if (m < 0 || (m === 0 && currentDate.getDate() < oldestStartDate.getDate())) {
      years--;
    }
    return `${years}`;
  };

  const yearsOfExperience = calculateYearsOfExperience(experiences);

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-pixel text-2xl md:text-3xl text-retro-primary mb-4">
            {t('experience.title')}
          </h1>
          <p className="font-pixel text-xs text-retro-secondary">
            [ {t('experience.subtitle')} ]
          </p>
        </div>

        {/* Battle Stats Header */}
        <div className="mb-8">
          <PixelCard variant="ghost" className="text-center">
            <PixelCardContent>
              <div className="flex justify-center items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <Swords size={16} className="text-retro-danger" />
                  <span className="font-pixel text-[10px]">{experiences.length} BATTLES WON</span>
                </div>
                <div className="w-px h-4 bg-retro-gray/30 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-retro-primary" />
                  <span className="font-pixel text-[10px]">{yearsOfExperience}+ YEARS EXP</span>
                </div>
              </div>
            </PixelCardContent>
          </PixelCard>
        </div>

        {/* Timeline */}
        <div className="relative">

          {experiences.map((exp, index) => (
            <div
              key={exp.key}
              className={`relative mb-8 md:mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
              style={{
                animation: `fade-in 0.5s ease-out ${index * 0.15}s both`,
              }}
            >

              {/* Content */}
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <PixelCard variant={exp.variant} className="relative">
                  {/* Level Badge */}
                  <div className="absolute -top-3 right-4">
                    <PixelBadge
                      variant={exp.current ? 'default' : 'ghost'}
                      className={getLevelColor(exp.level)}
                    >
                      {exp.level}
                    </PixelBadge>
                  </div>

                  <PixelCardHeader>
  <div className="flex flex-col items-start">
    <PixelCardTitle className="flex items-center gap-2">
      <Briefcase size={16} className="opacity-75" />
      {exp.title}
    </PixelCardTitle>
    <div className="mt-2 space-y-1">
      <p className="font-pixel text-xs">
        @ {exp.company}
        {exp.current && (
          <span className="ml-2 text-retro-primary animate-blink">
            [{t('experience.current')}]
          </span>
        )}
      </p>
      <div className="flex flex-wrap gap-3 text-retro-gray">
        <span className="flex items-center gap-1 font-mono text-[10px]">
          <MapPin size={12} />
          {exp.location}
        </span>
        <span className="flex items-center gap-1 font-mono text-[10px]">
          <Calendar size={12} />
          {exp.period}
        </span>
      </div>
    </div>
  </div>
</PixelCardHeader>

                  <PixelCardContent>
                    {/* Description */}
                    <p className="font-mono text-sm mb-4 text-left">
                      &gt; {exp.description}
                    </p>

                    {/* Tech Stack */}
                    <div>
                      <p className="font-pixel text-[8px] text-retro-gray mb-2 uppercase text-left">
                        {t('experience.techStack')}:
                      </p>
                      <div className="flex flex-wrap gap-2 justify-start">
                        {exp.tech.map((tech, i) => (
                          <PixelBadge key={tech} variant={getBadgeVariant(i)}>
                            {tech}
                          </PixelBadge>
                        ))}
                      </div>
                    </div>
                  </PixelCardContent>
                </PixelCard>
              </div>
            </div>
          ))}
        </div>

        {/* End of Timeline */}
        <div className="text-center mt-8">
          <div className="inline-block border-2 border-retro-primary/30 px-6 py-3">
            <p className="font-pixel text-[10px] text-retro-primary/70">
              &gt; THE ADVENTURE CONTINUES..._<span className="animate-blink">|</span>
            </p>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'COMPANIES', value: experiences.length },
            { label: 'YEARS', value: `${yearsOfExperience}+` },
            { label: 'TECHNOLOGIES', value: '20+' },
            { label: 'PROJECTS', value: '10+' },
          ].map((stat, index) => (
            <PixelCard
              key={stat.label}
              variant={index % 2 === 0 ? 'default' : 'secondary'}
              className="text-center py-4"
            >
              <p className="font-pixel text-lg md:text-xl">{stat.value}</p>
              <p className="font-pixel text-[8px] mt-1 opacity-75">{stat.label}</p>
            </PixelCard>
          ))}
        </div>
      </div>
    </div>
  );
}
