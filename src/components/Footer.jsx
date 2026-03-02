import { useTranslation } from 'react-i18next';
import { Heart, Github, Linkedin, Globe, Mail } from 'lucide-react';

const SOCIAL_LINKS = [
  { icon: Github,   href: 'https://github.com/MonkeyDDeveloper',     label: 'GitHub',   hover: 'hover:text-retro-white hover:border-retro-white' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/javier-fray/', label: 'LinkedIn', hover: 'hover:text-retro-accent hover:border-retro-accent' },
  { icon: Globe,    href: 'https://www.monkeydeveloper.com',           label: 'Website',  hover: 'hover:text-retro-secondary hover:border-retro-secondary' },
  { icon: Mail,     href: 'mailto:fraydeveloper@gmail.com',            label: 'Email',    hover: 'hover:text-retro-warning hover:border-retro-warning' },
];

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t-4 border-retro-primary bg-retro-black mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Pixel-bar divider */}
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
        <div className="flex justify-center gap-3 mb-6">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label, hover }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 text-retro-secondary border-2 border-retro-secondary/40 transition-all duration-150 ${hover}`}
              title={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-pixel text-[10px] text-retro-secondary uppercase tracking-wider flex items-center justify-center gap-2">
            {t('footer.madeWith')}
            <Heart size={12} className="text-retro-danger animate-bounce-pixel" fill="currentColor" />
            {t('footer.by')}
          </p>
          <p className="font-pixel text-[10px] text-retro-accent/70 mt-2">
            © {new Date().getFullYear()} - ALL RIGHTS RESERVED
          </p>
        </div>

        {/* Console message */}
        <div className="mt-5 text-center border-t border-retro-primary/30 pt-4">
          <p className="font-mono text-base text-retro-secondary">
            &gt; GAME OVER? NEVER. KEEP CODING_<span className="animate-blink">|</span>
          </p>
        </div>

        {/* Para Mayra */}
        <p className="mt-4 font-pixel text-[8px] text-retro-black hover:text-retro-white transition-colors duration-700 cursor-default select-none text-center flex items-center justify-center gap-1.5 group">
          Mayra
          <Heart
            size={10}
            className="text-retro-black group-hover:text-retro-danger transition-colors duration-700 group-hover:animate-heartbeat inline-block"
            fill="currentColor"
          />
        </p>

      </div>
    </footer>
  );
}