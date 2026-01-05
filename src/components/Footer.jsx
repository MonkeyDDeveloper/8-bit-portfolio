import { useTranslation } from 'react-i18next';
import { Heart, Github, Linkedin, Globe, Mail } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/MonkeyDDeveloper', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/javier-fray/', label: 'LinkedIn' },
    { icon: Globe, href: 'https://www.monkeydeveloper.com', label: 'Website' },
    { icon: Mail, href: 'mailto:fraydeveloper@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="border-t-4 border-retro-primary bg-retro-black/80 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Pixel Art Divider */}
        <div className="flex justify-center mb-6">
          <div className="flex gap-1">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-retro-primary"
                style={{
                  opacity: i % 2 === 0 ? 1 : 0.5,
                  animation: `bounce-pixel 0.5s ease-in-out ${i * 0.1}s infinite`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-6">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-retro-gray hover:text-retro-secondary transition-colors border-2 border-transparent hover:border-retro-secondary"
              title={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-pixel text-[8px] text-retro-gray uppercase tracking-wider flex items-center justify-center gap-2">
            {t('footer.madeWith')}
            <Heart size={12} className="text-retro-danger animate-bounce-pixel" fill="currentColor" />
            {t('footer.by')}
          </p>
          <p className="font-pixel text-[8px] text-retro-darkgray mt-2">
            © {new Date().getFullYear()} - ALL RIGHTS RESERVED
          </p>
        </div>

        {/* Retro Console Message */}
        <div className="mt-6 text-center">
          <p className="font-mono text-xs text-retro-primary/50">
            &gt; GAME OVER? NEVER. KEEP CODING_<span className="animate-blink">|</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
