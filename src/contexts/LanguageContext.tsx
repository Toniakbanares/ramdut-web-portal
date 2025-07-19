import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'pt' | 'en' | 'es' | 'ko' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translations object
const translations = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.features': 'Recursos',
    'nav.about': 'Sobre',
    'nav.pricing': 'Preços',
    'nav.testimonials': 'Depoimentos',
    'nav.contact': 'Contato',
    'nav.shop': 'Loja RAMDUT',
    
    // Hero Section
    'hero.title': 'Transforme seu Negócio com',
    'hero.subtitle': 'Soluções Digitais Inovadoras',
    'hero.description': 'Descubra o poder da tecnologia de ponta com produtos e serviços que revolucionam a forma como você trabalha e cresce no mercado digital.',
    'hero.cta': 'Começar Agora',
    'hero.learn': 'Saiba Mais',
    
    // Features
    'features.title': 'Recursos Poderosos',
    'features.subtitle': 'Tudo que você precisa para ter sucesso',
    
    // About
    'about.title': 'Sobre a Ramdut',
    'about.description': 'Somos uma empresa inovadora focada em fornecer soluções digitais de alta qualidade que transformam negócios e impulsionam o crescimento.',
    
    // Contact
    'contact.title': 'Entre em Contato',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
    'contact.message': 'Mensagem',
    'contact.send': 'Enviar Mensagem',
    'contact.whatsapp.cta': 'Falar no WhatsApp',
    
    // Footer
    'footer.rights': '© 2025 Ramdut. Todos os direitos reservados.',
    'footer.terms': 'Termos de Serviço',
    'footer.privacy': 'Política de Privacidade',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.about': 'About',
    'nav.pricing': 'Pricing',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.shop': 'RAMDUT Shop',
    
    // Hero Section
    'hero.title': 'Transform Your Business with',
    'hero.subtitle': 'Innovative Digital Solutions',
    'hero.description': 'Discover the power of cutting-edge technology with products and services that revolutionize how you work and grow in the digital market.',
    'hero.cta': 'Get Started',
    'hero.learn': 'Learn More',
    
    // Features
    'features.title': 'Powerful Features',
    'features.subtitle': 'Everything you need to succeed',
    
    // About
    'about.title': 'About Ramdut',
    'about.description': 'We are an innovative company focused on providing high-quality digital solutions that transform businesses and drive growth.',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.whatsapp.cta': 'Chat on WhatsApp',
    
    // Footer
    'footer.rights': '© 2025 Ramdut. All rights reserved.',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.features': 'Características',
    'nav.about': 'Acerca de',
    'nav.pricing': 'Precios',
    'nav.testimonials': 'Testimonios',
    'nav.contact': 'Contacto',
    'nav.shop': 'Tienda RAMDUT',
    
    // Hero Section
    'hero.title': 'Transforma tu Negocio con',
    'hero.subtitle': 'Soluciones Digitales Innovadoras',
    'hero.description': 'Descubre el poder de la tecnología de vanguardia con productos y servicios que revolucionan la forma en que trabajas y creces en el mercado digital.',
    'hero.cta': 'Comenzar',
    'hero.learn': 'Saber Más',
    
    // Features
    'features.title': 'Características Poderosas',
    'features.subtitle': 'Todo lo que necesitas para tener éxito',
    
    // About
    'about.title': 'Acerca de Ramdut',
    'about.description': 'Somos una empresa innovadora enfocada en brindar soluciones digitales de alta calidad que transforman negocios e impulsan el crecimiento.',
    
    // Contact
    'contact.title': 'Ponte en Contacto',
    'contact.email': 'Correo',
    'contact.whatsapp': 'WhatsApp',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.whatsapp.cta': 'Hablar por WhatsApp',
    
    // Footer
    'footer.rights': '© 2025 Ramdut. Todos los derechos reservados.',
    'footer.terms': 'Términos de Servicio',
    'footer.privacy': 'Política de Privacidad',
  },
  ko: {
    // Navigation
    'nav.home': '홈',
    'nav.features': '기능',
    'nav.about': '소개',
    'nav.pricing': '가격',
    'nav.testimonials': '후기',
    'nav.contact': '연락처',
    'nav.shop': 'RAMDUT 상점',
    
    // Hero Section
    'hero.title': '혁신적인 디지털 솔루션으로',
    'hero.subtitle': '비즈니스를 변화시키세요',
    'hero.description': '디지털 시장에서 일하고 성장하는 방식을 혁신하는 제품과 서비스로 첨단 기술의 힘을 발견하세요.',
    'hero.cta': '시작하기',
    'hero.learn': '더 알아보기',
    
    // Features
    'features.title': '강력한 기능',
    'features.subtitle': '성공에 필요한 모든 것',
    
    // About
    'about.title': 'Ramdut 소개',
    'about.description': '우리는 비즈니스를 변화시키고 성장을 촉진하는 고품질 디지털 솔루션 제공에 중점을 둔 혁신적인 회사입니다.',
    
    // Contact
    'contact.title': '연락하기',
    'contact.email': '이메일',
    'contact.whatsapp': '왓츠앱',
    'contact.message': '메시지',
    'contact.send': '메시지 보내기',
    'contact.whatsapp.cta': '왓츠앱으로 대화',
    
    // Footer
    'footer.rights': '© 2025 Ramdut. 모든 권리 보유.',
    'footer.terms': '서비스 약관',
    'footer.privacy': '개인정보 처리방침',
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.features': '功能',
    'nav.about': '关于',
    'nav.pricing': '价格',
    'nav.testimonials': '推荐',
    'nav.contact': '联系',
    'nav.shop': 'RAMDUT 商店',
    
    // Hero Section
    'hero.title': '用创新数字解决方案',
    'hero.subtitle': '变革您的业务',
    'hero.description': '发现尖端技术的力量，产品和服务将彻底改变您在数字市场中的工作和成长方式。',
    'hero.cta': '开始使用',
    'hero.learn': '了解更多',
    
    // Features
    'features.title': '强大功能',
    'features.subtitle': '成功所需的一切',
    
    // About
    'about.title': '关于 Ramdut',
    'about.description': '我们是一家创新公司，专注于提供高质量的数字解决方案，改变业务并推动增长。',
    
    // Contact
    'contact.title': '联系我们',
    'contact.email': '邮箱',
    'contact.whatsapp': '微信',
    'contact.message': '消息',
    'contact.send': '发送消息',
    'contact.whatsapp.cta': '在WhatsApp聊天',
    
    // Footer
    'footer.rights': '© 2025 Ramdut. 保留所有权利。',
    'footer.terms': '服务条款',
    'footer.privacy': '隐私政策',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('ramdut-language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ramdut-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};