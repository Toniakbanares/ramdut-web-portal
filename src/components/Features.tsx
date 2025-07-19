import React, { useEffect, useRef, useState } from 'react';
import { Zap, Shield, Rocket, Users, BarChart3, Headphones } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';

const Features = () => {
  const { t } = useLanguage();
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      icon: Zap,
      title: 'Performance Otimizada',
      description: 'Soluções ultra-rápidas que garantem a melhor experiência do usuário com tecnologia de ponta.',
    },
    {
      icon: Shield,
      title: 'Segurança Avançada',
      description: 'Proteção de dados de nível empresarial com criptografia de última geração e compliance total.',
    },
    {
      icon: Rocket,
      title: 'Escalabilidade Infinita',
      description: 'Cresça sem limites com nossa infraestrutura cloud que se adapta às suas necessidades.',
    },
    {
      icon: Users,
      title: 'Colaboração Inteligente',
      description: 'Ferramentas que conectam equipes e otimizam workflows para máxima produtividade.',
    },
    {
      icon: BarChart3,
      title: 'Analytics Avançado',
      description: 'Insights poderosos e relatórios em tempo real para decisões baseadas em dados.',
    },
    {
      icon: Headphones,
      title: 'Suporte Premium',
      description: 'Atendimento especializado 24/7 com time de experts sempre prontos para ajudar.',
    },
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

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            {t('features.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
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
                <Card className="h-full glass hover:shadow-primary/20 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-brand-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Hover Effect Line */}
                    <div className="mt-6 h-1 bg-gradient-to-r from-primary to-accent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;