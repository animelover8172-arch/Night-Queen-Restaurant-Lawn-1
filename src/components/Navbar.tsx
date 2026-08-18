import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Sun, Moon, Sparkles, MapPin, Calendar } from 'lucide-react';
import { restaurantConfig } from '../config/restaurantConfig';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Lawn & Outdoors', href: '#lawn' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Reservation', href: '#reservation' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Active section detector
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5'
            : 'bg-[#faf8f5]/95 backdrop-blur-xl border-b border-[#d4af37]/20 shadow-md py-3.5'
          : 'bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="navbar-logo-link"
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-9 h-9 border border-[#d4af37] flex items-center justify-center bg-black/40 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all">
            <span className="font-brand text-sm font-bold tracking-widest">NQ</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-brand text-base sm:text-lg font-bold tracking-[0.2em] transition-colors leading-tight ${
              isScrolled && theme === 'light' ? 'text-[#121216]' : 'text-[#f5f5f4]'
            } group-hover:text-[#d4af37]`}>
              NIGHT QUEEN
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#d4af37] font-medium leading-none -mt-0.5">
              Restaurant & Lawn
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-navigation" className="hidden lg:flex items-center space-x-1 xl:space-x-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                className={`px-3 py-1.5 text-[11px] uppercase tracking-widest font-medium transition-all relative ${
                  isActive
                    ? 'text-white border-b border-[#d4af37] pb-1'
                    : isScrolled && theme === 'light'
                    ? 'text-[#4a4a50] hover:text-[#d4af37]'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right side CTAs */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle Button */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className={`p-2 border transition-all ${
              theme === 'dark'
                ? 'border-white/10 bg-white/5 text-[#d4af37] hover:border-[#d4af37]'
                : 'border-[#e0d6c4] bg-[#f0e8db] text-[#8a6b18] hover:border-[#d4af37]'
            }`}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Quick Call Button (Tablet/Desktop) */}
          <a
            id="nav-call-btn"
            href={`tel:${restaurantConfig.phone}`}
            aria-label="Call Restaurant"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] uppercase tracking-widest font-medium text-[#d4af37] border border-[#d4af37]/40 hover:bg-[#d4af37]/10 hover:border-[#d4af37] transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{restaurantConfig.displayPhone}</span>
          </a>

          {/* Reserve CTA */}
          <a
            id="nav-reserve-btn"
            href="#reservation"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 border border-[#d4af37] text-[#d4af37] text-[11px] uppercase tracking-widest font-medium hover:bg-[#d4af37] hover:text-black transition-all"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Reserve Table</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className={`p-2 border transition-colors ${
              isScrolled && theme === 'light'
                ? 'text-[#121216] border-black/10 hover:bg-black/5'
                : 'text-[#f5f5f4] border-white/10 hover:bg-white/5'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#d4af37]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className={`lg:hidden fixed inset-x-0 top-full shadow-2xl border-b transition-all duration-300 animate-in slide-in-from-top-4 ${
            theme === 'dark'
              ? 'bg-[#0d0d0d]/98 border-white/10 text-[#f5f5f4]'
              : 'bg-[#faf8f5]/98 border-[#d4af37]/20 text-[#121216]'
          } max-h-[85vh] overflow-y-auto backdrop-blur-2xl`}
        >
          <div className="px-6 py-6 space-y-4">
            <div className="pb-3 border-b border-[#d4af37]/15 flex items-center justify-between">
              <div>
                <p className="font-brand font-bold text-sm tracking-wider text-[#d4af37]">NIGHT QUEEN</p>
                <p className="text-[11px] text-zinc-400">नाइट क्वीन रेस्टोरेंट & लॉन · सासाराम</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#d4af37] bg-[#d4af37]/10 px-2.5 py-1 rounded-full border border-[#d4af37]/20">
                <Sparkles className="w-3 h-3" />
                <span>4.4 ★ (69+ Reviews)</span>
              </div>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                    activeSection === link.href.substring(1)
                      ? 'bg-[#d4af37]/15 text-[#d4af37] font-semibold border-l-2 border-[#d4af37]'
                      : 'hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#d4af37]">→</span>
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-[#d4af37]/15 space-y-2.5">
              <a
                id="mobile-drawer-reserve-cta"
                href="#reservation"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-[#e5c378] to-[#c5a059] text-[#09090b] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table Now</span>
              </a>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  id="mobile-drawer-call-cta"
                  href={`tel:${restaurantConfig.phone}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 border border-[#d4af37]/40 text-[#d4af37] text-xs font-semibold rounded-lg bg-[#d4af37]/5 hover:bg-[#d4af37]/10"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us</span>
                </a>
                <a
                  id="mobile-drawer-directions-cta"
                  href={restaurantConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 border border-[#38bdf8]/40 text-[#38bdf8] text-xs font-semibold rounded-lg bg-[#38bdf8]/5 hover:bg-[#38bdf8]/10"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
