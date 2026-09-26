import React from 'react';
import { motion } from 'motion/react';
import { Star, MapPin, Clock, Calendar, Utensils, ChevronDown, Sparkles } from 'lucide-react';
import { restaurantConfig } from '../config/restaurantConfig';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Image Layer with Cinematic Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544077960-604201fe74bc?w=1920&auto=format&fit=crop&q=85"
          alt="Night Queen Restaurant and Lawn illuminated facade"
          loading="eager"
          decoding="async"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 opacity-40"
        />
        {/* Layered luxury gradient masks */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0a0a0a]/70 to-[#0a0a0a]" />
        <div className="absolute inset-0 opacity-20 dot-pattern" />
      </div>

      {/* Hindi & Brand Ambient Watermark in top corner */}
      <div className="absolute top-28 right-8 sm:right-16 hidden md:flex flex-col items-end gap-1 select-none pointer-events-none z-10">
        <span className="text-[44px] lg:text-[56px] font-serif text-white/5 leading-none">नाइट क्वीन</span>
        <span className="text-[10px] text-white/20 tracking-[0.4em] uppercase">Premium Hospitality</span>
      </div>

      {/* Decorative Gold Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#d4af37]/8 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Eyebrow with gold line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-[1px] w-8 sm:w-12 bg-[#d4af37]" />
          <span className="text-xs sm:text-sm text-[#d4af37] tracking-[0.3em] uppercase font-semibold">
            Sasaram, Bihar
          </span>
          <span className="h-[1px] w-8 sm:w-12 bg-[#d4af37]" />
        </motion.div>

        {/* Hero Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#f5f5f4] leading-[1.08] max-w-4xl"
        >
          Where Every Meal <br />
          Becomes a <span className="italic text-[#d4af37] font-normal">Memory</span>
        </motion.h1>

        {/* Supporting Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-white/70 max-w-2xl font-light leading-relaxed text-center"
        >
          A refined dining experience where exceptional food, elegant ambience, and unforgettable celebrations come together at Night Queen Restaurant & Lawn, Kali Asthan Mandir Chowk, Near CMC.
        </motion.p>

        {/* Key Experience Feature Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 text-[11px] uppercase tracking-wider text-white/60"
        >
          <span className="px-3 py-1 bg-white/[0.03] border border-white/10 backdrop-blur-sm">🌿 Open-Air Lawn</span>
          <span className="px-3 py-1 bg-white/[0.03] border border-white/10 backdrop-blur-sm">🔥 Fireplace Ambiance</span>
          <span className="px-3 py-1 bg-white/[0.03] border border-white/10 backdrop-blur-sm">🍹 Mocktails Bar</span>
          <span className="px-3 py-1 bg-white/[0.03] border border-white/10 backdrop-blur-sm">👨‍👩‍👧‍👦 Family Halls</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none"
        >
          {/* Reserve Table Button */}
          <a
            id="hero-reserve-btn"
            href="#reservation"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#0a0a0a] bg-[#d4af37] border border-[#d4af37] shadow-[0_0_25px_rgba(212,175,55,0.25)] hover:bg-[#c5a059] hover:border-[#c5a059] hover:scale-[1.02] active:scale-98 transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve a Table</span>
          </a>

          {/* Explore Menu Button */}
          <a
            id="hero-menu-btn"
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#f5f5f4] bg-white/5 border border-white/15 hover:border-[#d4af37] hover:text-[#d4af37] transition-all backdrop-blur-md"
          >
            <Utensils className="w-4 h-4 text-[#d4af37]" />
            <span>Explore Menu</span>
          </a>
        </motion.div>

        {/* Stats and Live Status Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-12 pt-8 border-t border-white/10 flex items-center justify-center gap-8 sm:gap-14"
        >
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="text-2xl sm:text-3xl font-serif text-[#f5f5f4]">{restaurantConfig.rating} ★</span>
            <span className="text-[10px] text-white/50 uppercase tracking-widest">{restaurantConfig.reviewCount} Google Reviews</span>
          </div>

          <div className="h-10 w-[1px] bg-white/10" />

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="text-2xl sm:text-3xl font-serif text-[#f5f5f4]">Open</span>
            <span className="text-[10px] text-emerald-400 uppercase tracking-widest">Until 11:00 PM Tonight</span>
          </div>

          <div className="h-10 w-[1px] bg-white/10 hidden sm:block" />

          <div className="hidden sm:flex flex-col items-start text-left">
            <span className="text-xl sm:text-2xl font-serif text-[#d4af37]">Kali Asthan Chowk</span>
            <span className="text-[10px] text-white/50 uppercase tracking-widest">Near CMC</span>
          </div>
        </motion.div>
      </div>

      {/* Elegant Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer z-20 group"
      >
        <a href="#intro" className="flex flex-col items-center text-[#d4af37]/80 hover:text-[#d4af37] transition-colors">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold">Scroll Down</span>
          <ChevronDown className="w-4 h-4 animate-bounce mt-1" />
        </a>
      </motion.div>
    </section>
  );
};
