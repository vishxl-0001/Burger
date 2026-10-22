import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/site';
import { UnderlineSvg } from './HandDrawnSvg';

export const OrderCta: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-paper text-dark overflow-hidden">
      {/* Background grain */}
      <div className="absolute inset-0 bg-grain opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Giant Attention-Grabbing Container */}
        <div className="relative bg-ketchup text-paper rounded-3xl p-8 sm:p-14 lg:p-16 border-4 border-dark shadow-brutal-lg overflow-hidden">
          {/* Halftone / geometric decoration */}
          <div className="absolute inset-0 bg-grain-dark opacity-20 pointer-events-none" />
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-mustard rounded-full opacity-20 blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Copy & Value (Cols 1-7) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-dark text-mustard text-xs font-mono uppercase tracking-widest font-bold mb-4 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Heißhunger? Wir sind am Start</span>
              </div>

              <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-paper leading-[0.9]">
                HUNGER? <br />
                SCHREIB UNS EINFACH.
              </h2>
              <div className="w-40 mt-2">
                <UnderlineSvg className="w-full h-3 text-mustard" color="#F6B21B" />
              </div>

              <p className="mt-6 text-paper/90 font-body text-base sm:text-xl leading-relaxed max-w-xl">
                Schick uns deine Bestellung direkt über WhatsApp oder ruf kurz durch. Wir schmeißen sofort den Grill an – abholbereit ohne langes Schlangestehen.
              </p>

              {/* 3 Step Mini-Guide */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-6 border-t border-paper/20 text-xs font-mono">
                <div className="flex flex-col">
                  <span className="font-display text-2xl text-mustard font-black">01</span>
                  <span className="font-bold text-paper mt-0.5">Nachricht senden</span>
                  <span className="text-paper/70 text-[11px]">Burger & Beilagen wählen</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-2xl text-mustard font-black">02</span>
                  <span className="font-bold text-paper mt-0.5">Frisch gegrillt</span>
                  <span className="text-paper/70 text-[11px]">Direkt auf die Platte</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-2xl text-mustard font-black">03</span>
                  <span className="font-bold text-paper mt-0.5">Heiß abholen</span>
                  <span className="text-paper/70 text-[11px]">Münchener Str. 14</span>
                </div>
              </div>
            </div>

            {/* Right Column: Big Impossible-to-Miss Buttons (Cols 8-12) */}
            <div className="lg:col-span-5 flex flex-col gap-4 w-full">
              {/* WhatsApp Main Button */}
              <motion.a
                href={`${siteConfig.contact.whatsappBaseUrl}?text=${encodeURIComponent(
                  siteConfig.contact.whatsappDefaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group p-5 sm:p-6 bg-mustard hover:bg-mustard-hover text-dark rounded-2xl border-3 border-dark shadow-brutal flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-dark text-paper flex items-center justify-center shrink-0 shadow-inner group-hover:rotate-6 transition-transform">
                    <MessageSquare className="w-6 h-6 fill-mustard text-mustard" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-black text-2xl sm:text-3xl uppercase tracking-wider text-dark leading-none">
                      Per WhatsApp
                    </span>
                    <span className="text-xs font-mono font-bold text-dark/80 mt-1">
                      {siteConfig.contact.phoneDisplay}
                    </span>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full bg-dark text-paper flex items-center justify-center shrink-0">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-mustard" />
                </div>
              </motion.a>

              {/* Direct Phone Call Button */}
              <a
                href={siteConfig.contact.phone}
                className="p-4 sm:p-5 bg-dark hover:bg-dark-surface text-paper rounded-2xl border-3 border-dark shadow-brutal flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-dark-card border border-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-mustard" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-display font-black text-xl sm:text-2xl uppercase tracking-wider text-paper leading-none">
                      Direkt Anrufen
                    </span>
                    <span className="text-xs font-mono text-paper/60 mt-0.5">
                      Für schnelle Bestellungen
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono text-mustard uppercase font-bold group-hover:translate-x-1 transition-transform">
                  Wählen →
                </span>
              </a>

              {/* Sub-note */}
              <div className="flex items-center justify-center gap-2 text-xs font-mono text-paper/80 pt-2 text-center">
                <ShieldCheck className="w-4 h-4 text-mustard" />
                <span>Schnelle Antwortzeiten während der Öffnungszeiten</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
