import React from 'react';
import { MapPin, Clock, Instagram, Navigation, ExternalLink } from 'lucide-react';
import { siteConfig } from '../data/site';
import { getOpenStatus } from '../utils/hours';
import { PhotoSlot } from './PhotoSlot';
import { UnderlineSvg } from './HandDrawnSvg';

export const FindUs: React.FC = () => {
  const currentStatus = getOpenStatus();
  const currentDayIndex = currentStatus.todaySchedule?.dayIndex ?? new Date().getDay();

  return (
    <section id="kontakt" className="relative py-20 sm:py-28 bg-dark text-paper overflow-hidden">
      {/* Background grain */}
      <div className="absolute inset-0 bg-grain-dark opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-dark-card border border-dark-border text-xs font-mono uppercase tracking-widest text-mustard mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>Hier findest du uns</span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-paper leading-none">
              STANDORT & <span className="text-mustard">ZEITEN</span>
            </h2>
            <div className="w-36 mt-2">
              <UnderlineSvg className="w-full h-3 text-ketchup" color="#D62828" />
            </div>
          </div>
          <p className="mt-4 md:mt-0 text-paper/70 max-w-md font-body text-base sm:text-lg">
            Zentral in Germersheim gelegen mit schnellen Park- und Abholmöglichkeiten direkt vor Ort.
          </p>
        </div>

        {/* Content Grid: Left Hours Table & Contact, Right Stylized Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Hours Table & Contact Details (Cols 1-6) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Opening Hours Table Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-surface border-2 border-dark-border">
              <div className="flex items-center justify-between pb-4 border-b border-dark-border">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-mustard" />
                  <h3 className="font-display font-black text-2xl uppercase tracking-wide text-paper">
                    Öffnungszeiten
                  </h3>
                </div>
                <span
                  className={`text-xs font-mono px-2.5 py-1 rounded-full border ${
                    currentStatus.isOpen
                      ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-400 font-bold'
                      : 'bg-ketchup/20 border-ketchup/40 text-ketchup'
                  }`}
                >
                  {currentStatus.statusLabel}
                </span>
              </div>

              {/* Hours Rows */}
              <div className="mt-4 flex flex-col divide-y divide-white/5 text-sm font-mono">
                {siteConfig.openingHours.map((hour) => {
                  const isToday = hour.dayIndex === currentDayIndex;

                  return (
                    <div
                      key={hour.dayName}
                      className={`py-2.5 px-3 rounded flex items-center justify-between transition-colors ${
                        isToday
                          ? 'bg-mustard/15 text-mustard font-bold border-l-4 border-mustard'
                          : 'text-paper/80 hover:text-paper'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{hour.dayName}</span>
                        {isToday && (
                          <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-mustard text-dark font-black">
                            Heute
                          </span>
                        )}
                      </div>
                      <span className="font-sans font-semibold">
                        {hour.isClosed ? 'Geschlossen' : `${hour.open} – ${hour.close} Uhr`}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Notice note regarding verification */}
              <p className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-paper/40 italic">
                * An Feiertagen können die Zeiten abweichen. Vorab-Bestellungen jederzeit per WhatsApp möglich.
              </p>
            </div>

            {/* Quick Contact & Address Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={siteConfig.contact.googleDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-dark-card border border-dark-border hover:border-mustard transition-colors flex items-start gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-mustard/15 text-mustard flex items-center justify-center shrink-0">
                  <Navigation className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-paper/50 block">Adresse</span>
                  <span className="font-display font-bold text-lg text-paper leading-tight block">
                    {siteConfig.contact.address.street}
                  </span>
                  <span className="text-xs text-paper/70 font-mono">
                    {siteConfig.contact.address.zip} {siteConfig.contact.address.city}
                  </span>
                </div>
              </a>

              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-dark-card border border-dark-border hover:border-mustard transition-colors flex items-start gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-ketchup/15 text-ketchup flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-paper/50 block">Instagram</span>
                  <span className="font-display font-bold text-lg text-paper leading-tight block">
                    {siteConfig.contact.instagramHandle}
                  </span>
                  <span className="text-xs text-mustard font-mono flex items-center gap-1 mt-0.5">
                    Folgen & Stories ansehen →
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Embedded-Look Map & Location Photo (Cols 7-12) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden border-3 border-dark-border bg-dark-card shadow-2xl flex flex-col">
              
              {/* Top Map Card Header */}
              <div className="p-4 bg-dark-surface border-b border-dark-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-ketchup" />
                  <span className="w-3 h-3 rounded-full bg-mustard" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="ml-2 font-mono text-xs text-paper/60">
                    germersheim_map_view.gpx
                  </span>
                </div>
                <span className="text-[11px] font-mono text-mustard uppercase font-bold">
                  Münchener Str. 14
                </span>
              </div>

              {/* Location Photo Slot (representing the spot / exterior) */}
              <div className="relative">
                <PhotoSlot
                  src="/images/location.jpg"
                  alt="VUR Burger Standort Germersheim"
                  label="VUR Burger Vor Ort"
                  aspectRatio="video"
                  className="w-full sm:min-h-[280px]"
                />

                {/* Map Interactive Pin Overlay */}
                <a
                  href={siteConfig.contact.googleDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-dark/40 backdrop-blur-[1px] hover:backdrop-blur-0 transition-all flex flex-col items-center justify-center p-6 text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-ketchup text-paper border-3 border-dark flex items-center justify-center shadow-brutal group-hover:scale-110 transition-transform">
                    <MapPin className="w-8 h-8 fill-paper" />
                  </div>
                  <span className="font-display font-black text-2xl uppercase tracking-wider text-paper mt-3 drop-shadow-md">
                    In Google Maps öffnen
                  </span>
                  <span className="text-xs font-mono text-mustard bg-dark/80 px-3 py-1 rounded-full border border-mustard/40 mt-1 inline-flex items-center gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5" />
                    Route direkt starten
                  </span>
                </a>
              </div>

              {/* Map Footer: Directions summary */}
              <div className="p-5 bg-dark-surface flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs font-mono text-paper/70">
                  <span>Parkmöglichkeiten direkt vor Ort vorhanden.</span>
                </div>
                <a
                  href={siteConfig.contact.googleDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-mustard hover:bg-mustard-hover text-dark font-display uppercase tracking-wider font-bold text-xs rounded border border-dark shadow-sm shrink-0 flex items-center gap-2"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Route berechnen</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
