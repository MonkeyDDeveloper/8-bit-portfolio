import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PixelButton } from '@/components/PixelButton';
import { PixelCard, PixelCardContent } from '@/components/PixelCard';
import { MapPin, Gamepad2, Code, Rocket } from 'lucide-react';

export function HomePage() {
  const { t } = useTranslation();

  const stats = [
    { value: '4+', label: t('home.stats.years'), icon: Gamepad2 },
    { value: '8+', label: t('home.stats.projects'), icon: Code },
    { value: '20+', label: t('home.stats.technologies'), icon: Rocket },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* CRT Screen Effect Container */}
      <div className="max-w-4xl w-full">
        {/* Decorative Pixels */}
        <div className="hidden md:flex justify-center mb-8 gap-2">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3"
              style={{
                backgroundColor: i % 3 === 0 ? '#00ff00' : i % 3 === 1 ? '#00ffff' : '#ff00ff',
                animation: `fade-in 0.5s ease-out ${i * 0.1}s both`,
              }}
            />
          ))}
        </div>

        {/* Main Hero Card */}
        <PixelCard variant="default" className="relative overflow-hidden">
          {/* Corner Decorations */}
          <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-current opacity-50" />
          <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-current opacity-50" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-current opacity-50" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-current opacity-50" />

          <PixelCardContent className="text-center py-8 md:py-12">
            {/* Greeting */}
            <p className="font-pixel text-xs text-retro-secondary mb-1 animate-slide-in">
              {t('home.greeting')}
            </p>

            <p className="font-mono text-[10px] text-retro-gray/50 mb-8">
              Portfolio Alpha (v.0.0.1)
            </p>

            {/* Name */}
            <h1 className="font-pixel text-xl md:text-3xl text-retro-primary mb-4">
              {t('home.name')}
            </h1>

            {/* Title */}
            <h2 className="font-pixel text-sm md:text-lg text-retro-warning mb-6">
              {t('home.title')}
            </h2>

            {/* Subtitle */}
            <p className="font-mono text-sm md:text-base text-retro-gray max-w-lg mx-auto mb-6">
              {t('home.subtitle')}
            </p>

            {/* Location */}
            <div className="flex items-center justify-center gap-2 text-retro-accent mb-8">
              <MapPin size={16} />
              <span className="font-pixel text-[10px]">{t('home.location')}</span>
            </div>

            {/* CTA Button */}
            <Link to="/about">
              <PixelButton variant="default" size="lg">
                <span className="mr-2">▶</span>
                {t('home.cta')}
              </PixelButton>
            </Link>
          </PixelCardContent>
        </PixelCard>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          {stats.map(({ value, label, icon: Icon }, index) => (
            <PixelCard
              key={label}
              variant={index === 0 ? 'default' : index === 1 ? 'secondary' : 'accent'}
              className="text-center py-4"
              style={{
                animation: `fade-in 0.5s ease-out ${0.3 + index * 0.2}s both`,
              }}
            >
              <Icon className="mx-auto mb-2 opacity-75" size={24} />
              <p className="font-pixel text-lg md:text-xl">{value}</p>
              <p className="font-pixel text-[8px] mt-1 opacity-75">{label}</p>
            </PixelCard>
          ))}
        </div>

        {/* Retro Console Message */}
        <div className="mt-12 text-center">
          <div className="inline-block border-2 border-retro-primary/30 px-4 py-2">
            <p className="font-mono text-xs text-retro-primary/70">
              &gt; PLAYER 1 READY_<span className="animate-blink">|</span>
            </p>
          </div>
        </div>

        {/* Tech Icons Animation */}
        <div className="flex justify-center mt-8 gap-4 flex-wrap">
          {['JS', 'TS', 'PY', 'VUE', 'REACT', 'NODE'].map((tech, i) => (
            <span
              key={tech}
              className="font-pixel text-[8px] px-2 py-1 border border-retro-gray/30 text-retro-gray/70"
              style={{
                animation: `fade-in 0.3s ease-out ${0.5 + i * 0.1}s both`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
