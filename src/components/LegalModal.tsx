import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldAlert } from 'lucide-react';
import { siteConfig } from '../data/site';

interface LegalModalProps {
  isOpen: boolean;
  activeTab: 'impressum' | 'datenschutz';
  onClose: () => void;
  onTabChange: (tab: 'impressum' | 'datenschutz') => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  activeTab,
  onClose,
  onTabChange,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const { impressum, privacy } = siteConfig.legal;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl max-h-[85vh] bg-paper text-dark rounded-2xl border-4 border-dark shadow-brutal-lg flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-5 sm:p-6 bg-dark text-paper flex items-center justify-between border-b-2 border-dark">
            <div className="flex items-center gap-2">
              <button
                onClick={() => onTabChange('impressum')}
                className={`px-4 py-2 rounded text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                  activeTab === 'impressum'
                    ? 'bg-mustard text-dark'
                    : 'bg-dark-surface text-paper/70 hover:text-paper'
                }`}
              >
                Impressum
              </button>
              <button
                onClick={() => onTabChange('datenschutz')}
                className={`px-4 py-2 rounded text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                  activeTab === 'datenschutz'
                    ? 'bg-mustard text-dark'
                    : 'bg-dark-surface text-paper/70 hover:text-paper'
                }`}
              >
                Datenschutz
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-paper hover:text-mustard focus:outline-none"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm font-body leading-relaxed bg-grain">
            {/* Notice Banner */}
            <div className="p-3 bg-mustard/20 border-l-4 border-mustard rounded text-xs font-mono text-dark flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-mustard-dark shrink-0 mt-0.5" />
              <span>
                <strong>Hinweis für den Betreiber:</strong> Bitte die mit gelben Markierungen versehenen Daten vor dem offiziellen Launch im Code anpassen (<code className="font-mono bg-white/50 px-1 py-0.5 rounded">src/data/site.ts</code>).
              </span>
            </div>

            {activeTab === 'impressum' ? (
              <div className="space-y-4">
                <h3 className="font-display font-black text-2xl uppercase tracking-wide text-dark">
                  Angaben gemäß § 5 TMG
                </h3>

                <div className="p-4 bg-white/70 rounded-lg border border-dark/10 space-y-2 font-mono text-xs">
                  <p>
                    <strong>Betreiber:</strong>{' '}
                    <span className="bg-mustard/30 px-1.5 py-0.5 rounded font-bold">
                      {impressum.operator}
                    </span>
                  </p>
                  <p>
                    <strong>Vertreten durch:</strong>{' '}
                    <span className="bg-mustard/30 px-1.5 py-0.5 rounded font-bold">
                      {impressum.owner}
                    </span>
                  </p>
                  <p>
                    <strong>Anschrift:</strong> {impressum.street}, {impressum.city}, {impressum.country}
                  </p>
                  <p>
                    <strong>Telefon:</strong> {impressum.phone}
                  </p>
                  <p>
                    <strong>E-Mail:</strong>{' '}
                    <span className="bg-mustard/30 px-1.5 py-0.5 rounded font-bold">
                      {impressum.email}
                    </span>
                  </p>
                  <p>
                    <strong>USt-IdNr.:</strong>{' '}
                    <span className="bg-mustard/30 px-1.5 py-0.5 rounded font-bold">
                      {impressum.taxId}
                    </span>
                  </p>
                  <p>
                    <strong>Registereintrag:</strong>{' '}
                    <span className="bg-mustard/30 px-1.5 py-0.5 rounded font-bold">
                      {impressum.register}
                    </span>
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-dark mb-1">Verbraucherstreitbeilegung</h4>
                  <p className="text-xs text-dark/80">{impressum.disclaimer}</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="font-display font-black text-2xl uppercase tracking-wide text-dark">
                  Datenschutzerklärung
                </h3>

                <div>
                  <h4 className="font-bold text-dark mb-1">1. Verantwortliche Stelle</h4>
                  <p className="text-xs text-dark/80">{privacy.responsible}</p>
                </div>

                <div>
                  <h4 className="font-bold text-dark mb-1">2. Datenerfassung auf dieser Webseite</h4>
                  <p className="text-xs text-dark/80">{privacy.dataCollection}</p>
                </div>

                <div>
                  <h4 className="font-bold text-dark mb-1">3. Externe Links (WhatsApp, Instagram, Google Maps)</h4>
                  <p className="text-xs text-dark/80">{privacy.externalLinks}</p>
                </div>

                <div>
                  <h4 className="font-bold text-dark mb-1">4. Kontaktaufnahme per WhatsApp / Telefon</h4>
                  <p className="text-xs text-dark/80">{privacy.contactNotice}</p>
                </div>
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="p-4 bg-paper-dark border-t border-dark/15 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 bg-dark text-paper text-xs font-mono font-bold uppercase tracking-wider rounded hover:bg-dark-surface transition-colors"
            >
              Schließen
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
