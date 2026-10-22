import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { siteConfig } from '../data/site';
import { PhotoSlot } from './PhotoSlot';
import { UnderlineSvg } from './HandDrawnSvg';

export const Gallery: React.FC = () => {
  const items = siteConfig.gallery;
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (selectedItemIndex === null) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItemIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedItemIndex]);

  const handleNext = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) => (prev! + 1) % items.length);
  };

  const handlePrev = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) => (prev! - 1 + items.length) % items.length);
  };

  return (
    <section id="galerie" className="relative py-20 sm:py-28 bg-dark text-paper overflow-hidden">
      {/* Background grain */}
      <div className="absolute inset-0 bg-grain-dark opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-dark-card border border-dark-border text-xs font-mono uppercase tracking-widest text-mustard mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Einblicke & Atmosphäre</span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-paper leading-none">
              AUS DER <span className="text-mustard">KÜCHE</span>
            </h2>
            <div className="w-28 mt-2">
              <UnderlineSvg className="w-full h-3 text-ketchup" color="#D62828" />
            </div>
          </div>
          <p className="mt-4 md:mt-0 text-paper/70 max-w-md font-body text-base sm:text-lg">
            Heißer Grill, krosse Pommes, schmelzender Käse. Klicke auf ein Bild, um es in voller Größe unbeschnitten zu betrachten.
          </p>
        </div>

        {/* Clean, Uniform Staggered Grid (Every image properly in frame) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: (index % 4) * 0.08 }}
              onClick={() => setSelectedItemIndex(index)}
              className="relative group cursor-pointer"
            >
              <div className="rounded-xl overflow-hidden border-2 border-dark-border group-hover:border-mustard transition-all duration-300 bg-dark-surface shadow-md">
                <PhotoSlot
                  src={item.photoSlot}
                  alt={item.title}
                  label={item.title}
                  aspectRatio="portrait"
                  objectFit="cover"
                  objectPosition="center"
                  enableParallax={false}
                  className="w-full h-full"
                />
              </div>

              {/* Hover / Tap Overlay info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl flex flex-col justify-end p-3 sm:p-4 pointer-events-none">
                <span className="text-[10px] font-mono uppercase tracking-widest text-mustard">
                  {item.tag}
                </span>
                <div className="flex items-center justify-between">
                  <span className="font-display font-black text-base sm:text-lg text-paper uppercase leading-tight">
                    {item.title}
                  </span>
                  <ZoomIn className="w-4 h-4 text-mustard shrink-0 ml-1" />
                </div>
                <span className="text-xs text-paper/75 font-body line-clamp-1 mt-0.5">
                  {item.subtitle}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal (Uncropped, Full POV) */}
      <AnimatePresence>
        {selectedItemIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setSelectedItemIndex(null)}
          >
            {/* Top Bar with Close */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 flex items-center gap-3">
              <span className="text-xs font-mono text-paper/70 uppercase bg-dark/80 px-2.5 py-1 rounded border border-white/10">
                {selectedItemIndex + 1} / {items.length}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItemIndex(null);
                }}
                className="p-2.5 rounded-full bg-dark/80 border border-white/20 text-paper hover:text-mustard hover:border-mustard transition-colors"
                aria-label="Galerie schließen"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-2 sm:left-6 z-30 p-3 rounded-full bg-dark/80 border border-white/20 text-paper hover:text-mustard hover:bg-dark transition-all"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2 sm:right-6 z-30 p-3 rounded-full bg-dark/80 border border-white/20 text-paper hover:text-mustard hover:bg-dark transition-all"
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Active Item Container (Uncropped, Full View) */}
            <div
              className="relative max-w-3xl w-full mx-auto max-h-[90vh] flex flex-col items-center justify-center p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full max-h-[75vh] flex items-center justify-center rounded-xl overflow-hidden border border-white/15 bg-black/50 shadow-2xl">
                <img
                  src={items[selectedItemIndex].photoSlot}
                  alt={items[selectedItemIndex].title}
                  className="max-h-[72vh] w-auto max-w-full object-contain rounded-lg"
                />
              </div>

              {/* Caption Bar */}
              <div className="mt-3 text-center px-4">
                <span className="text-xs font-mono text-mustard uppercase tracking-widest font-bold">
                  {items[selectedItemIndex].tag}
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-wide text-paper mt-0.5 leading-none">
                  {items[selectedItemIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-paper/70 font-body mt-1">
                  {items[selectedItemIndex].subtitle}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
