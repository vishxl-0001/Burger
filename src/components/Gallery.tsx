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
            Heißer Grill, krosse Pommes, schmelzender Käse. Klicke auf ein Bild, um es in voller Größe zu betrachten.
          </p>
        </div>

        {/* Masonry / Editorial Staggered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item, index) => {
            // Give varied aspect ratios for an editorial magazine feel
            const isWide = index === 0 || index === 7;
            const aspect = isWide ? 'landscape' : index % 3 === 0 ? 'portrait' : 'square';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
                onClick={() => setSelectedItemIndex(index)}
                className={`relative group cursor-pointer ${
                  isWide ? 'sm:col-span-2' : 'col-span-1'
                }`}
              >
                <div className="rounded-xl overflow-hidden border-2 border-dark-border group-hover:border-mustard transition-colors bg-dark-surface shadow-md">
                  <PhotoSlot
                    src={item.photoSlot}
                    alt={item.title}
                    label={item.title}
                    aspectRatio={aspect}
                    enableParallax={false}
                    className="w-full h-full"
                  />
                </div>

                {/* Hover / Tap Overlay info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl flex flex-col justify-end p-4 pointer-events-none">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-mustard">
                    {item.tag}
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-black text-lg text-paper uppercase">
                      {item.title}
                    </span>
                    <ZoomIn className="w-4 h-4 text-mustard" />
                  </div>
                  <span className="text-xs text-paper/70 font-body">{item.subtitle}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItemIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedItemIndex(null)}
          >
            {/* Top Bar with Close */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center gap-3">
              <span className="text-xs font-mono text-paper/60 uppercase">
                {selectedItemIndex + 1} / {items.length}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItemIndex(null);
                }}
                className="p-2.5 rounded-full bg-dark-card border border-white/20 text-paper hover:text-mustard hover:border-mustard transition-colors"
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
              className="absolute left-3 sm:left-6 z-20 p-3 rounded-full bg-dark-card/80 border border-white/10 text-paper hover:text-mustard hover:bg-dark transition-all"
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
              className="absolute right-3 sm:right-6 z-20 p-3 rounded-full bg-dark-card/80 border border-white/10 text-paper hover:text-mustard hover:bg-dark transition-all"
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Active Item Container */}
            <div
              className="relative max-w-4xl w-full mx-auto max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full max-h-[70vh] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-dark-surface">
                <PhotoSlot
                  src={items[selectedItemIndex].photoSlot}
                  alt={items[selectedItemIndex].title}
                  label={items[selectedItemIndex].title}
                  aspectRatio="auto"
                  enableParallax={false}
                  className="w-full h-full min-h-[350px] max-h-[68vh]"
                />
              </div>

              {/* Caption Bar */}
              <div className="mt-4 text-center">
                <span className="text-xs font-mono text-mustard uppercase tracking-widest">
                  {items[selectedItemIndex].tag}
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-wide text-paper mt-0.5">
                  {items[selectedItemIndex].title}
                </h3>
                <p className="text-sm text-paper/70 font-body">
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
