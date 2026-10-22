import React from 'react';
import { Sparkles, Flame, Star } from 'lucide-react';
import { siteConfig } from '../data/site';

export const MarqueeTicker: React.FC = () => {
  const items = siteConfig.marqueeStrip;

  return (
    <div className="relative py-4 sm:py-6 overflow-hidden bg-mustard border-y-4 border-dark select-none shadow-lg -rotate-1 scale-[1.02] z-20">
      {/* Texture grain */}
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />

      {/* Track 1 */}
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-4 sm:gap-6 mx-3 sm:mx-4">
            <span className="font-display font-black text-2xl sm:text-4xl uppercase tracking-wider text-dark">
              {text}
            </span>
            {idx % 3 === 0 ? (
              <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-ketchup fill-ketchup shrink-0" />
            ) : idx % 3 === 1 ? (
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-dark fill-dark shrink-0" />
            ) : (
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-ketchup shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
