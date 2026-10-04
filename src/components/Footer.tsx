import React from 'react';
import { Phone, MapPin, Clock, MessageCircle, Star, Heart, ExternalLink, Sparkles, Code2 } from 'lucide-react';
import { restaurantConfig } from '../config/restaurantConfig';

interface FooterProps {
  theme: 'dark' | 'light';
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className="bg-[#050505] text-[#f5f5f4] border-t border-white/10 pt-16 pb-12 relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-[#d4af37]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-[#d4af37] flex items-center justify-center bg-black text-[#d4af37]">
                <span className="font-serif text-lg font-bold">NQ</span>
              </div>
              <div>
                <h3 className="font-serif text-base font-bold tracking-[0.2em] text-[#f5f5f4]">
                  NIGHT QUEEN
                </h3>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#d4af37]">
                  Restaurant & Lawn · Sasaram
                </p>
              </div>
            </div>

            <p className="text-xs text-white/60 leading-relaxed font-light">
              Sasaram's premier luxury dining and open lawn event destination. Combining exceptional North Indian and Chinese delicacies with serene open-air garden hospitality.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <div className="flex text-[#d4af37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#d4af37]" />
                ))}
              </div>
              <span className="text-xs text-[#d4af37] font-semibold">{restaurantConfig.rating} ★ Rating</span>
              <span className="text-xs text-white/40">({restaurantConfig.reviewCount} Reviews)</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li><a href="#hero" className="hover:text-[#d4af37] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#d4af37] transition-colors">About Us & Kitchen</a></li>
              <li><a href="#experience" className="hover:text-[#d4af37] transition-colors">The Experience</a></li>
              <li><a href="#lawn" className="hover:text-[#d4af37] transition-colors">Lawn & Open Air Dining</a></li>
              <li><a href="#menu" className="hover:text-[#d4af37] transition-colors">Signature Menu</a></li>
              <li><a href="#gallery" className="hover:text-[#d4af37] transition-colors">Photo Gallery</a></li>
              <li><a href="#reviews" className="hover:text-[#d4af37] transition-colors">Guest Testimonials</a></li>
              <li><a href="#reservation" className="hover:text-[#d4af37] transition-colors">Table Reservation</a></li>
            </ul>
          </div>

          {/* Services & Offerings */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-white/50">
              <li>• Dine-in Seating</li>
              <li>• Open-Air Lawn Events</li>
              <li>• Fireplace Dining</li>
              <li>• Drive-Through Pickup</li>
              <li>• No-Contact Delivery</li>
              <li>• Private Parties & Banquets</li>
              <li>• Family Dinners</li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]">
              Restaurant Location
            </h4>
            <p className="text-xs text-white/60 leading-relaxed">
              {restaurantConfig.address.fullAddress}
            </p>
            <div className="pt-1 space-y-1">
              <p className="text-[10px] uppercase tracking-wider text-white/40 font-semibold">Contact & Reservations:</p>
              {restaurantConfig.phoneNumbers.map((p, index) => (
                <a
                  key={p.number}
                  id={`footer-phone-${index}`}
                  href={`tel:${p.number}`}
                  className="text-xs font-semibold text-[#d4af37] hover:underline flex items-center justify-between"
                >
                  <span>{p.display}</span>
                  <span className="text-[10px] text-white/40">{p.label}</span>
                </a>
              ))}
              <p className="text-[11px] text-emerald-400 pt-1 font-medium">
                Open Daily: 11:00 AM – 11:00 PM
              </p>
            </div>
            <div className="pt-2">
              <a
                href="#reservation"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#d4af37] hover:bg-[#e5c378] text-black text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Reserve a Table</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section: Rights & Developer Credit */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          
          <div>
            <p>
              © {currentYear} <strong className="text-white/80">Night Queen Restaurant & Lawn</strong>. All rights reserved.
            </p>
            <p className="text-[11px] text-white/40 mt-0.5 font-hindi">
              नाइट क्वीन रेस्टोरेंट & लॉन · सासाराम, बिहार
            </p>
          </div>

          {/* RoadsideDeveloper Signature & Contact Links */}
          <div className="p-3 sm:px-4 bg-black/80 border border-white/10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px]">
            <div className="flex items-center gap-1 text-[#d4af37]">
              <Code2 className="w-3.5 h-3.5" />
              <span className="font-medium text-white/70">Design & Developed by</span>
              <span className="font-bold text-[#d4af37]">RoadsideDeveloper</span>
            </div>
            <span className="text-white/20 hidden sm:inline">|</span>
            <div className="flex items-center gap-2">
              <a
                id="developer-whatsapp-link"
                href="https://wa.me/917004658097?text=Hello%20RoadsideDeveloper%2C%20I%20saw%20the%20Night%20Queen%20Restaurant%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#25D366] hover:underline"
              >
                <MessageCircle className="w-3 h-3" />
                <span>WhatsApp: 7004658097</span>
              </a>
              <span className="text-white/20">/</span>
              <a
                id="developer-call-link"
                href="tel:7004658097"
                className="inline-flex items-center gap-1 text-[#38bdf8] hover:underline"
              >
                <Phone className="w-3 h-3" />
                <span>Call: 7004658097</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};
