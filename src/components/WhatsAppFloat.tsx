import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const openWhatsApp = () => {
    const phoneNumber = '5551980228329';
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os produtos e serviços da Ramdut.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="whatsapp-float w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
      
      {/* Ping animation */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Fale conosco no WhatsApp
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
      </div>
    </button>
  );
};

export default WhatsAppFloat;