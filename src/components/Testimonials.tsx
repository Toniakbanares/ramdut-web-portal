import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const { t, language } = useLanguage();
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'CEO, TechStart Brasil',
      avatar: '👩‍💼',
      flag: '🇧🇷',
      rating: 5,
      text: {
        pt: 'A Ramdut transformou completamente nossa operação. O suporte é excepcional e os resultados superaram todas as expectativas.',
        en: 'Ramdut completely transformed our operation. The support is exceptional and the results exceeded all expectations.',
        es: 'Ramdut transformó completamente nuestra operación. El soporte es excepcional y los resultados superaron todas las expectativas.',
        ko: 'Ramdut이 우리 운영을 완전히 변화시켰습니다. 지원이 뛰어나고 결과가 모든 기대를 뛰어넘었습니다.',
        zh: 'Ramdut 完全改变了我们的运营。支持非常出色，结果超出了所有预期。'
      }
    },
    {
      name: 'John Smith',
      role: 'CTO, Global Innovations',
      avatar: '👨‍💻',
      flag: '🇺🇸',
      rating: 5,
      text: {
        pt: 'Implementação rápida e eficiente. A equipe da Ramdut é altamente qualificada e sempre disponível para ajudar.',
        en: 'Fast and efficient implementation. The Ramdut team is highly qualified and always available to help.',
        es: 'Implementación rápida y eficiente. El equipo de Ramdut está altamente calificado y siempre disponible para ayudar.',
        ko: '빠르고 효율적인 구현. Ramdut 팀은 고도로 자격을 갖추고 있으며 항상 도움을 제공합니다.',
        zh: '快速高效的实施。Ramdut 团队技能过硬，随时提供帮助。'
      }
    },
    {
      name: 'Carlos Rodriguez',
      role: 'Director, Innovación Digital',
      avatar: '👨‍🏫',
      flag: '🇪🇸',
      rating: 5,
      text: {
        pt: 'ROI impressionante em apenas 3 meses. A plataforma é intuitiva e as funcionalidades são exatamente o que precisávamos.',
        en: 'Impressive ROI in just 3 months. The platform is intuitive and the features are exactly what we needed.',
        es: 'ROI impresionante en solo 3 meses. La plataforma es intuitiva y las funcionalidades son exactamente lo que necesitábamos.',
        ko: '단 3개월 만에 인상적인 ROI. 플랫폼은 직관적이고 기능은 정확히 우리가 필요한 것입니다.',
        zh: '仅 3 个月就获得了令人印象深刻的投资回报率。平台直观，功能正是我们所需要的。'
      }
    },
    {
      name: '김지우 (Kim Ji-woo)',
      role: '기술이사, 스마트솔루션',
      avatar: '👩‍🔬',
      flag: '🇰🇷',
      rating: 5,
      text: {
        pt: 'Tecnologia de ponta com suporte em coreano. A Ramdut entende as necessidades do mercado asiático.',
        en: 'Cutting-edge technology with Korean support. Ramdut understands the needs of the Asian market.',
        es: 'Tecnología de vanguardia con soporte en coreano. Ramdut entiende las necesidades del mercado asiático.',
        ko: '한국어 지원이 가능한 최첨단 기술. Ramdut은 아시아 시장의 요구를 이해합니다.',
        zh: '具有韩语支持的尖端技术。Ramdut 了解亚洲市场的需求。'
      }
    },
    {
      name: '李美华 (Li Meihua)',
      role: '产品总监, 创新科技',
      avatar: '👩‍💼',
      flag: '🇨🇳',
      rating: 5,
      text: {
        pt: 'Perfeita integração com nossos sistemas existentes. A escalabilidade é impressionante e o suporte técnico é de primeira.',
        en: 'Perfect integration with our existing systems. The scalability is impressive and the technical support is first-class.',
        es: 'Perfecta integración con nuestros sistemas existentes. La escalabilidad es impresionante y el soporte técnico es de primera.',
        ko: '기존 시스템과의 완벽한 통합. 확장성이 인상적이고 기술 지원이 최고 수준입니다.',
        zh: '与我们现有系统完美集成。可扩展性令人印象深刻，技术支持一流。'
      }
    },
    {
      name: 'Ana Santos',
      role: 'Gerente de TI, Empresa Líder',
      avatar: '👩‍💻',
      flag: '🇧🇷',
      rating: 5,
      text: {
        pt: 'Segurança robusta e performance excepcional. Nossa produtividade aumentou 40% após a implementação.',
        en: 'Robust security and exceptional performance. Our productivity increased 40% after implementation.',
        es: 'Seguridad robusta y rendimiento excepcional. Nuestra productividad aumentó 40% después de la implementación.',
        ko: '강력한 보안과 뛰어난 성능. 구현 후 생산성이 40% 증가했습니다.',
        zh: '强大的安全性和卓越的性能。实施后我们的生产力提高了 40%。'
      }
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

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            {t('nav.testimonials')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos clientes ao redor do mundo estão dizendo sobre a Ramdut
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const isVisible = visibleItems.includes(index);
            
            return (
              <div
                key={index}
                ref={(el) => itemsRef.current[index] = el}
                data-index={index}
                className={`scroll-reveal ${isVisible ? 'revealed' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="h-full glass hover:shadow-primary/20 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8">
                    {/* Quote Icon */}
                    <div className="flex justify-between items-start mb-6">
                      <Quote className="w-8 h-8 text-primary/30" />
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-lg leading-relaxed mb-6 group-hover:text-foreground transition-colors">
                      "{testimonial.text[language]}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-brand-gradient rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold group-hover:text-primary transition-colors">
                            {testimonial.name}
                          </h4>
                          <span className="text-lg">{testimonial.flag}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Empresas que Confiam na Ramdut</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold">TechStart</div>
              <div className="text-2xl font-bold">Global Innovations</div>
              <div className="text-2xl font-bold">Innovación Digital</div>
              <div className="text-2xl font-bold">스마트솔루션</div>
              <div className="text-2xl font-bold">创新科技</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;