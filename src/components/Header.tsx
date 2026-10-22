import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageSquare, Phone, MapPin, Instagram, Clock, ExternalLink } from 'lucide-react';
import { siteConfig } from '../data/site';
import { getOpenStatus } from '../utils/hours';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openStatus, setOpenStatus] = useState(getOpenStatus());

  useEffect(() => {
    // Aktualisiere Öffnungsstatus jede Minute
    const interval = setInterval(() => {
      setOpenStatus(getOpenStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hintergrundstyling ab 20px
      setIsScrolled(currentScrollY > 20);

      // Verstecke Header beim Runterscrollen (>100px), zeige beim Hochscrollen
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 5) {
          setIsVisible(false);
        } else if (lastScrollY - currentScrollY > 5) {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Sperre Body-Scroll bei geöffnetem Mobile Menu
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Klassiker', href: '#klassiker' },
    { label: 'Speisekarte', href: '#speisekarte' },
    { label: 'Warum VUR', href: '#warum-vur' },
    { label: 'Küche & Galerie', href: '#galerie' },
    { label: 'Öffnungszeiten & Ort', href: '#kontakt' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-dark/95 backdrop-blur-md border-b border-dark-border py-3 shadow-xl'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="VUR Burger Startseite"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-ketchup text-paper flex items-center justify-center font-display font-black text-2xl rounded border-2 border-paper group-hover:rotate-[-4deg] transition-transform shadow-brutal">
              V
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-2xl sm:text-3xl tracking-tight text-paper leading-none">
                VUR <span className="text-mustard">BURGER</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-paper/60 uppercase">
                Germersheim
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold tracking-wide uppercase text-paper/85 hover:text-mustard transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-mustard hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Status Pill + WhatsApp Button + Mobile Burger */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Live Status indicator on Desktop */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-dark-card border border-dark-border text-xs font-mono">
              <span
                className={`w-2 h-2 rounded-full ${
                  openStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-ketchup'
                }`}
              />
              <span className={openStatus.isOpen ? 'text-emerald-400 font-bold' : 'text-paper/70'}>
                {openStatus.statusLabel}
              </span>
            </div>

            {/* WhatsApp CTA Button */}
            <a
              href={`${siteConfig.contact.whatsappBaseUrl}?text=${encodeURIComponent(
                siteConfig.contact.whatsappDefaultMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-display uppercase tracking-wider font-bold bg-mustard hover:bg-mustard-hover text-dark rounded-md border-2 border-dark shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-dark text-dark" />
              <span>Bestellen</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-paper hover:text-mustard focus:outline-none border border-dark-border rounded-md bg-dark-surface"
              aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-dark flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto lg:hidden"
          >
            {/* Background grain texture */}
            <div className="absolute inset-0 bg-grain-dark opacity-30 pointer-events-none" />

            {/* Navigation Links */}
            <div className="relative z-10 flex flex-col gap-5 pt-4">
              <span className="text-xs font-mono uppercase tracking-widest text-mustard border-b border-dark-border pb-2">
                Navigation
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * idx, duration: 0.3 }}
                  className="font-display text-4xl sm:text-5xl uppercase tracking-wide text-paper hover:text-mustard flex items-center justify-between border-b border-white/5 pb-3 group"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-paper/40 group-hover:text-mustard group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Quick Contact & Info Card inside mobile overlay */}
            <div className="relative z-10 mt-8 pt-6 border-t border-dark-border flex flex-col gap-4">
              <div className="flex items-center gap-3 text-xs font-mono text-paper/80">
                <Clock className="w-4 h-4 text-mustard shrink-0" />
                <span>
                  Status:{' '}
                  <strong className={openStatus.isOpen ? 'text-emerald-400' : 'text-ketchup'}>
                    {openStatus.statusLabel}
                  </strong>{' '}
                  ({openStatus.detail})
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-paper/80">
                <MapPin className="w-4 h-4 text-mustard shrink-0" />
                <span>{siteConfig.contact.address.full}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={siteConfig.contact.phone}
                  className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded bg-dark-card border border-dark-border text-paper text-xs font-bold uppercase tracking-wider hover:border-mustard transition-colors"
                >
                  <Phone className="w-4 h-4 text-mustard" />
                  <span>Anrufen</span>
                </a>
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded bg-dark-card border border-dark-border text-paper text-xs font-bold uppercase tracking-wider hover:border-mustard transition-colors"
                >
                  <Instagram className="w-4 h-4 text-mustard" />
                  <span>Instagram</span>
                </a>
              </div>

              <a
                href={`${siteConfig.contact.whatsappBaseUrl}?text=${encodeURIComponent(
                  siteConfig.contact.whatsappDefaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 px-4 bg-ketchup text-paper font-display text-lg uppercase tracking-wider rounded border-2 border-dark shadow-brutal flex items-center justify-center gap-2 text-center"
              >
                <MessageSquare className="w-5 h-5 fill-paper" />
                <span>Per WhatsApp bestellen</span>
                <ExternalLink className="w-4 h-4 opacity-75" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
