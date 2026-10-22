import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, ImageOff, Sparkles } from 'lucide-react';

interface PhotoSlotProps {
  src: string;
  alt: string;
  label?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape' | 'banner' | 'auto';
  className?: string;
  priority?: boolean;
  enableParallax?: boolean;
  onClick?: () => void;
  badge?: string;
}

export const PhotoSlot: React.FC<PhotoSlotProps> = ({
  src,
  alt,
  label,
  aspectRatio = 'landscape',
  className = '',
  enableParallax = true,
  onClick,
  badge,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Parallax Setup
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], enableParallax ? ['-6%', '6%'] : ['0%', '0%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.05]);

  const aspectClassMap = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    banner: 'aspect-[21/9]',
    auto: '',
  };

  const displayLabel = label || alt || src.split('/').pop() || 'Foto';
  const fileName = src.split('/').pop() || src;

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      className={`relative overflow-hidden group select-none bg-dark-surface border border-dark-border rounded-xl ${aspectClassMap[aspectRatio]} ${className}`}
    >
      {/* Optional Badge */}
      {badge && (
        <div className="absolute top-3 left-3 z-20 pointer-events-none">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold font-display uppercase tracking-wider bg-mustard text-dark rounded border border-dark shadow-sm">
            <Sparkles className="w-3 h-3 text-ketchup" />
            {badge}
          </span>
        </div>
      )}

      {/* Actual Image Tag */}
      {!hasError && (
        <motion.div
          style={{ y: parallaxY, scale }}
          className="w-full h-full relative"
        >
          <img
            src={src}
            alt={alt}
            onError={() => setHasError(true)}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
            className={`w-full h-full object-cover transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-sm'
            }`}
          />
        </motion.div>
      )}

      {/* Elegant Fallback / Placeholder Box */}
      {(hasError || !isLoaded) && (
        <div
          className={`absolute inset-0 flex flex-col justify-between p-4 sm:p-5 transition-opacity duration-300 ${
            hasError ? 'opacity-100 z-10' : 'opacity-100 pointer-events-none'
          } bg-gradient-to-br from-[#1C1C1C] via-[#161616] to-[#0F0F0F] text-paper/80`}
        >
          {/* Subtle Halftone & Grid overlay */}
          <div className="absolute inset-0 bg-grain-dark opacity-30 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#F6B21B_0.75px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

          {/* Top Row: Slot ID */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-mono tracking-wider text-mustard bg-mustard/10 rounded border border-mustard/20">
              <Camera className="w-3 h-3" />
              SLOT: {fileName}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-paper/40">
              VUR BURGER PHOTO
            </span>
          </div>

          {/* Center: Stylized Food Icon & Label */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-3">
            <div className="w-12 h-12 rounded-full bg-dark/80 border border-white/10 flex items-center justify-center mb-2 shadow-inner group-hover:scale-105 transition-transform">
              <ImageOff className="w-5 h-5 text-mustard/70" />
            </div>
            <p className="font-display uppercase text-lg sm:text-xl tracking-wider text-paper">
              {displayLabel}
            </p>
            <p className="text-xs text-paper/60 max-w-[220px] font-sans mt-0.5 line-clamp-1">
              Ersetzen durch <span className="font-mono text-mustard/90">/public{src}</span>
            </p>
          </div>

          {/* Bottom Bar: Instructions */}
          <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/5 text-[10px] text-paper/40 font-mono">
            <span>{aspectRatio.toUpperCase()}</span>
            <span>DATEI WIRD ERWARTET</span>
          </div>
        </div>
      )}

      {/* Subtle hover gleam / vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};
