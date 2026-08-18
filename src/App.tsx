/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { AboutUs } from './components/AboutUs';
import { ExperienceSection } from './components/ExperienceSection';
import { LawnShowcase } from './components/LawnShowcase';
import { MenuSection } from './components/MenuSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import mainBackgroundImg from './assets/images/background.png';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Load saved theme if any
  useEffect(() => {
    const savedTheme = localStorage.getItem('nq_theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('light', savedTheme === 'light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('nq_theme', nextTheme);
    if (nextTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  return (
    <div className={`relative min-h-screen font-body selection:bg-[#d4af37]/30 selection:text-[#d4af37] ${
      theme === 'dark' ? 'text-[#f5f5f4]' : 'text-[#121216]'
    }`}>
      {/* 
        LAYER 1 & 2: GLOBAL LUXURY BACKGROUND + DARK OVERLAY
        Fixed behind all website content, non-blocking, responsive with cover and smooth positioning.
      */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden" 
        aria-hidden="true"
      >
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center sm:bg-center md:bg-[center_top] bg-no-repeat transition-transform duration-1000 scale-[1.02]"
          style={{
            backgroundImage: `url(${mainBackgroundImg})`,
          }}
        />

        {/* Layer 2: Subtle Luxury Dark Overlays to ensure text legibility while revealing the rich details */}
        <div 
          className={`absolute inset-0 transition-colors duration-500 ${
            theme === 'dark'
              ? 'bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/80 to-[#0a0a0a]/92'
              : 'bg-gradient-to-b from-[#faf8f5]/92 via-[#faf8f5]/85 to-[#faf8f5]/94'
          }`}
        />
        
        {/* Subtle radial center spotlight glow */}
        <div 
          className={`absolute inset-0 ${
            theme === 'dark' 
              ? 'bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0a0a0a_85%)] opacity-80' 
              : 'bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#faf8f5_85%)] opacity-70'
          }`} 
        />
      </div>

      {/* LAYER 3: INTERACTIVE WEBSITE CONTENT */}
      <div className="relative z-10">
        {/* 1. Subtle Luxury Initial Loader */}
        <LoadingScreen />

        {/* 2. Top Scroll Progress Indicator */}
        <ScrollProgress />

        {/* 3. Sticky Glass Navigation */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/* 4. Main Content Sections */}
        <main id="main-content">
          {/* Hero Section */}
          <Hero />

          {/* The Night Queen Experience Statement */}
          <BrandIntro theme={theme} />

          {/* About Us & Fresh Kitchen Standards */}
          <AboutUs theme={theme} />

          {/* 6 Ambiance & Experience Cards */}
          <ExperienceSection theme={theme} />

          {/* Dedicated Lawn & Open Air Dining Showcase */}
          <LawnShowcase theme={theme} />

          {/* Dynamic & Filterable Menu with WhatsApp Quick Ordering */}
          <MenuSection theme={theme} />

          {/* Why Night Queen Pillars */}
          <WhyChooseUs theme={theme} />

          {/* Photo Gallery & Fullscreen Lightbox */}
          <GallerySection theme={theme} />

          {/* 4.4 ★ Reviews & Google Feedback Slider */}
          <ReviewsSection theme={theme} />

          {/* Table & Event Reservation Booking System */}
          <ReservationSection theme={theme} />

          {/* Contact, Timings & Location Section */}
          <ContactSection theme={theme} />
        </main>

        {/* 5. Comprehensive Footer with RoadsideDeveloper Credits */}
        <Footer theme={theme} />

        {/* 6. Floating Fast Actions (WhatsApp, Mobile Call, Scroll to Top) */}
        <FloatingActions />
      </div>
    </div>
  );
}

