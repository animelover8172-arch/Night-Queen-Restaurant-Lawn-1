import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { experiencesData } from '../config/restaurantConfig';

interface ExperienceSectionProps {
  theme: 'dark' | 'light';
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ theme }) => {
  return (
    <section
      id="experience"
      className={`py-20 md:py-28 relative transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#0a0a0a] text-[#f5f5f4]' : 'bg-[#f5f1e8] text-[#121216]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-10 bg-[#d4af37]" />
            <span className="text-xs gold-accent tracking-[0.25em] uppercase font-semibold">
              Exceptional Ambience
            </span>
            <span className="h-[1px] w-10 bg-[#d4af37]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            The Night Queen Experience
          </h2>

          <p className={`mt-4 text-sm sm:text-base font-light max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-white/60' : 'text-[#5a554a]'
          }`}>
            Immerse yourself in carefully designed spaces crafted for relaxation, royal indulgence, and intimate memories in Sasaram.
          </p>
        </div>

        {/* 6 Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiencesData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`overflow-hidden border transition-all duration-500 group hover:-translate-y-1.5 flex flex-col ${
                theme === 'dark'
                  ? 'glass-card border-white/10 hover:border-[#d4af37]/60'
                  : 'bg-white border-[#e0d6c0] hover:border-[#d4af37] hover:shadow-xl'
              }`}
            >
              {/* Card Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-[#18181f]">
                <img
                  src={exp.image}
                  alt={exp.title}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                
                {/* Category / Feature Tag Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md border border-[#d4af37]/50 text-[#d4af37] text-[10px] font-semibold tracking-[0.2em] uppercase">
                  {exp.tag}
                </div>

                <div className="absolute top-4 right-4 w-6 h-6 border border-[#d4af37] bg-black/80 flex items-center justify-center text-[10px] text-[#d4af37]">
                  0{idx + 1}
                </div>
              </div>

              {/* Card Text Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif text-lg font-bold tracking-wide text-[#f5f5f4] group-hover:text-[#d4af37] transition-colors">
                      {exp.title}
                    </h3>
                  </div>

                  {exp.hindiTitle && (
                    <p className="text-xs text-white/40 mt-0.5 font-hindi font-normal">
                      {exp.hindiTitle}
                    </p>
                  )}

                  <p className={`mt-3 text-xs leading-relaxed ${
                    theme === 'dark' ? 'text-white/55' : 'text-[#686358]'
                  }`}>
                    {exp.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href="#reservation"
                    className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#d4af37] hover:underline"
                  >
                    <span>Reserve this space</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
