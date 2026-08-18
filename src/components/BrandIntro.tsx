import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Users, Flame, GlassWater, Award, ShieldCheck } from 'lucide-react';
import { restaurantConfig } from '../config/restaurantConfig';

interface BrandIntroProps {
  theme: 'dark' | 'light';
}

export const BrandIntro: React.FC<BrandIntroProps> = ({ theme }) => {
  const moments = [
    { title: "Family Dinners", desc: "Spacious, comfortable seating where every generation shares cherished conversations and authentic feasts.", icon: Users },
    { title: "Romantic Evenings", desc: "Intimate themed booths, soft golden lighting, and gentle acoustic warmth for unforgettable date nights.", icon: Heart },
    { title: "Grand Celebrations", desc: "From birthdays to wedding receptions on our manicured open lawn under the starry Sasaram sky.", icon: Sparkles },
    { title: "Outdoor Dining & Fireplace", desc: "Breathe in the evening breeze by the warm hearth with freshly grilled delicacies and artisan mocktails.", icon: Flame }
  ];

  return (
    <section
      id="intro"
      className={`py-20 md:py-28 relative transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#0a0a0a] text-[#f5f5f4]' : 'bg-[#f7f4ee] text-[#121216]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-10 bg-[#d4af37]" />
            <span className="text-xs gold-accent tracking-[0.25em] uppercase font-semibold">
              The Night Queen Experience
            </span>
            <span className="h-[1px] w-10 bg-[#d4af37]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-2 leading-tight">
            More Than Dining.<br />
            <span className="text-[#d4af37] italic font-serif">An Unforgettable Atmosphere.</span>
          </h2>

          <p className={`mt-6 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-white/70' : 'text-[#5a554a]'
          }`}>
            Located along Ara-Patna Road in Baijla, Sasaram, <strong className="font-medium text-[#d4af37]">Night Queen Restaurant & Lawn</strong> brings together royal hospitality, culinary craftsmanship, and an open-air natural oasis designed for every celebration.
          </p>
        </div>

        {/* 4 Pillars of Experience with Sophisticated Dark Numbered Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {moments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-7 transition-all duration-300 group hover:-translate-y-1 ${
                  theme === 'dark'
                    ? 'glass border border-white/10 hover:border-[#d4af37]/50'
                    : 'bg-white border border-[#e6dec8] hover:border-[#d4af37] shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-8 h-8 border border-[#d4af37] flex items-center justify-center text-xs font-semibold text-[#d4af37]">
                    0{idx + 1}
                  </div>
                  <Icon className="w-5 h-5 text-white/40 group-hover:text-[#d4af37] transition-colors" />
                </div>
                <h3 className="font-serif text-lg font-semibold tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className={`text-xs leading-relaxed ${
                  theme === 'dark' ? 'text-white/50' : 'text-[#686358]'
                }`}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Factual Highlights Bar */}
        <div className={`mt-14 p-6 sm:p-8 border flex flex-wrap items-center justify-around gap-6 text-center ${
          theme === 'dark' ? 'glass border-white/10' : 'bg-[#ede6d8]/60 border-[#ded5c2]'
        }`}>
          <div>
            <p className="font-serif text-3xl sm:text-4xl font-bold text-[#d4af37]">{restaurantConfig.rating} ★</p>
            <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Google Rating</p>
          </div>
          <div className="h-8 w-px bg-white/10 hidden sm:block" />
          <div>
            <p className="font-serif text-3xl sm:text-4xl font-bold text-[#d4af37]">{restaurantConfig.reviewCount}</p>
            <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Verified Guest Reviews</p>
          </div>
          <div className="h-8 w-px bg-white/10 hidden sm:block" />
          <div>
            <p className="font-serif text-3xl sm:text-4xl font-bold text-[#d4af37]">100%</p>
            <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Fresh & Hygienic Cooking</p>
          </div>
          <div className="h-8 w-px bg-white/10 hidden sm:block" />
          <div>
            <p className="font-serif text-3xl sm:text-4xl font-bold text-[#d4af37]">Open Lawn</p>
            <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Open-Air Dining & Events</p>
          </div>
        </div>

      </div>
    </section>
  );
};
