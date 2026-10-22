import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleFinish = () => {
    setIsVisible(false);
    setTimeout(onComplete, 400); // Allow exit transition
  };

  useEffect(() => {
    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      handleFinish();
      return;
    }

    const timer = setTimeout(() => {
      handleFinish();
    }, 1150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark text-paper cursor-pointer select-none"
          onClick={handleFinish}
        >
          {/* Halftone texture background */}
          <div className="absolute inset-0 bg-grain-dark opacity-40 pointer-events-none" />

          {/* Main Logo Slam */}
          <motion.div
            initial={{ scale: 2.2, opacity: 0, rotate: -6 }}
            animate={{ scale: 1, opacity: 1, rotate: -2 }}
            transition={{
              type: 'spring',
              stiffness: 450,
              damping: 24,
              duration: 0.5,
            }}
            className="relative flex flex-col items-center text-center"
          >
            <div className="relative">
              <span className="font-display font-black text-8xl sm:text-9xl tracking-tighter text-paper drop-shadow-[5px_5px_0px_#D62828]">
                VUR
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.35, duration: 0.35, ease: 'easeOut' }}
                className="absolute -bottom-2 left-0 right-0 h-2 bg-mustard origin-left transform -rotate-1"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="mt-4 flex items-center gap-2 text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-mustard"
            >
              <span>BURGER</span>
              <span>•</span>
              <span>GERMERSHEIM</span>
            </motion.div>
          </motion.div>

          {/* Skip Hint */}
          <div className="absolute bottom-6 right-6 text-[11px] font-mono tracking-wider text-paper/40 uppercase hover:text-paper transition-colors">
            [Tippen zum Überspringen]
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
