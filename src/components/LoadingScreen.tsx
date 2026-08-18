import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#09090b] text-[#f4efe6] pointer-events-none"
        >
          <div className="flex flex-col items-center max-w-sm px-6 text-center">
            {/* Crown / Monogram Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-14 h-14 rounded-full border border-[#d4af37]/40 flex items-center justify-center mb-5 bg-[#121216]"
            >
              <span className="font-brand text-2xl font-bold text-[#d4af37] tracking-wider">NQ</span>
            </motion.div>

            {/* Restaurant Name */}
            <motion.h1
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-brand text-xl md:text-2xl font-bold tracking-[0.25em] text-[#f4efe6] uppercase"
            >
              NIGHT QUEEN
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="text-xs tracking-[0.3em] uppercase text-[#d4af37] mt-1 font-medium"
            >
              RESTAURANT & LAWN
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="text-[11px] text-[#a8a39a] mt-1 font-hindi"
            >
              नाइट क्वीन रेस्टोरेंट & लॉन · सासाराम
            </motion.p>

            {/* Subtle Gold Progress Line */}
            <div className="w-44 h-[2px] bg-[#1a1a20] rounded-full overflow-hidden mt-6 relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.0, ease: "easeInOut", repeat: Infinity }}
                className="w-full h-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
