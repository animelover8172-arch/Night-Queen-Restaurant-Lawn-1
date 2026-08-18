import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { restaurantConfig } from '../config/restaurantConfig';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Night Queen Restaurant & Lawn, I would like to inquire about table booking / food order.`
  );

  return (
    <div id="floating-actions-container" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      
      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            id="back-to-top-btn"
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 10 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-10 h-10 bg-black/90 text-[#d4af37] border border-white/20 backdrop-blur-md shadow-xl flex items-center justify-center hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all cursor-pointer group"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Phone Call Button (Mobile quick tap) */}
      <a
        id="floating-call-btn"
        href={`tel:${restaurantConfig.phone}`}
        aria-label="Call Restaurant directly"
        className="sm:hidden w-11 h-11 bg-sky-500 text-black shadow-lg flex items-center justify-center active:scale-95 transition-transform"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href={`https://wa.me/${restaurantConfig.whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 bg-[#25D366] text-black shadow-lg hover:brightness-110 flex items-center justify-center hover:scale-105 active:scale-95 transition-all group"
      >
        <MessageCircle className="w-6 h-6 fill-current text-white" />
        <span className="sr-only">WhatsApp Inquiry</span>
      </a>

    </div>
  );
};
