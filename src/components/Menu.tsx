import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Sparkles, Flame, MessageSquare, ExternalLink, HelpCircle } from 'lucide-react';
import { siteConfig, MenuItem } from '../data/site';
import { UnderlineSvg } from './HandDrawnSvg';

export const Menu: React.FC = () => {
  const categories = siteConfig.menuCategories;
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0].id);

  const activeCategory = categories.find((c) => c.id === activeCategoryId) || categories[0];

  return (
    <section id="speisekarte" className="relative py-20 sm:py-28 bg-dark text-paper overflow-hidden">
      {/* Background grain and ambient glow */}
      <div className="absolute inset-0 bg-grain-dark opacity-35 pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-ketchup/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-card border border-dark-border text-xs font-mono uppercase tracking-widest text-mustard mb-3">
            <Utensils className="w-3.5 h-3.5" />
            <span>2x 100g frisches Beef • Auf der Platte gesmashed</span>
          </div>

          <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-paper leading-none">
            SPEISE<span className="text-mustard">KARTE</span>
          </h2>
          <div className="w-28 mx-auto mt-2">
            <UnderlineSvg className="w-full h-3 text-ketchup" color="#D62828" />
          </div>

          <p className="mt-4 text-paper/75 font-body text-base sm:text-lg">
            Wähle deinen Burger einzeln oder direkt als komplettes Menü. Vorab per WhatsApp bestellen und ohne Wartezeit frisch abholen!
          </p>
        </div>

        {/* Tab Navigation (Horizontally Scrollable on Mobile) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 no-scrollbar border-b border-dark-border/60 mb-8 sm:mb-12">
          {categories.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`relative px-4 py-2.5 rounded-lg text-sm sm:text-base font-display uppercase tracking-wider whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? 'bg-mustard text-dark font-black border-mustard shadow-brutal translate-y-[-2px]'
                    : 'bg-dark-card text-paper/80 border-dark-border hover:border-mustard/60 hover:text-paper'
                }`}
              >
                <span>{cat.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-ketchup rotate-45"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Special Menü Banner (from the flyer: "Alle Menüs inkl. Pommes oder Süßkartoffel...") */}
        <div className="mb-6 bg-gradient-to-r from-ketchup/20 via-dark-card to-mustard/20 border-2 border-mustard/40 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-mustard text-dark font-display font-black flex items-center justify-center shrink-0 shadow-sm text-sm">
              MENÜ
            </div>
            <div>
              <p className="font-display font-black text-lg text-paper uppercase tracking-wide">
                Alle Menüs inklusive Beilage & Getränk!
              </p>
              <p className="text-xs font-mono text-paper/75">
                Wähle knusprige Pommes Frites oder Süßkartoffel-Pommes + 1 Softdrink nach Wahl.
              </p>
            </div>
          </div>
          <span className="text-[11px] font-mono text-mustard bg-dark/80 px-3 py-1 rounded-full border border-mustard/30 uppercase font-bold shrink-0">
            Spar-Kombination
          </span>
        </div>

        {/* Category Description Banner */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-dark-surface/60 border border-dark-border/80 p-3.5 px-4 rounded-lg">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-paper/70">
            <span className="w-2 h-2 rounded-full bg-mustard shrink-0" />
            <span>{activeCategory.description}</span>
          </div>
          <span className="text-[11px] font-mono text-paper/40 self-end sm:self-auto">
            {activeCategory.items.length} Artikel
          </span>
        </div>

        {/* Receipt / Ticket Card Container */}
        <div className="relative bg-paper text-dark rounded-xl border-4 border-dark shadow-brutal-lg overflow-hidden">
          {/* Ticket Header Bar */}
          <div className="bg-dark text-paper p-4 sm:p-5 flex flex-wrap items-center justify-between gap-2 border-b-2 border-dashed border-paper/30 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="font-display text-lg tracking-widest text-mustard uppercase">
                VUR BURGER DOCKET
              </span>
              <span className="text-paper/50">#GERMERSHEIM-14</span>
            </div>
            <div className="text-paper/60 uppercase text-[11px]">
              DOUBLE ? • 2x 100g Frisches Beef
            </div>
          </div>

          {/* Items List with Animated Crossfade */}
          <div className="p-5 sm:p-8 bg-grain">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col divide-y-2 divide-dashed divide-dark/15"
              >
                {activeCategory.items.map((item: MenuItem) => (
                  <div
                    key={item.id}
                    className="py-4 sm:py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 group hover:bg-black/[0.02] -mx-2 px-2 rounded transition-colors"
                  >
                    {/* Left: Name, Badges & Description */}
                    <div className="flex-1 pr-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-dark group-hover:text-ketchup transition-colors">
                          {item.name}
                        </span>

                        {item.popular && (
                          <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-ketchup text-paper">
                            <Sparkles className="w-2.5 h-2.5" />
                            Beliebt
                          </span>
                        )}

                        {item.badge && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-mustard text-dark border border-dark/20 font-mono">
                            {item.badge}
                          </span>
                        )}

                        {item.spicy && (
                          <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-100 text-ketchup border border-ketchup/30 font-mono">
                            <Flame className="w-2.5 h-2.5" />
                            Scharf
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-dark/75 font-body mt-1 max-w-xl leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Dotted Leader filler for desktop */}
                    <div className="hidden lg:flex flex-1 mx-3 border-b-2 border-dotted border-dark/30 self-baseline" />

                    {/* Right: Prices (Einzel & Menü) + WhatsApp Order Button */}
                    <div className="flex items-center justify-between sm:justify-end gap-3 self-end sm:self-baseline mt-1 sm:mt-0">
                      <div className="flex flex-col items-end text-right">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-[11px] font-mono uppercase text-dark/60 font-semibold">
                            Einzel
                          </span>
                          <span className="font-display font-black text-xl sm:text-2xl text-dark">
                            {item.price}
                          </span>
                        </div>

                        {item.menuPrice && (
                          <div className="flex items-baseline gap-1.5 -mt-1">
                            <span className="text-[10px] font-mono uppercase text-ketchup font-bold">
                              • Menü
                            </span>
                            <span className="font-display font-black text-base sm:text-lg text-ketchup">
                              {item.menuPrice}
                            </span>
                          </div>
                        )}
                      </div>

                      <a
                        href={`${siteConfig.contact.whatsappBaseUrl}?text=${encodeURIComponent(
                          `Hallo VUR Burger, ich möchte gerne bestellen:\n1x ${item.name} (${item.price}${item.menuPrice ? ` / als Menü ${item.menuPrice}` : ''})`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-mono font-bold bg-dark text-paper rounded hover:bg-ketchup transition-colors ml-1"
                        title="Diesen Artikel per WhatsApp bestellen"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-mustard" />
                        <span>Bestellen</span>
                      </a>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Ticket Footer / Note */}
          <div className="bg-paper-dark p-4 sm:p-5 border-t-2 border-dashed border-dark/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-dark/70">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-ketchup shrink-0" />
              <span>Extrawünsche oder Soßenauswahl? Sag es uns einfach bei deiner WhatsApp-Bestellung.</span>
            </div>
            <a
              href={`${siteConfig.contact.whatsappBaseUrl}?text=${encodeURIComponent(
                siteConfig.contact.whatsappDefaultMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-ketchup hover:underline shrink-0"
            >
              <span>Gesamte Bestellung per WhatsApp aufgeben</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
