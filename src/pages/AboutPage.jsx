import { useTranslation } from 'react-i18next';
import { PixelCard, PixelCardHeader, PixelCardTitle, PixelCardContent } from '@/components/PixelCard';
import { PixelBadge } from '@/components/PixelBadge';
import { PixelProgress } from '@/components/PixelProgress';
import { User, Code, GraduationCap, Languages, Award, Mail, Linkedin, Github, Globe } from 'lucide-react';

export function AboutPage() {
  const { t } = useTranslation();

  const skills = {
    frontend: [
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'React.js', level: 90 },
      { name: 'Vue.js', level: 90 },
      { name: 'Nuxt.js', level: 85 },
    ],
    backend: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Express', level: 90 },
      { name: 'Flask', level: 75 },
      { name: 'FastAPI', level: 80 },
    ],
    database: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 75 },
      { name: 'Redis', level: 70 },
    ],
    devops: [
      { name: 'Docker', level: 85 },
      { name: 'Git/GitHub', level: 95 },
      { name: 'AWS', level: 70 },
      { name: 'CI/CD', level: 75 },
    ],
  };

  const certifications = [
    'GitHub Actions (2024)',
    'Dacodes Academy Python I (2024)',
    'Google: IA y Productividad (2024)',
  ];

  const contactLinks = [
    { icon: Mail, label: t('about.email'), value: 'fraydeveloper@gmail.com', href: 'mailto:fraydeveloper@gmail.com' },
    { icon: Linkedin, label: t('about.linkedin'), value: 'javier-fray', href: 'https://www.linkedin.com/in/javier-fray/' },
    { icon: Github, label: t('about.github'), value: 'MonkeyDDeveloper', href: 'https://github.com/MonkeyDDeveloper' },
    { icon: Globe, label: t('about.website'), value: 'monkeydeveloper.com', href: 'https://www.monkeydeveloper.com' },
  ];

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-pixel text-2xl md:text-3xl text-retro-primary mb-4">
            {t('about.title')}
          </h1>
          <p className="font-pixel text-xs text-retro-secondary">
            [ {t('about.subtitle')} ]
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Bio & Contact */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <PixelCard variant="default">
              <PixelCardHeader>
                <PixelCardTitle className="flex items-center gap-2">
                  <User size={16} />
                  JAVIER FRAY
                </PixelCardTitle>
              </PixelCardHeader>
              <PixelCardContent>
                <div className="space-y-4">
                  {/* Avatar */}
                  <img
                    src="/images/Myself_gihbli.jpg"
                    alt="Javier Fray"
                    className="w-24 h-24 mx-auto border-4 border-current object-cover bg-retro-darkgray"
                  />
                  
                  <div className="text-center">
                    <p className="font-pixel text-[10px] text-retro-warning mb-2">
                      FULL STACK DEVELOPER
                    </p>
                    <p className="font-pixel text-[8px] text-retro-gray">
                      LVL 4+ YEARS EXP
                    </p>
                  </div>
                </div>
              </PixelCardContent>
            </PixelCard>

            {/* Contact Card */}
            <PixelCard variant="secondary">
              <PixelCardHeader>
                <PixelCardTitle className="flex items-center gap-2">
                  <Mail size={16} />
                  {t('about.contact')}
                </PixelCardTitle>
              </PixelCardHeader>
              <PixelCardContent>
                <div className="space-y-3">
                  {contactLinks.map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm hover:text-retro-secondary transition-colors group"
                    >
                      <Icon size={14} className="opacity-75" />
                      <span className="font-mono text-xs truncate group-hover:translate-x-1 transition-transform">
                        {value}
                      </span>
                    </a>
                  ))}
                </div>
              </PixelCardContent>
            </PixelCard>

            {/* Languages Card */}
            <PixelCard variant="accent">
              <PixelCardHeader>
                <PixelCardTitle className="flex items-center gap-2">
                  <Languages size={16} />
                  {t('about.languages')}
                </PixelCardTitle>
              </PixelCardHeader>
              <PixelCardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs">{t('about.spanish')}</span>
                    <PixelBadge variant="default">100%</PixelBadge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs">{t('about.english')}</span>
                    <PixelBadge variant="secondary">B2</PixelBadge>
                  </div>
                </div>
              </PixelCardContent>
            </PixelCard>
          </div>

          {/* Right Column - Bio & Skills */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bio */}
            <PixelCard variant="default">
              <PixelCardHeader>
                <PixelCardTitle>BIOGRAPHY</PixelCardTitle>
              </PixelCardHeader>
              <PixelCardContent>
                <div className="space-y-4 font-mono text-sm leading-relaxed">
                  <p>&gt; {t('about.bio')}</p>
                  <p>&gt; {t('about.bio2')}</p>
                  <p>&gt; {t('about.bio3')}</p>
                </div>
              </PixelCardContent>
            </PixelCard>

            {/* Skills */}
            <PixelCard variant="secondary">
              <PixelCardHeader>
                <PixelCardTitle className="flex items-center gap-2">
                  <Code size={16} />
                  {t('about.skills')}
                </PixelCardTitle>
              </PixelCardHeader>
              <PixelCardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Frontend */}
                  <div>
                    <p className="font-pixel text-[10px] text-retro-primary mb-3">FRONTEND</p>
                    <div className="space-y-3">
                      {skills.frontend.map(({ name, level }) => (
                        <PixelProgress
                          key={name}
                          value={level}
                          label={name}
                          variant="default"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div>
                    <p className="font-pixel text-[10px] text-retro-secondary mb-3">BACKEND</p>
                    <div className="space-y-3">
                      {skills.backend.map(({ name, level }) => (
                        <PixelProgress
                          key={name}
                          value={level}
                          label={name}
                          variant="secondary"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Database */}
                  <div>
                    <p className="font-pixel text-[10px] text-retro-accent mb-3">DATABASE</p>
                    <div className="space-y-3">
                      {skills.database.map(({ name, level }) => (
                        <PixelProgress
                          key={name}
                          value={level}
                          label={name}
                          variant="accent"
                        />
                      ))}
                    </div>
                  </div>

                  {/* DevOps */}
                  <div>
                    <p className="font-pixel text-[10px] text-retro-warning mb-3">DEVOPS</p>
                    <div className="space-y-3">
                      {skills.devops.map(({ name, level }) => (
                        <PixelProgress
                          key={name}
                          value={level}
                          label={name}
                          variant="warning"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </PixelCardContent>
            </PixelCard>

            {/* Education & Certifications */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Education */}
              <PixelCard variant="warning">
                <PixelCardHeader>
                  <PixelCardTitle className="flex items-center gap-2">
                    <GraduationCap size={16} />
                    {t('about.education')}
                  </PixelCardTitle>
                </PixelCardHeader>
                <PixelCardContent>
                  <p className="font-mono text-sm mb-2">
                    {t('about.educationTitle')}
                  </p>
                  <p className="font-pixel text-[8px] text-retro-gray">
                    {t('about.educationPlace')}
                  </p>
                </PixelCardContent>
              </PixelCard>

              {/* Certifications */}
              <PixelCard variant="accent">
                <PixelCardHeader>
                  <PixelCardTitle className="flex items-center gap-2">
                    <Award size={16} />
                    {t('about.certifications')}
                  </PixelCardTitle>
                </PixelCardHeader>
                <PixelCardContent>
                  <ul className="space-y-2">
                    {certifications.map((cert) => (
                      <li key={cert} className="flex items-start gap-2 font-mono text-xs">
                        <span className="text-retro-primary">▸</span>
                        {cert}
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
