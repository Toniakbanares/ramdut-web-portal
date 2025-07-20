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
    'nav.premium': 'Premium',
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
    
    // Premium Section
    'premium.badge': 'Área Premium',
    'premium.title': 'Área Premium',
    'premium.subtitle': 'Recursos exclusivos e serviços corporativos para empresas que buscam soluções profissionais avançadas.',
    'premium.cta.primary': 'Assinar Premium',
    'premium.cta.secondary': 'Saiba Mais',
    
    // Premium Features
    'premium.features.title': 'Recursos Premium Exclusivos',
    'premium.features.unlimited_users.title': 'Usuários Ilimitados',
    'premium.features.unlimited_users.description': 'Sem restrições no número de usuários ou acessos da equipe.',
    'premium.features.support_247.title': 'Suporte 24/7',
    'premium.features.support_247.description': 'Chat ao vivo, WhatsApp, email e sistema de tickets sempre disponível.',
    'premium.features.custom_dashboard.title': 'Dashboard Personalizado',
    'premium.features.custom_dashboard.description': 'Visão administrativa totalmente personalizada com widgets e KPIs.',
    'premium.features.custom_integrations.title': 'Integrações Customizadas',
    'premium.features.custom_integrations.description': 'Conectamos suas ferramentas e APIs favoritas perfeitamente.',
    'premium.features.realtime_backup.title': 'Backup em Tempo Real',
    'premium.features.realtime_backup.description': 'Proteção automática e criptografada de dados.',
    'premium.features.dedicated_ssl.title': 'SSL Dedicado',
    'premium.features.dedicated_ssl.description': 'Segurança aprimorada para seu domínio e clientes.',
    'premium.features.full_api.title': 'API Completa',
    'premium.features.full_api.description': 'API robusta e bem documentada para desenvolvedores e parceiros.',
    'premium.features.dedicated_consultant.title': 'Consultor Dedicado',
    'premium.features.dedicated_consultant.description': 'Especialista designado para orientação e estratégia.',
    'premium.features.training_included.title': 'Treinamento Incluso',
    'premium.features.training_included.description': 'Onboarding e treinamento de uso da plataforma para sua equipe.',
    'premium.features.guaranteed_sla.title': 'SLA Garantido',
    'premium.features.guaranteed_sla.description': 'Compromisso contratual de uptime, tempo de resposta e performance.',
    
    // Premium Pricing
    'premium.pricing.title': 'Compare os Planos',
    'premium.pricing.popular': 'Mais Popular',
    'premium.pricing.free.title': 'Plano Gratuito',
    'premium.pricing.free.description': 'Perfeito para começar e explorar a plataforma',
    'premium.pricing.free.feature1': 'Até 5 usuários',
    'premium.pricing.free.feature2': 'Suporte por email',
    'premium.pricing.free.feature3': 'Dashboard básico',
    'premium.pricing.free.feature4': 'Integrações essenciais',
    'premium.pricing.free.cta': 'Plano Atual',
    'premium.pricing.premium.title': 'Plano Premium',
    'premium.pricing.premium.description': 'Para empresas que precisam de recursos avançados',
    'premium.pricing.premium.feature1': 'Usuários ilimitados',
    'premium.pricing.premium.feature2': 'Suporte 24/7 prioritário',
    'premium.pricing.premium.feature3': 'Dashboard personalizado',
    'premium.pricing.premium.feature4': 'Todas as integrações',
    'premium.pricing.premium.feature5': 'Consultor dedicado',
    'premium.pricing.premium.feature6': 'SLA garantido',
    'premium.pricing.premium.cta': 'Assinar Premium',
    
    // Premium Contact
    'premium.contact.title': 'Fale Conosco',
    'premium.contact.description': 'Entre em contato para mais informações sobre o plano Premium',
    'premium.whatsapp.message': 'Olá! Tenho interesse no plano Premium da Ramdut. Gostaria de saber mais detalhes sobre os recursos exclusivos e preços.',
    'premium.email.subject': 'Interesse no Plano Premium - Ramdut',
    'premium.email.body': 'Olá equipe Ramdut,\n\nTenho interesse em conhecer mais sobre o plano Premium e seus recursos exclusivos.\n\nAguardo retorno.\n\nObrigado!',
    
    // Pix Payment
    'premium.pix.payment': 'Pagar com Pix',
    'premium.pix.title': 'Pagamento via Pix',
    'premium.pix.instant': 'Ativação Imediata',
    'premium.pix.description': 'Após o pagamento, todos os recursos premium são ativados imediatamente.',
    'premium.pix.instructions': 'Como pagar:',
    'premium.pix.step1': 'Escaneie o QR Code com seu banco',
    'premium.pix.step2': 'Confirme o pagamento de R$ 299,00',
    'premium.pix.step3': 'Recursos ativados automaticamente',
    'premium.pix.support': 'Suporte WhatsApp',
    'premium.pix.back': 'Voltar',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.about': 'About',
    'nav.pricing': 'Pricing',
    'nav.premium': 'Premium',
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
    
    // Premium Section
    'premium.badge': 'Premium Area',
    'premium.title': 'Premium Area',
    'premium.subtitle': 'Exclusive features and corporate services for companies seeking advanced professional solutions.',
    'premium.cta.primary': 'Subscribe Premium',
    'premium.cta.secondary': 'Learn More',
    
    // Premium Features
    'premium.features.title': 'Exclusive Premium Features',
    'premium.features.unlimited_users.title': 'Unlimited Users',
    'premium.features.unlimited_users.description': 'No restrictions on user seats or team access.',
    'premium.features.support_247.title': '24/7 Support',
    'premium.features.support_247.description': 'Live chat, WhatsApp, email, and ticket system always available.',
    'premium.features.custom_dashboard.title': 'Custom Dashboard',
    'premium.features.custom_dashboard.description': 'Fully tailored admin view with widgets and KPIs.',
    'premium.features.custom_integrations.title': 'Custom Integrations',
    'premium.features.custom_integrations.description': 'We connect your favorite tools and APIs seamlessly.',
    'premium.features.realtime_backup.title': 'Real-time Backup',
    'premium.features.realtime_backup.description': 'Automatic and encrypted data protection.',
    'premium.features.dedicated_ssl.title': 'Dedicated SSL',
    'premium.features.dedicated_ssl.description': 'Enhanced security for your domain and clients.',
    'premium.features.full_api.title': 'Full API Access',
    'premium.features.full_api.description': 'Well-documented, robust API for developers and partners.',
    'premium.features.dedicated_consultant.title': 'Dedicated Consultant',
    'premium.features.dedicated_consultant.description': 'Assigned expert for guidance and strategy.',
    'premium.features.training_included.title': 'Training Included',
    'premium.features.training_included.description': 'Onboarding and platform usage training for your team.',
    'premium.features.guaranteed_sla.title': 'Guaranteed SLA',
    'premium.features.guaranteed_sla.description': 'Uptime, response time, and performance contractual commitment.',
    
    // Premium Pricing
    'premium.pricing.title': 'Compare Plans',
    'premium.pricing.popular': 'Most Popular',
    'premium.pricing.free.title': 'Free Plan',
    'premium.pricing.free.description': 'Perfect to start and explore the platform',
    'premium.pricing.free.feature1': 'Up to 5 users',
    'premium.pricing.free.feature2': 'Email support',
    'premium.pricing.free.feature3': 'Basic dashboard',
    'premium.pricing.free.feature4': 'Essential integrations',
    'premium.pricing.free.cta': 'Current Plan',
    'premium.pricing.premium.title': 'Premium Plan',
    'premium.pricing.premium.description': 'For companies that need advanced features',
    'premium.pricing.premium.feature1': 'Unlimited users',
    'premium.pricing.premium.feature2': '24/7 priority support',
    'premium.pricing.premium.feature3': 'Custom dashboard',
    'premium.pricing.premium.feature4': 'All integrations',
    'premium.pricing.premium.feature5': 'Dedicated consultant',
    'premium.pricing.premium.feature6': 'Guaranteed SLA',
    'premium.pricing.premium.cta': 'Subscribe Premium',
    
    // Premium Contact
    'premium.contact.title': 'Contact Us',
    'premium.contact.description': 'Get in touch for more information about the Premium plan',
    'premium.whatsapp.message': 'Hello! I am interested in Ramdut\'s Premium plan. I would like to know more details about the exclusive features and pricing.',
    'premium.email.subject': 'Interest in Premium Plan - Ramdut',
    'premium.email.body': 'Hello Ramdut team,\n\nI am interested in learning more about the Premium plan and its exclusive features.\n\nI await your response.\n\nThank you!',
    
    // Pix Payment
    'premium.pix.payment': 'Pay with Pix',
    'premium.pix.title': 'Pix Payment',
    'premium.pix.instant': 'Instant Activation',
    'premium.pix.description': 'After payment, all premium features are activated immediately.',
    'premium.pix.instructions': 'How to pay:',
    'premium.pix.step1': 'Scan QR Code with your bank app',
    'premium.pix.step2': 'Confirm payment of R$ 299.00',
    'premium.pix.step3': 'Features activated automatically',
    'premium.pix.support': 'WhatsApp Support',
    'premium.pix.back': 'Back',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.features': 'Características',
    'nav.about': 'Acerca de',
    'nav.pricing': 'Precios',
    'nav.premium': 'Premium',
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
    
    // Premium Section
    'premium.badge': 'Área Premium',
    'premium.title': 'Área Premium',
    'premium.subtitle': 'Características exclusivas y servicios corporativos para empresas que buscan soluciones profesionales avanzadas.',
    'premium.cta.primary': 'Suscribir Premium',
    'premium.cta.secondary': 'Saber Más',
    'premium.features.title': 'Características Premium Exclusivas',
    'premium.features.unlimited_users.title': 'Usuarios Ilimitados',
    'premium.features.unlimited_users.description': 'Sin restricciones en asientos de usuario o acceso del equipo.',
    'premium.features.support_247.title': 'Soporte 24/7',
    'premium.features.support_247.description': 'Chat en vivo, WhatsApp, correo y sistema de tickets siempre disponible.',
    'premium.features.custom_dashboard.title': 'Panel Personalizado',
    'premium.features.custom_dashboard.description': 'Vista administrativa totalmente personalizada con widgets y KPIs.',
    'premium.features.custom_integrations.title': 'Integraciones Personalizadas',
    'premium.features.custom_integrations.description': 'Conectamos tus herramientas y APIs favoritas perfectamente.',
    'premium.features.realtime_backup.title': 'Respaldo en Tiempo Real',
    'premium.features.realtime_backup.description': 'Protección automática y encriptada de datos.',
    'premium.features.dedicated_ssl.title': 'SSL Dedicado',
    'premium.features.dedicated_ssl.description': 'Seguridad mejorada para tu dominio y clientes.',
    'premium.features.full_api.title': 'Acceso API Completo',
    'premium.features.full_api.description': 'API robusta y bien documentada para desarrolladores y socios.',
    'premium.features.dedicated_consultant.title': 'Consultor Dedicado',
    'premium.features.dedicated_consultant.description': 'Experto asignado para orientación y estrategia.',
    'premium.features.training_included.title': 'Entrenamiento Incluido',
    'premium.features.training_included.description': 'Incorporación y entrenamiento de uso de plataforma para tu equipo.',
    'premium.features.guaranteed_sla.title': 'SLA Garantizado',
    'premium.features.guaranteed_sla.description': 'Compromiso contractual de tiempo de actividad, respuesta y rendimiento.',
    'premium.pricing.title': 'Comparar Planes',
    'premium.pricing.popular': 'Más Popular',
    'premium.pricing.free.title': 'Plan Gratuito',
    'premium.pricing.free.description': 'Perfecto para comenzar y explorar la plataforma',
    'premium.pricing.free.feature1': 'Hasta 5 usuarios',
    'premium.pricing.free.feature2': 'Soporte por correo',
    'premium.pricing.free.feature3': 'Panel básico',
    'premium.pricing.free.feature4': 'Integraciones esenciales',
    'premium.pricing.free.cta': 'Plan Actual',
    'premium.pricing.premium.title': 'Plan Premium',
    'premium.pricing.premium.description': 'Para empresas que necesitan características avanzadas',
    'premium.pricing.premium.feature1': 'Usuarios ilimitados',
    'premium.pricing.premium.feature2': 'Soporte 24/7 prioritario',
    'premium.pricing.premium.feature3': 'Panel personalizado',
    'premium.pricing.premium.feature4': 'Todas las integraciones',
    'premium.pricing.premium.feature5': 'Consultor dedicado',
    'premium.pricing.premium.feature6': 'SLA garantizado',
    'premium.pricing.premium.cta': 'Suscribir Premium',
    'premium.contact.title': 'Contáctanos',
    'premium.contact.description': 'Ponte en contacto para más información sobre el plan Premium',
    'premium.whatsapp.message': '¡Hola! Estoy interesado en el plan Premium de Ramdut. Me gustaría saber más detalles sobre las características exclusivas y precios.',
    'premium.email.subject': 'Interés en Plan Premium - Ramdut',
    'premium.email.body': 'Hola equipo Ramdut,\n\nEstoy interesado en conocer más sobre el plan Premium y sus características exclusivas.\n\nEspero su respuesta.\n\n¡Gracias!',
    
    // Pix Payment
    'premium.pix.payment': 'Pagar con Pix',
    'premium.pix.title': 'Pago via Pix',
    'premium.pix.instant': 'Activación Inmediata',
    'premium.pix.description': 'Después del pago, todas las características premium se activan inmediatamente.',
    'premium.pix.instructions': 'Cómo pagar:',
    'premium.pix.step1': 'Escanea el código QR con tu banco',
    'premium.pix.step2': 'Confirma el pago de R$ 299,00',
    'premium.pix.step3': 'Características activadas automáticamente',
    'premium.pix.support': 'Soporte WhatsApp',
    'premium.pix.back': 'Volver',
  },
  ko: {
    // Navigation
    'nav.home': '홈',
    'nav.features': '기능',
    'nav.about': '소개',
    'nav.pricing': '가격',
    'nav.premium': '프리미엄',
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
    
    // Premium Section  
    'premium.badge': '프리미엄 영역',
    'premium.title': '프리미엄 영역',
    'premium.subtitle': '고급 전문 솔루션을 찾는 기업을 위한 독점 기능 및 기업 서비스.',
    'premium.cta.primary': '프리미엄 구독',
    'premium.cta.secondary': '더 알아보기',
    'premium.features.title': '독점 프리미엄 기능',
    'premium.features.unlimited_users.title': '무제한 사용자',
    'premium.features.unlimited_users.description': '사용자 좌석 또는 팀 액세스에 제한이 없습니다.',
    'premium.features.support_247.title': '24/7 지원',
    'premium.features.support_247.description': '라이브 채팅, 왓츠앱, 이메일 및 티켓 시스템이 항상 이용 가능합니다.',
    'premium.features.custom_dashboard.title': '맞춤형 대시보드',
    'premium.features.custom_dashboard.description': '위젯과 KPI가 포함된 완전 맞춤형 관리자 보기.',
    'premium.features.custom_integrations.title': '맞춤형 통합',
    'premium.features.custom_integrations.description': '좋아하는 도구와 API를 완벽하게 연결합니다.',
    'premium.features.realtime_backup.title': '실시간 백업',
    'premium.features.realtime_backup.description': '자동 및 암호화된 데이터 보호.',
    'premium.features.dedicated_ssl.title': '전용 SSL',
    'premium.features.dedicated_ssl.description': '도메인과 클라이언트를 위한 향상된 보안.',
    'premium.features.full_api.title': '전체 API 액세스',
    'premium.features.full_api.description': '개발자와 파트너를 위한 잘 문서화된 강력한 API.',
    'premium.features.dedicated_consultant.title': '전담 컨설턴트',
    'premium.features.dedicated_consultant.description': '지침과 전략을 위한 전문가 배정.',
    'premium.features.training_included.title': '교육 포함',
    'premium.features.training_included.description': '팀을 위한 온보딩 및 플랫폼 사용 교육.',
    'premium.features.guaranteed_sla.title': '보장된 SLA',
    'premium.features.guaranteed_sla.description': '가동 시간, 응답 시간 및 성능 계약 약속.',
    'premium.pricing.title': '플랜 비교',
    'premium.pricing.popular': '가장 인기',
    'premium.pricing.free.title': '무료 플랜',
    'premium.pricing.free.description': '플랫폼을 시작하고 탐색하기에 완벽',
    'premium.pricing.free.feature1': '최대 5명 사용자',
    'premium.pricing.free.feature2': '이메일 지원',
    'premium.pricing.free.feature3': '기본 대시보드',
    'premium.pricing.free.feature4': '필수 통합',
    'premium.pricing.free.cta': '현재 플랜',
    'premium.pricing.premium.title': '프리미엄 플랜',
    'premium.pricing.premium.description': '고급 기능이 필요한 기업을 위해',
    'premium.pricing.premium.feature1': '무제한 사용자',
    'premium.pricing.premium.feature2': '24/7 우선 지원',
    'premium.pricing.premium.feature3': '맞춤형 대시보드',
    'premium.pricing.premium.feature4': '모든 통합',
    'premium.pricing.premium.feature5': '전담 컨설턴트',
    'premium.pricing.premium.feature6': '보장된 SLA',
    'premium.pricing.premium.cta': '프리미엄 구독',
    'premium.contact.title': '문의하기',
    'premium.contact.description': '프리미엄 플랜에 대한 자세한 정보를 문의하세요',
    'premium.whatsapp.message': '안녕하세요! Ramdut 프리미엄 플랜에 관심이 있습니다. 독점 기능과 가격에 대한 자세한 내용을 알고 싶습니다.',
    'premium.email.subject': '프리미엄 플랜 관심 - Ramdut',
    'premium.email.body': '안녕하세요 Ramdut 팀,\n\n프리미엄 플랜과 독점 기능에 대해 더 알아보고 싶습니다.\n\n답변을 기다리겠습니다.\n\n감사합니다!',
    
    // Pix Payment
    'premium.pix.payment': 'Pix로 결제',
    'premium.pix.title': 'Pix 결제',
    'premium.pix.instant': '즉시 활성화',
    'premium.pix.description': '결제 후 모든 프리미엄 기능이 즉시 활성화됩니다.',
    'premium.pix.instructions': '결제 방법:',
    'premium.pix.step1': '은행 앱으로 QR 코드 스캔',
    'premium.pix.step2': 'R$ 299,00 결제 확인',
    'premium.pix.step3': '기능 자동 활성화',
    'premium.pix.support': 'WhatsApp 지원',
    'premium.pix.back': '뒤로',
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.features': '功能',
    'nav.about': '关于',
    'nav.pricing': '价格',
    'nav.premium': '高级版',
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
    
    // Premium Section
    'premium.badge': '高级区域',
    'premium.title': '高级区域',
    'premium.subtitle': '为寻求先进专业解决方案的公司提供独家功能和企业服务。',
    'premium.cta.primary': '订阅高级版',
    'premium.cta.secondary': '了解更多',
    'premium.features.title': '独家高级功能',
    'premium.features.unlimited_users.title': '无限用户',
    'premium.features.unlimited_users.description': '对用户席位或团队访问没有限制。',
    'premium.features.support_247.title': '24/7支持',
    'premium.features.support_247.description': '实时聊天、WhatsApp、电子邮件和工单系统始终可用。',
    'premium.features.custom_dashboard.title': '定制仪表板',
    'premium.features.custom_dashboard.description': '带有小部件和KPI的完全定制管理视图。',
    'premium.features.custom_integrations.title': '定制集成',
    'premium.features.custom_integrations.description': '我们无缝连接您喜爱的工具和API。',
    'premium.features.realtime_backup.title': '实时备份',
    'premium.features.realtime_backup.description': '自动和加密数据保护。',
    'premium.features.dedicated_ssl.title': '专用SSL',
    'premium.features.dedicated_ssl.description': '为您的域名和客户提供增强安全性。',
    'premium.features.full_api.title': '完整API访问',
    'premium.features.full_api.description': '为开发者和合作伙伴提供文档完善的强大API。',
    'premium.features.dedicated_consultant.title': '专属顾问',
    'premium.features.dedicated_consultant.description': '指派专家提供指导和策略。',
    'premium.features.training_included.title': '包含培训',
    'premium.features.training_included.description': '为您的团队提供入门和平台使用培训。',
    'premium.features.guaranteed_sla.title': '保证SLA',
    'premium.features.guaranteed_sla.description': '正常运行时间、响应时间和性能合同承诺。',
    'premium.pricing.title': '比较计划',
    'premium.pricing.popular': '最受欢迎',
    'premium.pricing.free.title': '免费计划',
    'premium.pricing.free.description': '开始和探索平台的完美选择',
    'premium.pricing.free.feature1': '最多5个用户',
    'premium.pricing.free.feature2': '电子邮件支持',
    'premium.pricing.free.feature3': '基础仪表板',
    'premium.pricing.free.feature4': '基本集成',
    'premium.pricing.free.cta': '当前计划',
    'premium.pricing.premium.title': '高级计划',
    'premium.pricing.premium.description': '适合需要高级功能的公司',
    'premium.pricing.premium.feature1': '无限用户',
    'premium.pricing.premium.feature2': '24/7优先支持',
    'premium.pricing.premium.feature3': '定制仪表板',
    'premium.pricing.premium.feature4': '所有集成',
    'premium.pricing.premium.feature5': '专属顾问',
    'premium.pricing.premium.feature6': '保证SLA',
    'premium.pricing.premium.cta': '订阅高级版',
    'premium.contact.title': '联系我们',
    'premium.contact.description': '联系我们获取高级计划的更多信息',
    'premium.whatsapp.message': '您好！我对Ramdut的高级计划感兴趣。我想了解更多关于独家功能和定价的详细信息。',
    'premium.email.subject': '对高级计划感兴趣 - Ramdut',
    'premium.email.body': 'Ramdut团队您好，\n\n我有兴趣了解更多关于高级计划及其独家功能的信息。\n\n期待您的回复。\n\n谢谢！',
    
    // Pix Payment
    'premium.pix.payment': '使用Pix支付',
    'premium.pix.title': 'Pix支付',
    'premium.pix.instant': '即时激活',
    'premium.pix.description': '支付后，所有高级功能立即激活。',
    'premium.pix.instructions': '如何支付：',
    'premium.pix.step1': '使用银行应用扫描二维码',
    'premium.pix.step2': '确认支付R$ 299.00',
    'premium.pix.step3': '功能自动激活',
    'premium.pix.support': 'WhatsApp支持',
    'premium.pix.back': '返回',
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