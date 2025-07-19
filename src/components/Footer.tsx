import React from 'react';
import { Mail, MessageCircle, Globe, Heart } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';

const Footer = () => {
  const { t, language, setLanguage } = useLanguage();

  const languages = [
    { code: 'pt' as Language, name: 'Português', flag: '🇧🇷' },
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
    { code: 'ko' as Language, name: '한국어', flag: '🇰🇷' },
    { code: 'zh' as Language, name: '中文', flag: '🇨🇳' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '5551980228329';
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os produtos e serviços da Ramdut.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-brand-gradient rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-display font-semibold">Ramdut</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Transformando negócios com soluções digitais inovadoras. 
              Tecnologia de ponta para empresas que querem crescer.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => window.open('mailto:ramdut2025@gmail.com', '_blank')}
                className="w-10 h-10 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </button>
              <button
                onClick={openWhatsApp}
                className="w-10 h-10 rounded-full glass hover:bg-green-600 hover:text-white transition-colors flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('nav.features')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('nav.pricing')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open('https://ramdut.lojavirtualnuvem.com.br/admin/v2/products', '_blank')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('nav.shop')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground">
                <strong>Email:</strong><br />
                ramdut2025@gmail.com
              </li>
              <li className="text-muted-foreground">
                <strong>WhatsApp:</strong><br />
                +55 51 98022-8329
              </li>
              <li className="text-muted-foreground">
                <strong>Localização:</strong><br />
                Porto Alegre, Brasil
              </li>
            </ul>
          </div>

          {/* Language Selector */}
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Idioma
            </h3>
            <div className="space-y-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors w-full text-left ${
                    language === lang.code 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:bg-muted'
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="text-sm">{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              {t('footer.rights')}
            </div>
            
            <div className="flex space-x-6 text-sm">
              <button className="text-muted-foreground hover:text-primary transition-colors">
                {t('footer.terms')}
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                {t('footer.privacy')}
              </button>
            </div>
          </div>
          
          <div className="text-center mt-6 text-muted-foreground text-sm">
            Feito com <Heart className="w-4 h-4 inline text-red-500 fill-current" /> pela equipe Ramdut
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;