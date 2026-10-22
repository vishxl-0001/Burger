import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Loader } from './components/Loader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { Classics } from './components/Classics';
import { Menu } from './components/Menu';
import { Values } from './components/Values';
import { Gallery } from './components/Gallery';
import { OrderCta } from './components/OrderCta';
import { FindUs } from './components/FindUs';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LegalModal } from './components/LegalModal';

export const App: React.FC = () => {
  const [introFinished, setIntroFinished] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [activeLegalTab, setActiveLegalTab] = useState<'impressum' | 'datenschutz'>('impressum');

  const footerRef = useRef<HTMLElement>(null);

  // Smooth Scrolling mit Lenis initialisieren
  useEffect(() => {
    // Falls prefers-reduced-motion aktiv ist, kein smoothed scroll
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const handleOpenLegal = (tab: 'impressum' | 'datenschutz') => {
    setActiveLegalTab(tab);
    setLegalModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-dark text-paper overflow-x-hidden selection:bg-ketchup selection:text-paper font-body">
      {/* 1. Loader / Intro Slam (Max ~1.2s, skippable) */}
      {!introFinished && (
        <Loader onComplete={() => setIntroFinished(true)} />
      )}

      {/* 2. Sticky Header */}
      <Header />

      <main className="relative">
        {/* 3. Hero Section */}
        <Hero />

        {/* 4. Marquee Ticker Strip */}
        <MarqueeTicker />

        {/* 5. Unsere Klassiker (Highlights) */}
        <Classics />

        {/* 6. Speisekarte (Receipt / Ticket Style) */}
        <Menu />

        {/* 7. Warum VUR (Werte & Stats) */}
        <Values />

        {/* 8. Aus der Küche (Galerie mit Lightbox) */}
        <Gallery />

        {/* 9. Bestellen CTA Block */}
        <OrderCta />

        {/* 10. Standort & Öffnungszeiten */}
        <FindUs />
      </main>

      {/* 11. Footer */}
      <Footer ref={footerRef} onOpenLegal={handleOpenLegal} />

      {/* 12. Floating WhatsApp Button (Mobile bottom-right, hides over footer) */}
      <FloatingWhatsApp footerRef={footerRef} />

      {/* Impressum & Datenschutz Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        activeTab={activeLegalTab}
        onClose={() => setLegalModalOpen(false)}
        onTabChange={setActiveLegalTab}
      />
    </div>
  );
};

export default App;
