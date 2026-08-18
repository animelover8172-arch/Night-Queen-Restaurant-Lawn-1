import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Award, HeartHandshake, Sparkles, ShieldCheck, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { restaurantConfig } from '../config/restaurantConfig';
import aboutImage from '../assets/images/regenerated_image_1786871653869.png';

interface AboutUsProps {
  theme: 'dark' | 'light';
}

export const AboutUs: React.FC<AboutUsProps> = ({ theme }) => {
  const highlights = [
    { title: "Fresh Ingredients", desc: "Every gravy, marinade, and vegetable is sourced fresh daily.", icon: Leaf },
    { title: "Expertly Prepared", desc: "Skilled culinary chefs balancing authentic regional flavours.", icon: Award },
    { title: "Warm Hospitality", desc: "Attentive, family-friendly service where every guest feels at home.", icon: HeartHandshake },
    { title: "Elegant Ambience", desc: "Sophisticated interiors paired with the serenity of our lush lawn.", icon: Sparkles },
  ];

  return (
    <section
      id="about"
      className={`py-20 md:py-28 relative overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#0a0a0a] text-[#f5f5f4]' : 'bg-[#faf8f5] text-[#121216]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src={aboutImage}
                alt="Night Queen Restaurant interior and dining setup"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-[420px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

              {/* Floating Badge in image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 glass border border-white/10 shadow-xl flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold">Sasaram, Bihar</p>
                  <p className="font-serif text-base sm:text-lg font-bold text-[#f5f5f4] mt-0.5">
                    Ara Patna Road, Baijla
                  </p>
                  <p className="text-xs text-white/50">Open Daily · 11:00 AM – 11:00 PM</p>
                </div>
                <div className="w-10 h-10 border border-[#d4af37] text-[#d4af37] flex items-center justify-center font-bold font-brand text-sm tracking-widest shrink-0">
                  NQ
                </div>
              </div>
            </div>

            {/* Subtle decorative background accent */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#d4af37]/8 rounded-full blur-2xl -z-10" />
          </motion.div>

          {/* Right Column: Narrative Story & Key Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Small Label */}
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-8 bg-[#d4af37]" />
              <span className="text-xs text-[#d4af37] font-semibold tracking-[0.25em] uppercase">
                Our Story & Philosophy
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              A Sanctuary Made for Moments That Matter
            </h2>

            {/* Story Paragraphs */}
            <p className={`mt-5 text-sm sm:text-base leading-relaxed font-light ${
              theme === 'dark' ? 'text-white/70' : 'text-[#5a554a]'
            }`}>
              At <strong className="font-medium text-[#d4af37]">Night Queen Restaurant & Lawn</strong>, we believe dining should be an occasion to celebrate. Located conveniently on Ara-Patna Road in Baijla, Sasaram, we have curated a destination where culinary excellence meets soothing natural landscapes.
            </p>

            <p className={`mt-3 text-sm sm:text-base leading-relaxed font-light ${
              theme === 'dark' ? 'text-white/60' : 'text-[#5a554a]'
            }`}>
              Whether you are enjoying a private dinner in our indoor dining spaces, gathering with family over authentic Dum Biryani and freshly baked tandoori breads, or dining under the stars on our spacious open lawn, every moment is crafted with uncompromising standards of hygiene and warmth.
            </p>

            {/* 4 Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((h, idx) => {
                const Icon = h.icon;
                return (
                  <div
                    key={h.title}
                    className={`p-4 border transition-all ${
                      theme === 'dark'
                        ? 'glass border-white/10 hover:border-[#d4af37]/40'
                        : 'bg-[#ede6d8]/60 border-[#dfd5c2] hover:border-[#d4af37]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-5 h-5 border border-[#d4af37] text-[#d4af37] flex items-center justify-center text-[9px]">
                        0{idx + 1}
                      </div>
                      <h4 className="font-serif text-sm font-semibold tracking-wide">
                        {h.title}
                      </h4>
                    </div>
                    <p className={`text-xs leading-relaxed ${
                      theme === 'dark' ? 'text-white/50' : 'text-[#686358]'
                    }`}>
                      {h.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Guarantee Pill */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <p className={`text-xs ${theme === 'dark' ? 'text-white/50' : 'text-[#686358]'}`}>
                Strictly sanitized kitchen · 100% vegetarian & non-vegetarian separate cooking care · Clean drinking water & verified staff
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
