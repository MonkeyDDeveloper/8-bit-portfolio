import { useTranslation } from 'react-i18next';
import { PixelCard, PixelCardHeader, PixelCardTitle, PixelCardContent } from '@/components/PixelCard';
import { PixelBadge } from '@/components/PixelBadge';
import { PixelProgress } from '@/components/PixelProgress';
import { Code, GraduationCap, Languages, Award, Mail, Linkedin, Github, Globe, Star, Zap, Shield, Brain, Wind } from 'lucide-react';

// RPG-style attribute dots
function AttrDots({ value, max = 5, color = 'bg-retro-accent' }) {
  return (
    <div className="flex gap-1">
      {[...Array(max)].map((_, i) => (
        <div
          key={i}
          className={`w-2.5 h-2.5 border border-current/30 ${i < value ? color : 'bg-transparent'}`}
        />
      ))}
    </div>
  );
}

const ATTRS = [
  { label: 'ATK', icon: Zap,    dots: 5, color: 'bg-retro-danger' },
  { label: 'INT', icon: Brain,  dots: 5, color: 'bg-retro-accent' },
  { label: 'DEF', icon: Shield, dots: 4, color: 'bg-retro-secondary' },
  { label: 'SPD', icon: Wind,   dots: 4, color: 'bg-retro-warning' },
];

const SKILLS_CONFIG = [
  { key: 'frontend', label: 'FRONTEND', color: 'text-retro-accent',   variant: 'default' },
  { key: 'backend',  label: 'BACKEND',  color: 'text-retro-secondary', variant: 'secondary' },
  { key: 'database', label: 'DATABASE', color: 'text-retro-accent',   variant: 'accent' },
  { key: 'devops',   label: 'DEVOPS',   color: 'text-retro-warning',  variant: 'warning' },
];

