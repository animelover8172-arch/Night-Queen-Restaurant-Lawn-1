import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Utensils, Sparkles, Search, MessageCircle, Flame, Check, Plus, Tag } from 'lucide-react';
import { menuItemsData, restaurantConfig } from '../config/restaurantConfig';
import { MenuItem } from '../types';

interface MenuSectionProps {
  theme: 'dark' | 'light';
}

export const MenuSection: React.FC<MenuSectionProps> = ({ theme }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'ALL', label: 'All Items' },
    { id: 'VEG', label: 'Pure Veg' },
    { id: 'NON-VEG', label: 'Non-Veg' },
    { id: 'INDIAN', label: 'Indian Specials' },
    { id: 'CHINESE', label: 'Chinese' },
    { id: 'MOCKTAILS', label: 'Mocktails & Drinks' },
    { id: 'DESSERTS', label: 'Desserts' },
  ];

  const filteredItems = useMemo(() => {
    return menuItemsData.filter((item) => {
      const matchesCategory =
        activeCategory === 'ALL' ||
        (activeCategory === 'VEG' && item.isVeg) ||
        (activeCategory === 'NON-VEG' && !item.isVeg) ||
        item.category === activeCategory;

      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.hindiName && item.hindiName.includes(searchQuery)) ||
        (item.subCategory && item.subCategory.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleOrderWhatsApp = (item: MenuItem) => {
    const text = encodeURIComponent(
      `Hello Night Queen Restaurant & Lawn, I would like to order or inquire about "${item.name}" (₹${item.price}). Please share availability and delivery/dine-in details.`
    );
    window.open(`https://wa.me/${restaurantConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section
      id="menu"
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
              Signature Selection
            </span>
            <span className="h-[1px] w-10 bg-[#d4af37]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Crafted to Satisfy Every Craving
          </h2>

          <p className={`mt-4 text-sm sm:text-base font-light ${
            theme === 'dark' ? 'text-white/60' : 'text-[#5a554a]'
          }`}>
            Explore our chef-curated culinary menu featuring authentic North Indian curries, fragrant biryanis, sizzling Chinese wok dishes, signature mocktails, and decadent desserts.
          </p>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`menu-filter-${cat.id.toLowerCase()}`}
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

          {/* Search Input Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              id="menu-search-input"
              type="text"
              placeholder="Search dishes (e.g. Biryani, Paneer)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 text-xs border outline-none transition-all ${
                theme === 'dark'
                  ? 'glass border-white/10 text-[#f5f5f4] focus:border-[#d4af37] placeholder:text-white/40'
                  : 'bg-white border-[#dfd5c2] text-[#121216] focus:border-[#d4af37] placeholder:text-[#8e8a80]'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-[#d4af37]"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="popLayout">
          {filteredItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16 border border-white/10 glass"
            >
              <Utensils className="w-10 h-10 mx-auto text-[#d4af37]/50 mb-3" />
              <p className="text-base font-serif font-semibold">No dishes found</p>
              <p className="text-xs text-white/50 mt-1">Try another category or search keyword</p>
              <button
                onClick={() => {
                  setActiveCategory('ALL');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-1.5 text-xs uppercase tracking-wider font-semibold text-[#d4af37] border border-[#d4af37]/40 hover:bg-[#d4af37]/10"
              >
                Reset Filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`overflow-hidden border transition-all duration-300 flex flex-col group hover:-translate-y-1.5 ${
                    theme === 'dark'
                      ? 'glass-card border-white/10 hover:border-[#d4af37]/50'
                      : 'bg-white border-[#ded5c2] hover:border-[#d4af37] hover:shadow-lg'
                  }`}
                >
                  {/* Item Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-[#18181f]">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

                    {/* Veg / Non-Veg Symbol */}
                    <div className="absolute top-3 left-3 p-1 bg-black/80 backdrop-blur-md border border-white/10 flex items-center gap-1.5 px-2">
                      <div className={`w-3 h-3 rounded-none border flex items-center justify-center ${
                        item.isVeg ? 'border-emerald-400' : 'border-rose-400'
                      }`}>
                        <div className={`w-1.5 h-1.5 ${
                          item.isVeg ? 'bg-emerald-400' : 'bg-rose-400'
                        }`} />
                      </div>
                      <span className={`text-[9px] font-bold uppercase tracking-wider ${
                        item.isVeg ? 'text-emerald-400' : 'text-rose-400'
                      }`}>
                        {item.isVeg ? 'VEG' : 'NON-VEG'}
                      </span>
                    </div>

                    {/* Chef Special / Popular Badge */}
                    {item.isChefSpecial && (
                      <div className="absolute top-3 right-3 px-2.5 py-0.5 bg-[#d4af37] text-black text-[9px] font-bold tracking-wider uppercase flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        <span>Chef Special</span>
                      </div>
                    )}
                    {!item.isChefSpecial && item.isPopular && (
                      <div className="absolute top-3 right-3 px-2.5 py-0.5 bg-black/80 text-[#d4af37] border border-[#d4af37]/40 text-[9px] font-bold tracking-wider uppercase">
                        Popular
                      </div>
                    )}

                    {/* Category Label Overlay */}
                    {item.subCategory && (
                      <div className="absolute bottom-3 left-3 text-[10px] font-semibold text-[#d4af37] bg-black/70 px-2 py-0.5 border border-white/10 uppercase tracking-wider">
                        {item.subCategory}
                      </div>
                    )}
                  </div>

                  {/* Item Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-base font-bold tracking-wide text-[#f5f5f4] group-hover:text-[#d4af37] transition-colors leading-snug">
                          {item.name}
                        </h3>
                        <span className="font-serif text-base font-bold text-[#d4af37] shrink-0">
                          ₹{item.price}
                        </span>
                      </div>

                      {item.hindiName && (
                        <p className="text-xs text-white/40 mt-0.5 font-hindi">
                          {item.hindiName}
                        </p>
                      )}

                      <p className={`mt-2.5 text-xs line-clamp-2 leading-relaxed ${
                        theme === 'dark' ? 'text-white/55' : 'text-[#686358]'
                      }`}>
                        {item.description}
                      </p>
                    </div>

                    {/* Order via WhatsApp CTA */}
                    <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-white/40">
                        Fresh to Order
                      </span>
                      <button
                        id={`order-btn-${item.id}`}
                        onClick={() => handleOrderWhatsApp(item)}
                        aria-label={`Order ${item.name} on WhatsApp`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-black border border-[#25D366]/30 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Order via WhatsApp</span>
                      </button>
                    </div>

                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Menu Bottom Note & Editable Information Disclaimer */}
        <div className={`mt-12 p-6 border text-center max-w-2xl mx-auto ${
          theme === 'dark' ? 'glass border-white/10' : 'bg-[#ede6d8]/60 border-[#ded5c2]'
        }`}>
          <p className="text-xs text-white/60 leading-relaxed">
            * Custom catering, buffet packages, and party menus for lawn celebrations are tailored on request. Please speak with our banquet manager for personalized banquet planning.
          </p>
          <div className="mt-3 flex items-center justify-center gap-4">
            <a
              id="menu-reserve-table-cta"
              href="#reservation"
              className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] hover:underline"
            >
              Book a Table for Dinner →
            </a>
            <span className="text-white/30">·</span>
            <a
              id="menu-contact-kitchen-cta"
              href={`tel:${restaurantConfig.phone}`}
              className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] hover:underline"
            >
              Call Kitchen: {restaurantConfig.displayPhone}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
