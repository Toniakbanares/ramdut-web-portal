import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Sun, Moon, Leaf, Droplets } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage, Language } from '../contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const themeIcons = {
    light: Sun,
    dark: Moon,
    green: Leaf,
    blue: Droplets,
  };

  const languages = [
    { code: 'pt' as Language, name: 'PT', flag: '🇧🇷' },
    { code: 'en' as Language, name: 'EN', flag: '🇺🇸' },
    { code: 'es' as Language, name: 'ES', flag: '🇪🇸' },
    { code: 'ko' as Language, name: 'KO', flag: '🇰🇷' },
    { code: 'zh' as Language, name: 'ZH', flag: '🇨🇳' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass shadow-soft' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-brand-gradient rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-2xl font-display font-semibold">Ramdut</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('features')} className="hover:text-primary transition-colors">
              {t('nav.features')}
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">
              {t('nav.pricing')}
            </button>
            <button onClick={() => scrollToSection('premium')} className="hover:text-primary transition-colors font-medium text-primary">
              {t('nav.premium')}
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-primary transition-colors">
              {t('nav.testimonials')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">
              {t('nav.contact')}
            </button>
          </div>

          {/* Theme and Language Controls */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Selector */}
            <div className="flex items-center space-x-2 glass rounded-lg p-1">
              {Object.entries(themeIcons).map(([themeName, Icon]) => (
                <button
                  key={themeName}
                  onClick={() => setTheme(themeName as any)}
                  className={`p-2 rounded-md transition-colors ${
                    theme === themeName ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                  }`}
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>

            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center space-x-2 glass rounded-lg px-3 py-2 hover:bg-muted transition-colors">
                <Globe size={16} />
                <span className="text-sm font-medium">
                  {languages.find(lang => lang.code === language)?.flag}
                </span>
              </button>
              <div className="absolute top-full right-0 mt-2 language-selector rounded-lg p-2 min-w-[120px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-colors ${
                      language === lang.code ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Shop Button */}
            <Button 
              onClick={() => window.open('https://ramdut.lojavirtualnuvem.com.br/admin/v2/products', '_blank')}
              className="bg-brand-gradient hover:opacity-90"
            >
              {t('nav.shop')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-lg p-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left hover:text-primary transition-colors">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('features')} className="block w-full text-left hover:text-primary transition-colors">
              {t('nav.features')}
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left hover:text-primary transition-colors">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left hover:text-primary transition-colors">
              {t('nav.pricing')}
            </button>
            <button onClick={() => scrollToSection('premium')} className="block w-full text-left hover:text-primary transition-colors font-medium text-primary">
              {t('nav.premium')}
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left hover:text-primary transition-colors">
              {t('nav.testimonials')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-primary transition-colors">
              {t('nav.contact')}
            </button>
            
            {/* Mobile Theme Selector */}
            <div className="flex items-center space-x-2 pt-4 border-t border-border">
              {Object.entries(themeIcons).map(([themeName, Icon]) => (
                <button
                  key={themeName}
                  onClick={() => setTheme(themeName as any)}
                  className={`p-2 rounded-md transition-colors ${
                    theme === themeName ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                  }`}
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>

            {/* Mobile Language Selector */}
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-colors ${
                    language === lang.code ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>

            <Button 
              onClick={() => window.open('https://ramdut.lojavirtualnuvem.com.br/admin/v2/products', '_blank')}
              className="w-full bg-brand-gradient hover:opacity-90"
            >
              {t('nav.shop')}
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;