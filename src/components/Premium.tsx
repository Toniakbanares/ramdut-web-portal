import React, { useEffect, useRef, useState } from 'react';
import { 
  Users, 
  Headphones, 
  BarChart3, 
  Puzzle, 
  Shield, 
  Lock, 
  Code, 
  UserCheck, 
  GraduationCap, 
  Award,
  Check,
  Crown,
  Sparkles,
  ArrowRight,
  QrCode,
  CreditCard,
  Clock
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import jungleBackground from '../assets/jungle-background.jpg';
import oceanBackground from '../assets/ocean-background.jpg';
import pixQrCode from '../assets/pix-qr-code.png';

const Premium = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [showPixPayment, setShowPixPayment] = useState(false);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const premiumFeatures = [
    {
      icon: Users,
      titleKey: 'premium.features.unlimited_users.title',
      descriptionKey: 'premium.features.unlimited_users.description',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Headphones,
      titleKey: 'premium.features.support_247.title', 
      descriptionKey: 'premium.features.support_247.description',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: BarChart3,
      titleKey: 'premium.features.custom_dashboard.title',
      descriptionKey: 'premium.features.custom_dashboard.description', 
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Puzzle,
      titleKey: 'premium.features.custom_integrations.title',
      descriptionKey: 'premium.features.custom_integrations.description',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      titleKey: 'premium.features.realtime_backup.title',
      descriptionKey: 'premium.features.realtime_backup.description',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lock,
      titleKey: 'premium.features.dedicated_ssl.title',
      descriptionKey: 'premium.features.dedicated_ssl.description',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Code,
      titleKey: 'premium.features.full_api.title',
      descriptionKey: 'premium.features.full_api.description',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: UserCheck,
      titleKey: 'premium.features.dedicated_consultant.title',
      descriptionKey: 'premium.features.dedicated_consultant.description',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: GraduationCap,
      titleKey: 'premium.features.training_included.title',
      descriptionKey: 'premium.features.training_included.description',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Award,
      titleKey: 'premium.features.guaranteed_sla.title',
      descriptionKey: 'premium.features.guaranteed_sla.description',
      gradient: 'from-violet-500 to-purple-500'
    }
  ];

  const pricingTiers = [
    {
      name: 'Free',
      price: 'R$ 0',
      period: '/mês',
      titleKey: 'premium.pricing.free.title',
      descriptionKey: 'premium.pricing.free.description',
      features: [
        'premium.pricing.free.feature1',
        'premium.pricing.free.feature2', 
        'premium.pricing.free.feature3',
        'premium.pricing.free.feature4'
      ],
      isPremium: false,
      ctaKey: 'premium.pricing.free.cta'
    },
    {
      name: 'Premium',
      price: 'R$ 299',
      period: '/mês', 
      titleKey: 'premium.pricing.premium.title',
      descriptionKey: 'premium.pricing.premium.description',
      features: [
        'premium.pricing.premium.feature1',
        'premium.pricing.premium.feature2',
        'premium.pricing.premium.feature3',
        'premium.pricing.premium.feature4',
        'premium.pricing.premium.feature5',
        'premium.pricing.premium.feature6'
      ],
      isPremium: true,
      ctaKey: 'premium.pricing.premium.cta',
      popular: true
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...prev, index].filter((v, i, a) => a.indexOf(v) === i));
          }
        });
      },
      { threshold: 0.1 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const openWhatsAppPremium = () => {
    const phoneNumber = '5551980228329';
    const message = encodeURIComponent(t('premium.whatsapp.message'));
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const openEmailContact = () => {
    const subject = encodeURIComponent(t('premium.email.subject'));
    const body = encodeURIComponent(t('premium.email.body'));
    window.open(`mailto:ramdut2025@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  const generatePixPayment = () => {
    const pixKey = '02366936036'; // CPF do usuário
    const amount = '299.00';
    const description = 'Plano Premium Ramdut';
    const pixUrl = `00020126360014br.gov.bcb.pix0114${pixKey}5204000053039865802BR5913Ramdut Premium6009SAO PAULO62070503***630445B0`;
    
    // Gerar link do Pix para compartilhamento
    const shareText = `Pix Copia e Cola: ${pixUrl}`;
    navigator.clipboard?.writeText(shareText);
    
    setShowPixPayment(true);
  };

  const backgroundImage = theme === 'green' ? jungleBackground : theme === 'blue' ? oceanBackground : undefined;

  return (
    <section id="premium" className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 relative overflow-hidden">
      {/* Background decoration */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="absolute inset-0 bg-hero-gradient opacity-30" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Badge className="bg-brand-gradient text-white px-6 py-2 text-sm font-semibold">
              <Crown className="w-4 h-4 mr-2" />
              {t('premium.badge')}
            </Badge>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-clip-text text-transparent bg-brand-gradient">
            {t('premium.title')}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('premium.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={generatePixPayment}
              className="bg-brand-gradient hover:opacity-90 text-white h-12 px-8"
            >
              <QrCode className="w-5 h-5 mr-2" />
              {t('premium.pix.payment')}
            </Button>
            
            <Button 
              onClick={openWhatsAppPremium}
              variant="outline" 
              className="border-2 border-primary/20 hover:border-primary/40 glass h-12 px-8"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              {t('premium.cta.primary')}
            </Button>
            
            <Button 
              onClick={openEmailContact}
              variant="outline" 
              className="border-2 border-primary/20 hover:border-primary/40 glass h-12 px-8"
            >
              {t('premium.cta.secondary')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Premium Features Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            {t('premium.features.title')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {premiumFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isVisible = visibleItems.includes(index);
              
              return (
                <div
                  key={index}
                  ref={(el) => itemsRef.current[index] = el}
                  data-index={index}
                  className={`scroll-reveal ${isVisible ? 'revealed' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Card className="h-full group hover:shadow-primary/20 hover:shadow-xl transition-all duration-300 glass">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h4 className="font-semibold mb-2 text-sm">
                        {t(feature.titleKey)}
                      </h4>
                      
                      <p className="text-xs text-muted-foreground">
                        {t(feature.descriptionKey)}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing Comparison */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            {t('premium.pricing.title')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative ${tier.popular ? 'md:scale-105' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-brand-gradient text-white px-6 py-2 text-sm font-semibold">
                      {t('premium.pricing.popular')}
                    </Badge>
                  </div>
                )}
                
                <Card className={`h-full ${tier.popular ? 'ring-2 ring-primary shadow-primary' : 'glass'}`}>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl mb-2">{t(tier.titleKey)}</CardTitle>
                    <p className="text-muted-foreground mb-4">{t(tier.descriptionKey)}</p>
                    
                    <div className="flex items-end justify-center mb-4">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      <span className="text-muted-foreground ml-2">{tier.period}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{t(feature)}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      onClick={tier.isPremium ? generatePixPayment : undefined}
                      className={`w-full h-12 ${
                        tier.isPremium 
                          ? 'bg-brand-gradient hover:opacity-90 text-white' 
                          : 'border-2 border-primary/20 hover:border-primary/40 glass'
                      }`}
                      variant={tier.isPremium ? 'default' : 'outline'}
                      disabled={!tier.isPremium}
                    >
                      {tier.isPremium ? (
                        <>
                          <QrCode className="w-4 h-4 mr-2" />
                          {t('premium.pix.payment')}
                        </>
                      ) : (
                        t(tier.ctaKey)
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Pix Payment Section */}
        {showPixPayment && (
          <div className="mb-16">
            <Card className="max-w-md mx-auto glass">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <QrCode className="w-6 h-6 text-primary" />
                  {t('premium.pix.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="flex justify-center">
                  <img 
                    src={pixQrCode} 
                    alt="QR Code Pix" 
                    className="w-48 h-48 border rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-green-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{t('premium.pix.instant')}</span>
                  </div>
                  
                  <p className="text-2xl font-bold text-primary">R$ 299,00</p>
                  <p className="text-sm text-muted-foreground">{t('premium.pix.description')}</p>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm font-medium mb-2">{t('premium.pix.instructions')}</p>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>1. {t('premium.pix.step1')}</p>
                    <p>2. {t('premium.pix.step2')}</p>
                    <p>3. {t('premium.pix.step3')}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button 
                    onClick={openWhatsAppPremium}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Headphones className="w-4 h-4 mr-2" />
                    {t('premium.pix.support')}
                  </Button>
                  
                  <Button 
                    onClick={() => setShowPixPayment(false)}
                    variant="outline"
                    className="border-primary/20 hover:border-primary/40"
                  >
                    {t('premium.pix.back')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Contact Information */}
        <div className="text-center glass rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">{t('premium.contact.title')}</h3>
          <p className="text-muted-foreground mb-6">{t('premium.contact.description')}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={openWhatsAppPremium}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Headphones className="w-5 h-5 mr-2" />
              WhatsApp: +55 52 98022-8329
            </Button>
            
            <Button 
              onClick={openEmailContact}
              variant="outline"
              className="border-primary/20 hover:border-primary/40"
            >
              Email: ramdut2025@gmail.com
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Premium;