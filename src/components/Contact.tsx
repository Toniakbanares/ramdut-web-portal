import React, { useState, useEffect, useRef } from 'react';
import { Mail, MessageCircle, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openWhatsApp = () => {
    const phoneNumber = '5551980228329';
    const message = encodeURIComponent(
      `Olá! Meu nome é ${formData.name || '[Nome]'}.

${formData.email ? `Email: ${formData.email}` : ''}

${formData.message || 'Gostaria de saber mais sobre os produtos e serviços da Ramdut.'}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    // Open WhatsApp with form data
    openWhatsApp();

    // Show success message
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para continuar a conversa no WhatsApp.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'ramdut2025@gmail.com',
      action: () => window.open('mailto:ramdut2025@gmail.com', '_blank')
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: '+55 51 98022-8329',
      action: openWhatsApp
    },
    {
      icon: Phone,
      title: 'Telefone',
      description: '+55 51 98022-8329',
      action: () => window.open('tel:+5551980228329', '_blank')
    },
    {
      icon: MapPin,
      title: 'Localização',
      description: 'Porto Alegre, Brasil',
      action: () => {}
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para ajudar. Entre em contato conosco e descubra como podemos transformar seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <Card className="glass">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Envie sua Mensagem</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t('contact.email')} *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t('contact.message')} *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Conte-nos sobre seu projeto ou dúvida..."
                      rows={5}
                      className="w-full resize-none"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit"
                      className="flex-1 bg-brand-gradient hover:opacity-90 h-12"
                    >
                      <Send className="mr-2 w-5 h-5" />
                      {t('contact.send')}
                    </Button>
                    
                    <Button 
                      type="button"
                      onClick={openWhatsApp}
                      variant="outline"
                      className="flex-1 border-green-500 text-green-600 hover:bg-green-50 h-12"
                    >
                      <MessageCircle className="mr-2 w-5 h-5" />
                      {t('contact.whatsapp.cta')}
                    </Button>
                  </div>
                </form>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    💬 Ao enviar, você será redirecionado para o WhatsApp para continuar a conversa
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="space-y-6">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Outras Formas de Contato</h3>
                <p className="text-muted-foreground">
                  Escolha a forma que for mais conveniente para você. Estamos sempre prontos para atender.
                </p>
              </div>

              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card 
                    key={index}
                    className="glass hover:shadow-primary/20 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    onClick={method.action}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-brand-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                            {method.title}
                          </h4>
                          <p className="text-muted-foreground">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* Business Hours */}
              <Card className="glass">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4">Horário de Atendimento</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Segunda - Sexta:</span>
                      <span>8h às 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado:</span>
                      <span>9h às 14h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo:</span>
                      <span>Emergências</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
                    <p className="text-sm text-green-700 dark:text-green-400">
                      🟢 Suporte 24/7 disponível via WhatsApp para clientes premium
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;