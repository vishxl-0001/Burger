import { forwardRef } from 'react';
import { MessageSquare, Phone, Instagram, MapPin, ArrowUp } from 'lucide-react';
import { siteConfig } from '../data/site';

interface FooterProps {
  onOpenLegal: (tab: 'impressum' | 'datenschutz') => void;
}

export const Footer = forwardRef<HTMLElement, FooterProps>(({ onOpenLegal }, ref) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={ref}
      className="relative bg-black text-paper pt-20 pb-28 sm:pb-20 px-4 sm:px-6 lg:px-8 border-t-4 border-dark-border overflow-hidden"
    >
      {/* Background grain */}
      <div className="absolute inset-0 bg-grain-dark opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Row: Brand & Back to Top */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <span className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-paper">
              VUR <span className="text-mustard">BURGER</span>
            </span>
            <p className="text-sm font-mono text-paper/60 uppercase tracking-widest mt-1">
              Burger. Pommes. Fertig. • Germersheim
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-card border border-white/10 text-xs font-mono uppercase tracking-wider text-paper/80 hover:text-mustard hover:border-mustard transition-colors"
          >
            <span>Nach oben</span>
            <ArrowUp className="w-4 h-4 text-mustard" />
          </button>
        </div>

        {/* Middle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12 border-b border-white/10">
          {/* Col 1: Address & Hours */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-mustard font-bold">
              Standort
            </span>
            <p className="font-display text-xl text-paper">
              {siteConfig.contact.address.street}
            </p>
            <p className="text-sm text-paper/70 font-mono">
              {siteConfig.contact.address.zip} {siteConfig.contact.address.city}
            </p>
            <a
              href={siteConfig.contact.googleDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-mustard hover:underline mt-2 inline-flex items-center gap-1"
            >
              <MapPin className="w-3.5 h-3.5" />
              Route in Google Maps →
            </a>
          </div>

          {/* Col 2: Direct Contact */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-mustard font-bold">
              Bestellung & Kontakt
            </span>
            <a
              href={`${siteConfig.contact.whatsappBaseUrl}?text=${encodeURIComponent(
                siteConfig.contact.whatsappDefaultMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono text-paper hover:text-mustard transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-mustard" />
              <span>WhatsApp: {siteConfig.contact.phoneDisplay}</span>
            </a>
            <a
              href={siteConfig.contact.phone}
              className="text-sm font-mono text-paper hover:text-mustard transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-mustard" />
              <span>Telefon: {siteConfig.contact.phoneDisplay}</span>
            </a>
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono text-paper hover:text-mustard transition-colors flex items-center gap-2"
            >
              <Instagram className="w-4 h-4 text-mustard" />
              <span>Instagram: {siteConfig.contact.instagramHandle}</span>
            </a>
          </div>

          {/* Col 3: Navigation */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-mustard font-bold">
              Übersicht
            </span>
            <a href="#klassiker" className="text-sm text-paper/80 hover:text-mustard transition-colors">
              Unsere Klassiker
            </a>
            <a href="#speisekarte" className="text-sm text-paper/80 hover:text-mustard transition-colors">
              Komplette Speisekarte
            </a>
            <a href="#warum-vur" className="text-sm text-paper/80 hover:text-mustard transition-colors">
              Qualitätsversprechen
            </a>
            <a href="#galerie" className="text-sm text-paper/80 hover:text-mustard transition-colors">
              Aus der Küche
            </a>
          </div>

          {/* Col 4: Rating badge */}
          <div className="flex flex-col items-start gap-2 bg-dark-card p-5 rounded-xl border border-white/10">
            <span className="text-xs font-mono uppercase tracking-widest text-paper/60">
              Google Rezensionen
            </span>
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-3xl text-mustard">
                {siteConfig.socialProof.rating}
              </span>
              <span className="text-xs font-mono text-paper/80">
                ★★★★★ <br />
                {siteConfig.socialProof.reviewsCount} Bewertungen
              </span>
            </div>
            <p className="text-xs text-paper/60 font-body mt-1">
              Frisch zubereitete Burger & krosse Pommes mitten in Germersheim.
            </p>
          </div>
        </div>

        {/* Bottom Giant Graphic Wordmark */}
        <div className="pt-8 flex flex-col items-center justify-center">
          <div className="w-full text-center overflow-hidden py-4">
            <span className="font-display font-black text-[18vw] leading-none text-white/[0.04] select-none uppercase tracking-tighter block">
              VUR BURGER
            </span>
          </div>

          {/* Legal Bar */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-paper/50 pt-4">
            <div>
              © {new Date().getFullYear()} {siteConfig.brand.name}. Alle Rechte vorbehalten.
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() => onOpenLegal('impressum')}
                className="hover:text-mustard transition-colors uppercase tracking-wider"
              >
                Impressum
              </button>
              <button
                onClick={() => onOpenLegal('datenschutz')}
                className="hover:text-mustard transition-colors uppercase tracking-wider"
              >
                Datenschutz
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
