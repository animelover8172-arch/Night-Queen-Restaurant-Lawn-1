import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Phone, ArrowUp, X } from 'lucide-react';
import { restaurantConfig } from '../config/restaurantConfig';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showPhoneMenu, setShowPhoneMenu] = useState(false);

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

      {/* Floating Multi-Number Call Popup (Mobile) */}
      <AnimatePresence>
        {showPhoneMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="bg-[#0a0a0a] border border-[#d4af37]/40 shadow-2xl p-3 w-64 text-left"
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
              <span className="text-[11px] font-bold text-[#d4af37] uppercase tracking-wider">Call Restaurant</span>
              <button 
                onClick={() => setShowPhoneMenu(false)}
                className="text-white/50 hover:text-white p-1"
                aria-label="Close call options"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="space-y-1.5">
              {restaurantConfig.phoneNumbers.map((p, i) => (
                <a
                  key={p.number}
                  id={`floating-phone-item-${i}`}
                  href={`tel:${p.number}`}
                  onClick={() => setShowPhoneMenu(false)}
                  className="flex items-center justify-between p-2 bg-white/5 hover:bg-[#d4af37]/15 border border-white/10 hover:border-[#d4af37]/50 text-xs font-semibold text-white transition-all"
                >
                  <div className="flex items-center gap-2">
                    <Phone className="w-3 h-3 text-[#d4af37]" />
                    <span>{p.display}</span>
                  </div>
                  <span className="text-[9px] uppercase tracking-wider text-white/50">{p.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Phone Call Trigger (Mobile quick tap) */}
      <button
        id="floating-call-btn"
        onClick={() => setShowPhoneMenu(!showPhoneMenu)}
        aria-label="Call Restaurant directly"
        className="sm:hidden w-11 h-11 bg-sky-500 text-black shadow-lg flex items-center justify-center active:scale-95 transition-transform cursor-pointer"
      >
        <Phone className="w-5 h-5" />
      </button>

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
