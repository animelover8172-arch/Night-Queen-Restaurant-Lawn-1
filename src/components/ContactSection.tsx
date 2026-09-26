import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation, MessageCircle, Star, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import { restaurantConfig } from '../config/restaurantConfig';

interface ContactSectionProps {
  theme: 'dark' | 'light';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ theme }) => {
  return (
    <section
      id="contact"
      className={`py-20 md:py-28 relative transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#0a0a0a] text-[#f5f5f4]' : 'bg-[#f5f1e8] text-[#121216]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-10 bg-[#d4af37]" />
            <span className="text-xs gold-accent tracking-[0.25em] uppercase font-semibold">
              Location & Contact
            </span>
            <span className="h-[1px] w-10 bg-[#d4af37]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Visit Night Queen
          </h2>

          <p className={`mt-4 text-sm sm:text-base font-light ${
            theme === 'dark' ? 'text-white/60' : 'text-[#5a554a]'
          }`}>
            Conveniently located at Kali Asthan Mandir Chowk, Near CMC with ample vehicle parking and easy accessibility.
          </p>
        </div>

        {/* 2-Column Grid: Info & Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Details Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Address Card */}
            <div className={`p-6 border transition-all ${
              theme === 'dark'
                ? 'glass-card border-white/10'
                : 'bg-white border-[#ded5c2]'
            }`}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#d4af37] flex items-center justify-center text-[#d4af37] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#d4af37] font-semibold">Our Location</p>
                  <h3 className="font-serif text-lg font-bold mt-1 text-[#f5f5f4]">Kali Asthan Mandir Chowk, Near CMC</h3>
                  <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${
                    theme === 'dark' ? 'text-white/60' : 'text-[#686358]'
                  }`}>
                    {restaurantConfig.address.fullAddress}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone & Inquiries Card */}
            <div className={`p-6 border transition-all ${
              theme === 'dark'
                ? 'glass-card border-white/10'
                : 'bg-white border-[#ded5c2]'
            }`}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#d4af37] flex items-center justify-center text-[#d4af37] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#d4af37] font-semibold">Direct Phone</p>
                  <a
                    id="contact-direct-phone"
                    href={`tel:${restaurantConfig.phone}`}
                    className="font-serif text-xl font-bold mt-1 text-[#d4af37] hover:underline block"
                  >
                    {restaurantConfig.displayPhone}
                  </a>
                  <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-white/60' : 'text-[#686358]'}`}>
                    For table reservations, party bookings & home delivery
                  </p>
                </div>
              </div>
            </div>

            {/* Timings & Status Card */}
            <div className={`p-6 border transition-all ${
              theme === 'dark'
                ? 'glass-card border-white/10'
                : 'bg-white border-[#ded5c2]'
            }`}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-emerald-500 flex items-center justify-center text-emerald-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-400 font-semibold">Opening Hours</p>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <h4 className="font-serif text-lg font-bold mt-1 text-emerald-400">
                    Open Daily · Closes 11:00 PM
                  </h4>
                  <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-white/60' : 'text-[#686358]'}`}>
                    Monday to Sunday: 11:00 AM – 11:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                id="contact-directions-btn"
                href={restaurantConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-4 bg-[#38bdf8]/15 hover:bg-[#38bdf8] text-[#38bdf8] hover:text-black border border-[#38bdf8]/40 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                id="contact-whatsapp-chat-btn"
                href={`https://wa.me/${restaurantConfig.whatsappNumber}?text=${encodeURIComponent('Hello Night Queen Restaurant, I want to inquire about dining and table availability.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-4 bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-black border border-[#25D366]/40 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed Card */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="overflow-hidden border border-white/10 shadow-2xl relative flex-1 min-h-[380px] bg-[#0e0e0e]">
              {/* Google Maps iFrame */}
              <iframe
                title="Night Queen Restaurant and Lawn Map Location"
                src={restaurantConfig.mapsEmbedUrl}
                className="w-full h-full min-h-[380px] border-0 opacity-90"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Floating Location Pill */}
              <div className="absolute top-4 left-4 p-3.5 bg-black/90 backdrop-blur-md border border-white/15 text-left shadow-lg">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-bold">Kali Asthan Mandir Chowk, Near CMC</p>
                <p className="font-serif text-xs sm:text-sm font-semibold text-[#f5f5f4]">
                  Night Queen Restaurant & Lawn
                </p>
                <div className="flex items-center gap-1 text-[11px] text-[#d4af37] mt-0.5">
                  <Star className="w-3 h-3 fill-[#d4af37]" />
                  <span>4.4 ★ (69+ Google Reviews)</span>
                </div>
              </div>

              {/* Map External Open CTA */}
              <a
                id="open-maps-external"
                href={restaurantConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/90 backdrop-blur-md text-[#d4af37] text-xs font-semibold border border-white/20 hover:bg-[#d4af37] hover:text-black transition-all"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
