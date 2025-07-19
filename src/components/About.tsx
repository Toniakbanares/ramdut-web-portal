import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, Target, Users, Globe } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Transformar negócios através de soluções digitais inovadoras e acessíveis.',
    },
    {
      icon: Users,
      title: 'Visão',
      description: 'Ser referência global em tecnologia que conecta pessoas e impulsiona o crescimento.',
    },
    {
      icon: Globe,
      title: 'Valores',
      description: 'Inovação, transparência, qualidade e compromisso com o sucesso do cliente.',
    },
  ];

  const achievements = [
    '5+ anos de experiência',
    '500+ projetos entregues',
    '99% de satisfação do cliente',
    'Suporte técnico 24/7',
    'Tecnologia de ponta',
    'Equipe especializada'
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t('about.title')}
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Com sede no Brasil e atuação global, a Ramdut combina expertise técnica 
              com visão estratégica para entregar resultados excepcionais. Nossa equipe 
              multidisciplinar trabalha incansavelmente para criar produtos que fazem a diferença.
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Values Cards */}
          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="grid gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card 
                    key={index}
                    className="glass hover:shadow-primary/20 hover:shadow-lg transition-all duration-300 group"
                    style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-brand-gradient rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {value.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className={`mt-20 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="glass rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-display font-bold text-center mb-12">
              Números que Impressionam
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Países</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Suporte</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">99%</div>
                <div className="text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;