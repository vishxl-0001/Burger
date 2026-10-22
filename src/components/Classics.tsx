import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Flame, Check, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/site';
import { PhotoSlot } from './PhotoSlot';
import { UnderlineSvg } from './HandDrawnSvg';

export const Classics: React.FC = () => {
  const burgers = siteConfig.signatureBurgers;

  return (
    <section id="klassiker" className="relative py-20 sm:py-28 bg-paper text-dark overflow-hidden">
      {/* Background grain */}
      <div className="absolute inset-0 bg-grain opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-dark text-paper text-xs font-mono uppercase tracking-widest mb-3">
              <Flame className="w-3.5 h-3.5 text-mustard fill-mustard" />
              <span>Die Lieblinge vom Grill</span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-dark leading-none">
              UNSERE <span className="text-ketchup">KLASSIKER</span>
            </h2>
            <div className="w-32 mt-2">
              <UnderlineSvg className="w-full h-3 text-ketchup" color="#D62828" />
            </div>
          </div>
          <p className="mt-4 md:mt-0 text-dark/75 max-w-md font-body text-base sm:text-lg">
            Jeder Burger wird nach Bestelleingang frisch auf der heißen Platte zubereitet. Saftig, heiß und mit kompromissloser Qualität.
          </p>
        </div>

        {/* Alternating Editorial Cards */}
        <div className="flex flex-col gap-16 sm:gap-24">
          {burgers.map((burger, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.article
                key={burger.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center ${
                  isEven ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Photo Column */}
                <div
                  className={`lg:col-span-6 relative ${
                    isEven ? 'lg:col-start-7' : 'lg:col-start-1'
                  }`}
                >
                  {/* Brutalist Frame Backing */}
                  <div
                    className={`absolute inset-0 bg-dark rounded-2xl ${
                      isEven ? '-translate-x-3 translate-y-3' : 'translate-x-3 translate-y-3'
                    }`}
                  />

                  {/* Tilt container */}
                  <div className="relative z-10 rounded-2xl overflow-hidden border-3 border-dark bg-dark-surface shadow-xl transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99]">
                    <PhotoSlot
                      src={burger.photoSlot}
                      alt={burger.name}
                      label={burger.name}
                      aspectRatio="portrait"
                      className="w-full max-h-[480px]"
                      badge={burger.badge}
                    />
                  </div>

                  {/* Stamp / Price Tag */}
                  <div
                    className={`absolute -bottom-4 ${
                      isEven ? '-left-3' : '-right-3'
                    } z-20 bg-mustard text-dark px-4 py-2 rounded-lg border-2 border-dark font-display font-black text-2xl uppercase tracking-wider shadow-brutal rotate-${
                      isEven ? '3' : '-3'
                    }`}
                  >
                    {burger.price}
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-6 flex flex-col items-start ${
                    isEven ? 'lg:col-start-1' : 'lg:col-start-7'
                  }`}
                >
                  <span className="font-hand text-xl font-bold text-ketchup tracking-wide">
                    {burger.tagline}
                  </span>

                  <h3 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-dark mt-1 mb-4">
                    {burger.name}
                  </h3>

                  <p className="text-dark/80 text-base sm:text-lg leading-relaxed font-body mb-6">
                    {burger.description}
                  </p>

                  {/* Highlights / Sauce note */}
                  <div className="flex flex-wrap items-center gap-3 mb-8 text-xs font-mono">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-paper-dark border border-dark/15 text-dark font-semibold">
                      <Sparkles className="w-3.5 h-3.5 text-ketchup" />
                      {burger.sauceNote}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-paper-dark border border-dark/15 text-dark font-semibold">
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      Frisch zubereitet
                    </span>
                  </div>

                  {/* Order direct CTA */}
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={`${siteConfig.contact.whatsappBaseUrl}?text=${encodeURIComponent(
                        `Hallo VUR Burger, ich möchte gerne bestellen:\n1x ${burger.name} (${burger.price})`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-5 py-3 text-sm font-display uppercase tracking-wider font-bold bg-dark hover:bg-dark-surface text-paper rounded-md border-2 border-dark shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all active:scale-95"
                    >
                      <MessageSquare className="w-4 h-4 text-mustard" />
                      <span>{burger.name} bestellen</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
