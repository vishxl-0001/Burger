import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Utensils, Star, MapPin, ArrowDown } from 'lucide-react';
import { siteConfig } from '../data/site';
import { getOpenStatus } from '../utils/hours';
import { PhotoSlot } from './PhotoSlot';
import { UnderlineSvg, HandArrowSvg } from './HandDrawnSvg';

export const Hero: React.FC = () => {
  const [openStatus, setOpenStatus] = useState(getOpenStatus());

  useEffect(() => {
    const timer = setInterval(() => setOpenStatus(getOpenStatus()), 60000);
    return () => clearInterval(timer);
  }, []);

  const scrollToMenu = () => {
    document.querySelector('#speisekarte')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden bg-dark">
      {/* Background Ambience: Grain & Subtle Warm Radial Light */}
      <div className="absolute inset-0 bg-grain-dark opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-ketchup/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-mustard/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Typography, Badges, CTAs (Cols 1-7) */}
        <div className="lg:col-span-7 flex flex-col items-start">
          
          {/* Top Info Bar: Location & Live Open Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2.5 mb-5"
          >
            {/* Open / Closed Live Status */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border ${
                openStatus.isOpen
                  ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300'
                  : 'bg-ketchup/15 border-ketchup/40 text-ketchup'
              }`}
            >
              <span
                className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                  openStatus.isOpen ? 'bg-emerald-400 animate-ping' : 'bg-ketchup'
                }`}
              />
              <span className="font-bold">{openStatus.statusLabel}</span>
              <span className="text-paper/40 hidden xs:inline">•</span>
              <span className="text-paper/70 text-[11px] hidden xs:inline">{openStatus.detail}</span>
            </div>

            {/* Address Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-dark-card border border-dark-border text-paper/80">
              <MapPin className="w-3.5 h-3.5 text-mustard" />
              <span>Germersheim</span>
            </div>
          </motion.div>

          {/* Giant Stacked Street-Food Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full"
          >
            <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.88] text-paper uppercase select-none">
              <span className="block text-paper">BURGER.</span>
              <span className="block text-mustard">POMMES.</span>
              <span className="block text-ketchup relative inline-block">
                FERTIG.
                <UnderlineSvg
                  className="absolute -bottom-2 sm:-bottom-4 left-0 w-full h-3 sm:h-5 text-mustard"
                  color="#F6B21B"
                />
              </span>
            </h1>
          </motion.div>

          {/* Subtitle & Local Anchor */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 sm:mt-8 text-base sm:text-xl text-paper/85 max-w-xl font-body leading-relaxed"
          >
            {siteConfig.brand.subtitle}{' '}
            <span className="text-paper font-semibold block sm:inline mt-1 sm:mt-0">
              Kein Firlefanz. 100% Geschmack direkt auf die Hand.
            </span>
          </motion.p>

          {/* CTAs with Arrow Accents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-col xs:flex-row items-stretch xs:items-center gap-4 w-full xs:w-auto relative"
          >
            {/* WhatsApp Order Button */}
            <a
              href={`${siteConfig.contact.whatsappBaseUrl}?text=${encodeURIComponent(
                siteConfig.contact.whatsappDefaultMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 text-base sm:text-lg font-display uppercase tracking-wider font-black bg-ketchup hover:bg-ketchup-hover text-paper rounded-lg border-2 border-dark shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all active:scale-95 group text-center"
            >
              <MessageSquare className="w-5 h-5 fill-paper transition-transform group-hover:rotate-12" />
              <span>Jetzt per WhatsApp bestellen</span>
            </a>

            {/* Menu Button */}
            <button
              onClick={scrollToMenu}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base sm:text-lg font-display uppercase tracking-wider font-bold bg-dark-card hover:bg-dark-surface text-paper rounded-lg border-2 border-dark-border hover:border-mustard transition-colors text-center"
            >
              <Utensils className="w-5 h-5 text-mustard" />
              <span>Speisekarte</span>
            </button>

            {/* Hand-drawn arrow pointing to order (Desktop only) */}
            <div className="hidden xl:block absolute -right-28 -top-8 pointer-events-none text-mustard">
              <HandArrowSvg className="w-20 h-16 rotate-12" color="#F6B21B" />
              <span className="font-hand text-sm text-mustard-light font-bold block -mt-2 -rotate-6">
                hier vorbestellen!
              </span>
            </div>
          </motion.div>

          {/* Quick Info Points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-mono text-paper/60"
          >
            <span className="flex items-center gap-1.5">
              <span className="text-mustard">✓</span> Vor Ort abholen
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-mustard">✓</span> Schnelle Zubereitung
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-mustard">✓</span> Münchener Str. 14
            </span>
          </motion.div>
        </div>

        {/* Right Column: Hero Photo Slot with Tilted Social Proof Sticker (Cols 8-12) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative mt-4 lg:mt-0"
        >
          {/* Main Hero Photo Slot */}
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Brutalist offset decorative back-card */}
            <div className="absolute inset-0 bg-ketchup translate-x-3 translate-y-3 rounded-2xl border-2 border-dark" />
            <div className="absolute -inset-1 bg-gradient-to-r from-mustard via-ketchup to-mustard rounded-2xl opacity-30 blur-sm pointer-events-none" />

            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-paper/20 shadow-2xl">
              <PhotoSlot
                src="/images/hero-burger.jpg"
                alt="VUR Burger Spezialität"
                label="Hero Burger Frisch Vom Grill"
                aspectRatio="portrait"
                className="w-full sm:min-h-[440px]"
                badge="VUR SIGNATURE"
              />
            </div>

            {/* Tilted Floating Social Proof Sticker */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [-4, -2, -4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-6 -left-4 sm:-left-8 z-20 bg-paper text-dark p-3 sm:p-4 rounded-xl border-3 border-dark shadow-brutal-lg max-w-[210px] sm:max-w-[240px] cursor-default select-none"
            >
              <div className="flex items-center gap-1 text-ketchup mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-ketchup" />
                ))}
                <span className="font-display font-black text-dark text-base sm:text-lg ml-1">
                  5,0 ★
                </span>
              </div>
              <p className="font-display text-xs sm:text-sm uppercase tracking-wide font-black text-dark leading-tight">
                55 Google-Bewertungen
              </p>
              <p className="font-hand text-xs text-ketchup font-bold mt-1 leading-tight">
                „Bester Burger im ganzen Umkreis!“
              </p>
            </motion.div>

            {/* Top Right Stamp */}
            <div className="absolute -top-5 -right-3 z-20 bg-mustard text-dark py-1.5 px-3 rounded-md border-2 border-dark shadow-brutal rotate-6 font-display font-black text-xs uppercase tracking-wider">
              100% Frisch Gegrillt
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Subtle Scroll Down Indicator */}
      <div className="hidden md:flex justify-center mt-12 text-paper/30 hover:text-mustard transition-colors">
        <button
          onClick={scrollToMenu}
          className="flex flex-col items-center gap-1 text-xs font-mono uppercase tracking-widest"
          aria-label="Nach unten scrollen"
        >
          <span>Entdecken</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-mustard" />
        </button>
      </div>
    </section>
  );
};
