import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/site';
import { UnderlineSvg } from './HandDrawnSvg';

export const Values: React.FC = () => {
  const values = siteConfig.values;
  const stats = siteConfig.stats;

  return (
    <section id="warum-vur" className="relative py-20 sm:py-28 bg-paper text-dark overflow-hidden">
      {/* Background grain */}
      <div className="absolute inset-0 bg-grain opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-dark text-paper text-xs font-mono uppercase tracking-widest mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-mustard" />
              <span>Unsere Haltung</span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-dark leading-none">
              WARUM <span className="text-ketchup">VUR BURGER?</span>
            </h2>
            <div className="w-36 mt-2">
              <UnderlineSvg className="w-full h-3 text-ketchup" color="#D62828" />
            </div>
          </div>
          <p className="mt-4 md:mt-0 text-dark/75 max-w-md font-body text-base sm:text-lg">
            Keine Massenware, kein langes Warten auf labbrige Lieferungen. Hier wird ehrliches Street-Food zelebriert.
          </p>
        </div>

        {/* 3 Punchy Statement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 sm:mb-20">
          {values.map((val, idx) => (
            <motion.div
              key={val.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative p-7 sm:p-8 bg-paper-light rounded-xl border-3 border-dark shadow-brutal flex flex-col justify-between group hover:-translate-y-1 transition-all"
            >
              {/* Huge Number Graphic */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-display font-black text-6xl text-ketchup/20 group-hover:text-ketchup transition-colors">
                  {val.number}
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-mustard/20 text-mustard-dark border border-mustard/30">
                  {val.highlight}
                </span>
              </div>

              <div>
                <h3 className="font-display font-black text-3xl uppercase tracking-tight text-dark mb-3">
                  {val.title}
                </h3>
                <p className="text-dark/80 text-sm sm:text-base leading-relaxed font-body">
                  {val.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-dark/10 flex items-center justify-between text-xs font-mono text-dark/60">
                <span>VUR QUALITÄTSVERSPRECHEN</span>
                <Sparkles className="w-3.5 h-3.5 text-mustard-dark" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Strip with Social Proof */}
        <div className="relative bg-dark text-paper p-8 sm:p-12 rounded-2xl border-4 border-dark shadow-brutal-lg">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-white/10">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center text-center ${
                  idx > 0 && idx % 2 === 0 ? 'pt-6 lg:pt-0' : idx > 0 ? 'pt-6 sm:pt-0' : ''
                } ${idx > 0 ? 'lg:pl-8' : ''}`}
              >
                <div className="flex items-center gap-1">
                  <span className="font-display font-black text-5xl sm:text-6xl text-mustard tracking-tight">
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="font-display font-black text-3xl sm:text-4xl text-ketchup">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <span className="mt-1 text-xs sm:text-sm font-mono tracking-wider uppercase text-paper/70 font-semibold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Customer Quote Sticker */}
          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="flex text-mustard">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-mustard" />
                ))}
              </div>
              <p className="text-sm font-body text-paper/90 italic">
                „{siteConfig.socialProof.quote}“
              </p>
            </div>
            <a
              href={siteConfig.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-wider text-mustard hover:text-mustard-light underline shrink-0"
            >
              Google Rezensionen lesen →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