export function AboutPage() {
  const { t } = useTranslation();

  const skills = {
    frontend: [
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'React.js',   level: 90 },
      { name: 'Vue.js',     level: 90 },
      { name: 'Nuxt.js',   level: 85 },
    ],
    backend: [
      { name: 'Node.js',  level: 90 },
      { name: 'Python',   level: 85 },
      { name: 'Express',  level: 90 },
      { name: 'Flask',    level: 75 },
      { name: 'FastAPI',  level: 80 },
    ],
    database: [
      { name: 'MongoDB',    level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL',      level: 75 },
      { name: 'Redis',      level: 70 },
    ],
    devops: [
      { name: 'Docker',    level: 85 },
      { name: 'Git/GitHub',level: 95 },
      { name: 'AWS',       level: 70 },
      { name: 'CI/CD',     level: 75 },
    ],
  };

  const certifications = [
    'GitHub Actions (2024)',
    'Dacodes Academy Python I (2024)',
    'Google: IA y Productividad (2024)',
  ];

  const contactLinks = [
    { icon: Mail,    value: 'fraydeveloper@gmail.com',    href: 'mailto:fraydeveloper@gmail.com' },
    { icon: Linkedin,value: 'javier-fray',                href: 'https://www.linkedin.com/in/javier-fray/' },
    { icon: Github,  value: 'MonkeyDDeveloper',           href: 'https://github.com/MonkeyDDeveloper' },
    { icon: Globe,   value: 'monkeydeveloper.com',        href: 'https://www.monkeydeveloper.com' },
  ];

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-6xl mx-auto">

        {/* ── Page header ── */}
        <div className="text-center mb-12" style={{ animation: 'fade-in 0.4s ease-out both' }}>
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="flex-1 max-w-24 h-px bg-retro-primary/60" />
            <p className="font-mono text-xs text-retro-secondary/60 tracking-widest">
              {t('about.subtitle')}
            </p>
            <div className="flex-1 max-w-24 h-px bg-retro-primary/60" />
          </div>
          <h1
            className="font-pixel text-2xl md:text-4xl text-retro-accent"
            style={{ textShadow: '3px 3px 0 #1e3a8a' }}
          >
            {t('about.title')}
          </h1>
          {/* Decorative underline */}
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

        <div className="grid gap-8 lg:grid-cols-3">

          {/* ── Left: Character card ── */}
          <div className="lg:col-span-1 space-y-5">

            {/* Game card */}
            <div
              className="border-4 border-retro-primary shadow-[8px_8px_0_0_currentColor] text-retro-primary overflow-hidden"
              style={{ animation: 'fade-in 0.4s ease-out 0.1s both, float 4s ease-in-out 1s infinite' }}
            >
              {/* Card header band */}
              <div className="bg-retro-primary flex items-center justify-between px-3 py-2 player-header-band">
                <span className="font-pixel text-[9px] text-retro-white/80">PLAYER_01</span>
                <span className="font-pixel text-[9px] text-retro-warning">★ LVL 4</span>
              </div>

              {/* Portrait area */}
              <div className="bg-gradient-to-br from-retro-primary/20 to-transparent p-4">
                <div className="relative mx-auto w-fit">
                  {/* Outer glow frame */}
                  <div className="absolute -inset-2 border border-retro-accent/20" />
                  <img
                    src="/images/Myself_gihbli.jpg"
                    alt="Javier Fray"
                    className="w-32 h-32 border-4 border-retro-primary object-cover block"
                  />
                  {/* Corner accents */}
                  <span className="absolute -top-0.5 -left-0.5 w-3 h-3 border-l-2 border-t-2 border-retro-accent" />
                  <span className="absolute -top-0.5 -right-0.5 w-3 h-3 border-r-2 border-t-2 border-retro-accent" />
                  <span className="absolute -bottom-0.5 -left-0.5 w-3 h-3 border-l-2 border-b-2 border-retro-accent" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-r-2 border-b-2 border-retro-accent" />
                </div>
              </div>

              {/* Name + class */}
              <div className="px-4 pb-1 text-center border-b-2 border-retro-primary/30">
                <h2 className="font-pixel text-sm text-retro-white mb-1">JAVIER FRAY</h2>
                <div className="inline-block border border-retro-warning/60 bg-retro-warning/10 px-2.5 py-0.5 mb-3">
                  <span className="font-pixel text-[8px] text-retro-warning">⚔ FULL STACK DEV</span>
                </div>
              </div>

              {/* Attribute dots */}
              <div className="px-4 py-3 space-y-2">
                {ATTRS.map(({ label, icon: Icon, dots, color }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Icon size={11} className="shrink-0 opacity-60" />
                    <span className="font-pixel text-[8px] text-retro-gray w-6">{label}</span>
                    <AttrDots value={dots} color={color} />
                  </div>
                ))}
              </div>

              {/* EXP bar */}
              <div className="px-4 pb-4 pt-1">
                <div className="flex justify-between mb-1">
                  <span className="font-pixel text-[8px] text-retro-gray">EXP</span>
                  <span className="font-pixel text-[8px] text-retro-warning">4750 / 6000</span>
                </div>
                <div className="h-2 bg-retro-darkgray border border-retro-warning/40 relative overflow-hidden">
                  <div className="h-full bg-retro-warning/70 relative" style={{ width: '79%' }}>
                    {/* Shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-scan" style={{ animationDuration: '2s' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <PixelCard variant="accent" style={{ animation: 'fade-in 0.4s ease-out 0.2s both' }}>
              <PixelCardHeader>
                <PixelCardTitle className="flex items-center gap-2">
                  <Languages size={14} />
                  {t('about.languages')}
                </PixelCardTitle>
              </PixelCardHeader>
              <PixelCardContent>
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-lg">{t('about.spanish')}</span>
                    <PixelBadge variant="default">100%</PixelBadge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-lg">{t('about.english')}</span>
                    <PixelBadge variant="secondary">B2</PixelBadge>
                  </div>
                </div>
              </PixelCardContent>
            </PixelCard>

            {/* Contact */}
            <PixelCard variant="secondary" style={{ animation: 'fade-in 0.4s ease-out 0.3s both' }}>
              <PixelCardHeader>
                <PixelCardTitle className="flex items-center gap-2">
                  <Mail size={14} />
                  {t('about.contact')}
                </PixelCardTitle>
              </PixelCardHeader>
              <PixelCardContent>
                <div className="space-y-1">
                  {contactLinks.map(({ icon: Icon, value, href }) => (
                    <a
                      key={value}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 py-1.5 px-2 border border-transparent hover:border-current/30 hover:bg-white/5 transition-all group"
                    >
                      <Icon size={13} className="shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
                      <span className="font-mono text-base truncate group-hover:translate-x-0.5 transition-transform">
                        {value}
                      </span>
                    </a>
                  ))}
                </div>
              </PixelCardContent>
            </PixelCard>
          </div>

          {/* ── Right: Bio + Skills + Education ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Bio — styled as RPG dialogue box */}
            <div
              className="border-4 border-retro-primary shadow-[8px_8px_0_0_currentColor] text-retro-primary"
              style={{ animation: 'fade-in 0.4s ease-out 0.15s both' }}
            >
              {/* Title bar */}
              <div className="bg-retro-primary/30 border-b-2 border-retro-primary/30 px-4 py-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-retro-accent" />
                <span className="font-pixel text-xs text-retro-white">BIOGRAPHY</span>
              </div>
              <div className="p-4 space-y-3 bg-gradient-to-br from-white/5 to-transparent">
                {[t('about.bio'), t('about.bio2'), t('about.bio3')].map((line, i) => (
                  <p key={i} className="flex gap-2 font-mono text-lg leading-relaxed text-retro-white/90">
                    <span className="text-retro-secondary shrink-0 mt-0.5 select-none">&gt;</span>
                    <span>{line}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Skills */}
            <PixelCard variant="secondary" style={{ animation: 'fade-in 0.4s ease-out 0.25s both' }}>
              <PixelCardHeader>
                <PixelCardTitle className="flex items-center gap-2">
                  <Code size={14} />
                  {t('about.skills')}
                </PixelCardTitle>
              </PixelCardHeader>
              <PixelCardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {SKILLS_CONFIG.map(({ key, label, color, variant }) => (
                    <div key={key}>
                      <div className={`flex items-center gap-2 mb-3`}>
                        <span className={`font-pixel text-xs ${color}`}>▸ {label}</span>
                        <div className="flex-1 h-px bg-current/10" />
                      </div>
                      <div className="space-y-2.5">
                        {skills[key].map(({ name, level }) => (
                          <PixelProgress key={name} value={level} label={name} variant={variant} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </PixelCardContent>
            </PixelCard>

            {/* Education + Certifications */}
            <div className="grid md:grid-cols-2 gap-5">
              <PixelCard variant="warning" style={{ animation: 'fade-in 0.4s ease-out 0.35s both' }}>
                <PixelCardHeader>
                  <PixelCardTitle className="flex items-center gap-2">
                    <GraduationCap size={14} />
                    {t('about.education')}
                  </PixelCardTitle>
                </PixelCardHeader>
                <PixelCardContent>
                  <p className="font-mono text-lg mb-1.5 leading-snug">{t('about.educationTitle')}</p>
                  <p className="font-pixel text-xs text-retro-gray">{t('about.educationPlace')}</p>
                </PixelCardContent>
              </PixelCard>

              <PixelCard variant="accent" style={{ animation: 'fade-in 0.4s ease-out 0.4s both' }}>
                <PixelCardHeader>
                  <PixelCardTitle className="flex items-center gap-2">
                    <Award size={14} />
                    {t('about.certifications')}
                  </PixelCardTitle>
                </PixelCardHeader>
                <PixelCardContent>
                  <ul className="space-y-2.5">
                    {certifications.map((name) => (
                      <li key={name} className="flex items-start gap-2">
                        <Star size={11} className="shrink-0 mt-1 text-retro-warning" fill="currentColor" />
                        <span className="font-mono text-base leading-relaxed">{name}</span>
                      </li>
                    ))}
                  </ul>
                </PixelCardContent>
              </PixelCard>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}