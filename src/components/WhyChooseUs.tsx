import React from 'react';
import { motion } from 'motion/react';
import { Leaf, ChefHat, ShieldCheck, Clock, Sparkles, UtensilsCrossed, CheckCircle2 } from 'lucide-react';
import { whyChooseUsData } from '../config/restaurantConfig';

interface WhyChooseUsProps {
  theme: 'dark' | 'light';
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ theme }) => {
  const iconMap: Record<string, React.ElementType> = {
    Leaf,
    ChefHat,
    ShieldCheck,
    Clock,
    Sparkles,
    UtensilsCrossed
  };

  return (
    <section
      id="why-us"
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
              Uncompromising Standards
            </span>
            <span className="h-[1px] w-10 bg-[#d4af37]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Why Night Queen
          </h2>

          <p className={`mt-4 text-sm sm:text-base font-light ${
            theme === 'dark' ? 'text-white/60' : 'text-[#5a554a]'
          }`}>
            We take pride in delivering a premier dining standard to Sasaram, built on hygienic preparation, culinary passion, and heartfelt hospitality.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUsData.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Sparkles;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`p-7 border transition-all duration-300 group hover:-translate-y-1.5 ${
                  theme === 'dark'
                    ? 'glass-card border-white/10 hover:border-[#d4af37]/60'
                    : 'bg-white border-[#ded5c2] hover:border-[#d4af37] hover:shadow-lg'
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 border border-[#d4af37] flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] text-white/30 font-mono">0{idx + 1}</span>
                </div>

                <h3 className="font-serif text-lg font-bold tracking-wide mb-2 group-hover:text-[#d4af37] transition-colors">
                  {item.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed ${
                  theme === 'dark' ? 'text-white/55' : 'text-[#686358]'
                }`}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
