import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/site';

interface FloatingWhatsAppProps {
  footerRef: React.RefObject<HTMLElement>;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ footerRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOverFooter, setIsOverFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Zeigen nach 350px Scroll
      const show = window.scrollY > 350;
      setIsVisible(show);

      // Prüfe Kollision mit dem Footer
      if (footerRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Wenn Footer oben in Sichtweite kommt (weniger als 90px Abstand zum unteren Rand)
        if (footerRect.top <= windowHeight - 20) {
          setIsOverFooter(true);
        } else {
          setIsOverFooter(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [footerRef]);

  return (
    <AnimatePresence>
      {isVisible && !isOverFooter && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-6 right-5 sm:right-6 z-40"
        >
          <a
            href={`${siteConfig.contact.whatsappBaseUrl}?text=${encodeURIComponent(
              siteConfig.contact.whatsappDefaultMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Per WhatsApp bestellen"
            className="group flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 bg-mustard hover:bg-mustard-hover text-dark font-display font-black text-sm sm:text-base uppercase tracking-wider rounded-full border-3 border-dark shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all active:scale-95"
          >
            <div className="relative">
              <MessageSquare className="w-5 h-5 fill-dark text-dark" />
              {/* Pulsing online badge */}
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-dark animate-pulse" />
            </div>
            <span>WhatsApp Bestellen</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
