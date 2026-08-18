import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Eye, X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { galleryData } from '../config/restaurantConfig';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  theme: 'dark' | 'light';
}

export const GallerySection: React.FC<GallerySectionProps> = ({ theme }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = [
    { id: 'ALL', label: 'All Photos' },
    { id: 'INTERIOR', label: 'Interior & Bar' },
    { id: 'FOOD', label: 'Food & Drinks' },
    { id: 'OUTDOOR', label: 'Architectural Facade' },
    { id: 'LAWN', label: 'Open Lawn' },
    { id: 'DINING', label: 'Dining Areas' },
  ];

  const filteredGallery = galleryData.filter(
    (item) => activeCategory === 'ALL' || item.category === activeCategory
  );

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredGallery.length]);

  const handleOpenLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleNextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => ((prev! + 1) % filteredGallery.length));
  };

  const handlePrevImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev! === 0 ? filteredGallery.length - 1 : prev! - 1));
  };

  return (
    <section
      id="gallery"
      className={`py-20 md:py-28 relative transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#0a0a0a] text-[#f5f5f4]' : 'bg-[#faf8f5] text-[#121216]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-10 bg-[#d4af37]" />
            <span className="text-xs gold-accent tracking-[0.25em] uppercase font-semibold">
              Visual Essence
            </span>
            <span className="h-[1px] w-10 bg-[#d4af37]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Moments at Night Queen
          </h2>

          <p className={`mt-4 text-sm sm:text-base font-light ${
            theme === 'dark' ? 'text-white/60' : 'text-[#5a554a]'
          }`}>
            Glimpse into our ambient interiors, grand illuminated entrance, handcrafted mocktails bar, and open-air lawns in Sasaram.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`gallery-cat-${cat.id.toLowerCase()}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider whitespace-nowrap transition-all shrink-0 cursor-pointer border ${
                  isActive
                    ? 'bg-[#d4af37] text-black font-bold border-[#d4af37]'
                    : theme === 'dark'
                    ? 'bg-[#111] text-white/70 border-white/10 hover:border-[#d4af37]/50 hover:text-white'
                    : 'bg-[#ede6d8] text-[#4a453b] border-[#dfd5c2] hover:border-[#d4af37] hover:text-[#121216]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Masonry Responsive Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredGallery.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative overflow-hidden cursor-pointer border border-white/10 bg-[#0e0e0e] shadow-lg h-72"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  console.error('Gallery image failed to load:', e.currentTarget.src);
                }}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Hover Overlay Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="self-end p-2 bg-black/70 backdrop-blur-md border border-white/15 text-[#d4af37] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-base font-bold text-[#f5f5f4] mt-0.5 leading-snug">
                    {item.title}
                  </h3>
                  {item.caption && (
                    <p className="text-xs text-white/60 line-clamp-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-light">
                      {item.caption}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && filteredGallery[selectedImageIndex] && (
          <motion.div
            id="gallery-lightbox-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6"
          >
            {/* Top Toolbar */}
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-20">
              <div className="text-[11px] font-semibold text-[#d4af37] tracking-[0.2em] uppercase bg-black/80 px-3 py-1.5 border border-white/15">
                Photo {selectedImageIndex + 1} of {filteredGallery.length}
              </div>
              <button
                id="lightbox-close-btn"
                onClick={() => setSelectedImageIndex(null)}
                aria-label="Close Lightbox"
                className="p-2 bg-black/80 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Left Nav Button */}
            <button
              id="lightbox-prev-btn"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/80 hover:bg-white/20 text-white border border-white/20 transition-all z-20 cursor-pointer hidden sm:block"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Nav Button */}
            <button
              id="lightbox-next-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/80 hover:bg-white/20 text-white border border-white/20 transition-all z-20 cursor-pointer hidden sm:block"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Lightbox Main Image & Caption */}
            <div className="relative max-w-4xl max-h-[80vh] flex flex-col items-center justify-center">
              <motion.img
                key={filteredGallery[selectedImageIndex].id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={filteredGallery[selectedImageIndex].image}
                alt={filteredGallery[selectedImageIndex].title}
                decoding="async"
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto object-contain border border-white/10 shadow-2xl"
              />

              <div className="mt-4 text-center max-w-xl px-4">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#f5f5f4]">
                  {filteredGallery[selectedImageIndex].title}
                </h3>
                {filteredGallery[selectedImageIndex].caption && (
                  <p className="text-xs sm:text-sm text-white/60 mt-1 font-light">
                    {filteredGallery[selectedImageIndex].caption}
                  </p>
                )}
              </div>
            </div>

            {/* Mobile swipe info / nav */}
            <div className="sm:hidden absolute bottom-6 flex items-center gap-6 z-20">
              <button
                onClick={handlePrevImage}
                className="px-4 py-2 bg-white/15 text-white text-xs uppercase tracking-wider font-semibold"
              >
                ← Prev
              </button>
              <button
                onClick={handleNextImage}
                className="px-4 py-2 bg-white/15 text-white text-xs uppercase tracking-wider font-semibold"
              >
                Next →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
