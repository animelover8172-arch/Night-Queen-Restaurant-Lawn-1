import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { customerReviewsData, restaurantConfig } from '../config/restaurantConfig';

interface ReviewsSectionProps {
  theme: 'dark' | 'light';
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ theme }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide interval
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % customerReviewsData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % customerReviewsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? customerReviewsData.length - 1 : prev - 1));
  };

  const currentReview = customerReviewsData[currentIndex];

  return (
    <section
      id="reviews"
      className={`py-20 md:py-28 relative transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#0a0a0a] text-[#f5f5f4]' : 'bg-[#f5f1e8] text-[#121216]'
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-10 bg-[#d4af37]" />
            <span className="text-xs gold-accent tracking-[0.25em] uppercase font-semibold">
              Authentic Experiences
            </span>
            <span className="h-[1px] w-10 bg-[#d4af37]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            What Our Guests Say
          </h2>

          {/* Rating Summary Bar */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-1.5 px-4 py-1 border border-[#d4af37] text-[#d4af37]">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#d4af37]" />
                ))}
              </div>
              <span className="font-bold text-sm">{restaurantConfig.rating} ★</span>
            </div>
            <span className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-[#686358]'}`}>
              Over <strong className="font-semibold text-white/80">{restaurantConfig.reviewCount} Verified Reviews</strong> on Google
            </span>
          </div>
        </div>

        {/* Carousel Card Container */}
        <div className="relative max-w-4xl mx-auto">
          
          <div className={`p-8 sm:p-12 border relative transition-all duration-500 min-h-[300px] flex flex-col justify-between ${
            theme === 'dark'
              ? 'glass-card border-white/10 shadow-2xl'
              : 'bg-white border-[#e0d6c0] shadow-xl'
          }`}>
            
            {/* Background Quote Watermark */}
            <Quote className="absolute top-6 right-8 w-20 h-20 text-[#d4af37]/10 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 flex flex-col justify-between flex-1"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-6 text-[#d4af37]">
                    {[...Array(currentReview.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
                    ))}
                    {currentReview.visitType && (
                      <span className="ml-3 text-[10px] uppercase tracking-wider text-white/60 bg-white/5 px-2.5 py-0.5 border border-white/10">
                        {currentReview.visitType}
                      </span>
                    )}
                  </div>

                  {/* Review Text */}
                  <p className="font-serif text-base sm:text-xl md:text-2xl font-light italic leading-relaxed text-[#f5f5f4] mb-8">
                    "{currentReview.review}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 border border-[#d4af37] text-[#d4af37] font-bold font-serif flex items-center justify-center text-base">
                      {currentReview.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-[#f5f5f4] flex items-center gap-1.5">
                        <span>{currentReview.name}</span>
                        {currentReview.verified && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        )}
                      </h4>
                      <p className="text-xs text-white/40">{currentReview.date}</p>
                    </div>
                  </div>

                  {/* Google Verified Review Pill */}
                  <div className="text-[11px] text-white/60 flex items-center gap-1.5 bg-[#d4af37]/10 px-3 py-1 border border-[#d4af37]/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Google Reviews · Sasaram</span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            
            {/* Indicators */}
            <div className="flex items-center gap-2">
              {customerReviewsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-1.5 transition-all cursor-pointer ${
                    currentIndex === i
                      ? 'w-8 bg-[#d4af37]'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                id="review-prev-btn"
                onClick={handlePrev}
                aria-label="Previous review"
                className={`p-2.5 border transition-all cursor-pointer ${
                  theme === 'dark'
                    ? 'border-white/10 bg-black/60 text-[#f5f5f4] hover:border-[#d4af37] hover:text-[#d4af37]'
                    : 'border-[#dfd5c2] bg-white text-[#121216] hover:border-[#d4af37]'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                id="review-next-btn"
                onClick={handleNext}
                aria-label="Next review"
                className={`p-2.5 border transition-all cursor-pointer ${
                  theme === 'dark'
                    ? 'border-white/10 bg-black/60 text-[#f5f5f4] hover:border-[#d4af37] hover:text-[#d4af37]'
                    : 'border-[#dfd5c2] bg-white text-[#121216] hover:border-[#d4af37]'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
