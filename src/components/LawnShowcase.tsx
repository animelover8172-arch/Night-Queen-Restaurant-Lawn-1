import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Trees, Moon, Flame, Users, Calendar, ArrowRight } from 'lucide-react';
import { restaurantConfig } from '../config/restaurantConfig';
import lawnBannerImg from '../assets/images/regenerated_image_1786871727135.png';

interface LawnShowcaseProps {
  theme: 'dark' | 'light';
}

export const LawnShowcase: React.FC<LawnShowcaseProps> = ({ theme }) => {
  return (
    <section
      id="lawn"
      className="relative py-24 md:py-32 bg-[#0a0a0a] text-[#f5f5f4] overflow-hidden"
    >
      {/* Background Graphic Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544077960-604201fe74bc?w=1920&auto=format&fit=crop&q=80"
          alt="Night Queen open lawn and illuminated facade"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/85 to-[#0a0a0a]" />
        <div className="absolute inset-0 opacity-20 dot-pattern" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-10 bg-[#d4af37]" />
            <span className="text-xs gold-accent tracking-[0.25em] uppercase font-semibold">
              Premium Outdoor Destination
            </span>
            <span className="h-[1px] w-10 bg-[#d4af37]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Where Dining Meets<br />
            <span className="text-[#d4af37] italic font-serif">The Open Air</span>
          </h2>

          <p className="mt-5 text-sm sm:text-base md:text-lg text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            Escape the ordinary. Dine on lush green lawns framed by our illuminated architectural facade, glowing garden lights, and the natural night breeze of Sasaram.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Showcase Banner Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 overflow-hidden border border-white/10 shadow-2xl relative group h-[400px] sm:h-[480px]"
          >
            <img
              src={lawnBannerImg}
              alt="Night Queen open lawn dining with ambient lights"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent" />

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-6 left-6 right-6 p-6 glass border border-white/10">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-1">
                <Moon className="w-3.5 h-3.5" />
                <span>Evening Garden Atmosphere</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#f5f5f4]">
                Dine Beneath the Sasaram Stars
              </h3>
              <p className="text-xs sm:text-sm text-white/60 mt-1 font-light">
                Perfect setting for birthday parties, family reunions, wedding anniversaries, and relaxed evening dinners.
              </p>
            </div>
          </motion.div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 glass border border-white/10 hover:border-[#d4af37]/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 border border-[#d4af37] text-[#d4af37] flex items-center justify-center text-xs font-semibold shrink-0 group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
                  01
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#f5f5f4]">Expansive Green Lawn</h4>
                  <p className="text-xs sm:text-sm text-white/55 mt-1 leading-relaxed">
                    A manicured venue capable of hosting private gatherings, birthday parties, and large family celebrations in comfort.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 glass border border-white/10 hover:border-[#d4af37]/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 border border-[#d4af37] text-[#d4af37] flex items-center justify-center text-xs font-semibold shrink-0 group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
                  02
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#f5f5f4]">Warm Hearth & Ambiance</h4>
                  <p className="text-xs sm:text-sm text-white/55 mt-1 leading-relaxed">
                    Cosy fireplace seating with glowing warmth, creating an intimate setting for winter evenings and romantic dinners.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 glass border border-white/10 hover:border-[#d4af37]/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 border border-[#d4af37] text-[#d4af37] flex items-center justify-center text-xs font-semibold shrink-0 group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
                  03
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#f5f5f4]">Dedicated Event Booking</h4>
                  <p className="text-xs sm:text-sm text-white/55 mt-1 leading-relaxed">
                    Customize menu platters, lawn seating arrangements, and audio-lighting for your special family milestones.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quick Action Button */}
            <div className="pt-2">
              <a
                id="lawn-booking-cta"
                href="#reservation"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 border border-[#d4af37] text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#d4af37] hover:text-black transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book The Lawn for Your Celebration</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
