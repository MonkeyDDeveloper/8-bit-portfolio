import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';

export function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/experience', label: t('nav.experience') },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-retro-black/95 border-b-4 border-retro-primary backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-pixel text-retro-primary text-sm hover:text-retro-secondary transition-colors"
          >
            <span className="text-retro-secondary">&lt;</span>
            JF
            <span className="text-retro-secondary">/&gt;</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'font-pixel text-[10px] uppercase tracking-wider transition-colors relative',
                  'hover:text-retro-secondary',
                  location.pathname === item.path
                    ? 'text-retro-primary'
                    : 'text-retro-gray'
                )}
              >
                {location.pathname === item.path && (
                  <span className="absolute -left-3 animate-blink">▶</span>
                )}
                {item.label}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 text-retro-gray hover:text-retro-secondary transition-colors"
              title={t('common.language')}
            >
              <Globe size={18} />
              <span className="sr-only font-pixel text-[8px] ml-1 uppercase">
                {i18n.language}
              </span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-retro-gray hover:text-retro-warning transition-colors"
              title={theme === 'dark' ? t('common.lightMode') : t('common.darkMode')}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-retro-gray hover:text-retro-primary transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t-2 border-retro-darkgray animate-slide-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'block py-3 font-pixel text-xs uppercase tracking-wider transition-colors',
                  'hover:text-retro-secondary hover:pl-4',
                  location.pathname === item.path
                    ? 'text-retro-primary'
                    : 'text-retro-gray'
                )}
              >
                {location.pathname === item.path && (
                  <span className="mr-2 animate-blink">▶</span>
                )}
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
