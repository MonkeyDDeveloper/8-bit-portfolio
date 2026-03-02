import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PixelButton } from '@/components/PixelButton';
import { PixelCard, PixelCardContent } from '@/components/PixelCard';
import { MapPin, Gamepad2, Code, Rocket } from 'lucide-react';

const BOOT_LINES = [
  { text: '> SYS: LOADING PORTFOLIO v1.0.0...', delay: '0s',    success: false },
  { text: '> SYS: INITIALIZING PLAYER DATA...',  delay: '0.35s', success: false },
  { text: '> SYS: OK — PLAYER READY',            delay: '0.7s',  success: true },
];

const TECH_TAGS = ['JS', 'TS', 'PY', 'VUE', 'REACT', 'NODE'];

const STAT_GLOWS = {
  default:   'hover:shadow-[0_0_20px_rgba(30,58,138,0.5)]',
  secondary: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]',
  accent:    'hover:shadow-[0_0_20px_rgba(96,165,250,0.4)]',
};

export function HomePage() {
  const { t } = useTranslation();

  const stats = [
    { value: '4+', label: t('home.stats.years'),        icon: Gamepad2, variant: 'default' },
    { value: '8+', label: t('home.stats.projects'),     icon: Code,     variant: 'secondary' },
    { value: '20+',label: t('home.stats.technologies'), icon: Rocket,   variant: 'accent' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full space-y-6">

        {/* Boot sequence */}
        <div className="text-center space-y-1">
          {BOOT_LINES.map(({ text, delay, success }) => (
            <p
              key={text}
              className={`font-mono text-xs ${success ? 'text-retro-success' : 'text-retro-secondary/40'}`}
              style={{ animation: `fade-in 0.4s ease-out ${delay} both` }}
            >
              {text}
            </p>
          ))}
        </div>

        {/* ── Hero card ── */}
        <div style={{ animation: 'fade-in 0.5s ease-out 1s both' }} className="animate-float">
          <PixelCard
            variant="default"
            className="relative overflow-visible"
            style={{ boxShadow: '8px 8px 0 0 #1e3a8a, 0 0 40px rgba(96,165,250,0.08)' }}
          >
            {/* Outer accent corner frames */}
            <span className="absolute -top-2 -left-2 w-7 h-7 border-l-4 border-t-4 border-retro-accent pointer-events-none z-10" />
            <span className="absolute -top-2 -right-2 w-7 h-7 border-r-4 border-t-4 border-retro-accent pointer-events-none z-10" />
            <span className="absolute -bottom-2 -left-2 w-7 h-7 border-l-4 border-b-4 border-retro-accent pointer-events-none z-10" />
            <span className="absolute -bottom-2 -right-2 w-7 h-7 border-r-4 border-b-4 border-retro-accent pointer-events-none z-10" />

            {/* Top decorative bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-retro-accent/50 to-transparent z-10" />

            {/* Subtle background grid overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage: 'linear-gradient(rgba(96,165,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,1) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            <PixelCardContent className="text-center py-10 md:py-16 px-4 md:px-12 relative z-10">

              {/* Greeting */}
              <p className="font-mono text-xs text-retro-secondary/60 mb-5 tracking-[0.3em] uppercase">
                {t('home.greeting')}
              </p>

              {/* Name — primary focus */}
              <h1
                className="font-pixel text-3xl md:text-5xl text-retro-accent mb-5 leading-tight"
                style={{ textShadow: '4px 4px 0 #1e3a8a, 8px 8px 0 rgba(30,58,138,0.3)' }}
              >
                {t('home.name')}
              </h1>

              {/* Title with flanking lines */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="flex-1 max-w-[100px] h-px bg-retro-warning/40" />
                <h2 className="font-pixel text-[11px] md:text-sm text-retro-warning tracking-wider">
                  {t('home.title')}
                </h2>
                <div className="flex-1 max-w-[100px] h-px bg-retro-warning/40" />
              </div>

              {/* Subtitle */}
              <p className="font-mono text-base md:text-xl text-retro-white/75 max-w-md mx-auto mb-6 leading-relaxed">
                {t('home.subtitle')}
              </p>

              {/* Location */}
              <div className="flex items-center justify-center gap-1.5 text-retro-accent/80 mb-10">
                <MapPin size={13} />
                <span className="font-pixel text-[10px]">{t('home.location')}</span>
              </div>

              {/* Dual CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/about">
                  <PixelButton variant="default" size="lg">
                    <span className="mr-2">▶</span>
                    {t('home.cta')}
                  </PixelButton>
                </Link>
                <Link to="/projects">
                  <PixelButton variant="secondary" size="md">
                    <Code size={13} className="mr-2" />
                    {t('nav.projects')}
                  </PixelButton>
                </Link>
              </div>

            </PixelCardContent>

            {/* Bottom decorative bar */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-retro-accent/50 to-transparent z-10" />
          </PixelCard>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-4"
          style={{ animation: 'fade-in 0.5s ease-out 1.2s both' }}
        >
          {stats.map(({ value, label, icon: Icon, variant }) => (
            <PixelCard
              key={label}
              variant={variant}
              className={`text-center py-5 relative overflow-hidden group cursor-default transition-all duration-200 ${STAT_GLOWS[variant]}`}
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
              {/* Hover accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-current opacity-0 group-hover:opacity-60 transition-opacity" />

              <Icon className="mx-auto mb-2 opacity-40 group-hover:opacity-70 transition-opacity" size={22} />
              <p className="font-pixel text-xl md:text-3xl group-hover:scale-105 transition-transform origin-bottom">{value}</p>
              <p className="font-pixel text-[9px] mt-1.5 opacity-60">{label}</p>
            </PixelCard>
          ))}
        </div>

        {/* Terminal prompt + tech tags */}
        <div
          className="flex flex-col items-center gap-4"
          style={{ animation: 'fade-in 0.5s ease-out 1.4s both' }}
        >
          <div className="border-2 border-retro-primary/40 px-6 py-2 relative overflow-hidden">
            {/* Subtle moving highlight */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-retro-accent/5 to-transparent" />
            <p className="font-mono text-sm text-retro-secondary/80 relative z-10">
              &gt; PLAYER 1 READY<span className="animate-blink">_</span>
            </p>
          </div>

          <div className="flex justify-center gap-2 flex-wrap">
            {TECH_TAGS.map((tech, i) => (
              <span
                key={tech}
                className="font-pixel text-[9px] px-3 py-1.5 border border-retro-gray/25 text-retro-gray/70 hover:border-retro-accent hover:text-retro-accent hover:shadow-[0_0_8px_rgba(96,165,250,0.3)] transition-all cursor-default"
                style={{ animationDelay: `${1.5 + i * 0.08}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}