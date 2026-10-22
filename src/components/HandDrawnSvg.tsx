import React from 'react';

export const UnderlineSvg: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-full h-3',
  color = 'currentColor',
}) => (
  <svg
    viewBox="0 0 240 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    preserveAspectRatio="none"
  >
    <path
      d="M3 13.5C45.2 6.8 132.8 3.2 237 11.2C188.5 7.5 101.5 9 12 16.5"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HandArrowSvg: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-16 h-16',
  color = 'currentColor',
}) => (
  <svg
    viewBox="0 0 100 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M10 60C30 55 55 45 75 25C80 20 85 15 88 12"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M65 14L88 12L85 35"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const StarStampSvg: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="50" cy="50" r="44" stroke="#D62828" strokeWidth="3" strokeDasharray="6 4" />
    <path
      d="M50 20L58 37L77 39L63 52L67 71L50 61L33 71L37 52L23 39L42 37L50 20Z"
      fill="#F6B21B"
      stroke="#121212"
      strokeWidth="2"
    />
  </svg>
);

export const StampBadge: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => (
  <div
    className={`inline-flex items-center justify-center p-3 border-2 border-dashed border-ketchup/80 rounded-full rotate-[-8deg] uppercase font-display tracking-widest text-xs font-black text-ketchup bg-paper-light/95 shadow-sm ${className}`}
  >
    <div className="w-16 h-16 rounded-full border border-ketchup flex items-center justify-center text-center p-1 leading-tight">
      {text}
    </div>
  </div>
);
