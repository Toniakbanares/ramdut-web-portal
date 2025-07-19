import React, { useEffect, useRef, useState } from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing = () => {
  const { t } = useLanguage();
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const plans = [
    {
      name: 'Starter',
      price: 'R$ 99',
      period: '/mês',
      description: 'Perfeito para pequenas empresas que estão começando',
      icon: Zap,
      features: [
        'Até 5 usuários',
        'Suporte por email',
        'Dashboard básico',
        'Integrações essenciais',
        'Backup semanal',
        'SSL gratuito'
      ],
      popular: false,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: 'R$ 299',
      period: '/mês',
      description: 'Ideal para empresas em crescimento',
      icon: Star,
      features: [
        'Até 25 usuários',
        'Suporte prioritário',
        'Dashboard avançado',
        'Todas as integrações',
        'Backup diário',
        'SSL premium',
        'API personalizada',
        'Analytics avançado'
      ],
      popular: true,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      price: 'R$ 599',
      period: '/mês',
      description: 'Para grandes empresas e corporações',
      icon: Crown,
      features: [
        'Usuários ilimitados',
        'Suporte 24/7',
        'Dashboard personalizado',
        'Integrações customizadas',
        'Backup em tempo real',
        'SSL dedicado',
        'API completa',
        'Consultor dedicado',
        'Treinamento incluso',
        'SLA garantido'
      ],
      popular: false,
      gradient: 'from-emerald-500 to-teal-500'
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

  const openWhatsApp = (planName: string) => {
    const phoneNumber = '5551980228329';
    const message = encodeURIComponent(`Olá! Tenho interesse no plano ${planName}. Gostaria de saber mais detalhes.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            {t('nav.pricing')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano perfeito para seu negócio. Todos incluem nossa garantia de satisfação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isVisible = visibleItems.includes(index);
            
            return (
              <div
                key={index}
                ref={(el) => itemsRef.current[index] = el}
                data-index={index}
                className={`scroll-reveal ${isVisible ? 'revealed' : ''}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Card className={`h-full relative group hover:shadow-primary/20 hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-primary scale-105' : 'glass'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-brand-gradient text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Mais Popular
                      </div>
                    </div>
                  )}

                  <CardContent className="p-8 h-full flex flex-col">
                    {/* Plan Header */}
                    <div className="text-center mb-8">
                      <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-muted-foreground mb-4">{plan.description}</p>
                      
                      <div className="flex items-end justify-center mb-4">
                        <span className="text-4xl md:text-5xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground ml-2">{plan.period}</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="flex-1 mb-8">
                      <ul className="space-y-4">
                        {plan.features.map((feature, featureIndex) => (
                          <li 
                            key={featureIndex}
                            className="flex items-start space-x-3"
                          >
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      onClick={() => openWhatsApp(plan.name)}
                      className={`w-full h-12 ${
                        plan.popular 
                          ? 'bg-brand-gradient hover:opacity-90 text-white' 
                          : 'border-2 border-primary/20 hover:border-primary/40 glass'
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      Escolher {plan.name}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            💳 Aceitamos todas as formas de pagamento • 🔒 Dados protegidos com SSL
          </p>
          <p className="text-sm text-muted-foreground">
            Todos os planos incluem 30 dias de garantia. Cancele quando quiser, sem multas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;