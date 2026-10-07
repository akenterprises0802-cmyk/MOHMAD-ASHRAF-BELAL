import React from 'react';

interface GloziyoLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textClassName?: string;
  variant?: 'dark' | 'light';
}

export const GloziyoLogo: React.FC<GloziyoLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  textClassName = '',
  variant = 'dark',
}) => {
  // Dimensions for emblem
  const dimMap = {
    sm: { w: 32, h: 36, textSize: 'text-base', subSize: 'text-[9px]' },
    md: { w: 42, h: 48, textSize: 'text-xl', subSize: 'text-[10px]' },
    lg: { w: 56, h: 64, textSize: 'text-2xl', subSize: 'text-xs' },
    xl: { w: 72, h: 82, textSize: 'text-3xl', subSize: 'text-sm' },
  };

  const dim = dimMap[size];
  const textColor = variant === 'light' ? 'text-white' : 'text-[#0B1E48]';
  const subColor = variant === 'light' ? 'text-sky-300' : 'text-sky-700';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* SVG Emblem: Blue Water Droplet & Green Eco Leaf with sparkles */}
      <svg
        width={dim.w}
        height={dim.h}
        viewBox="0 0 100 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        aria-label="Gloziyo Logo Emblem"
      >
        <defs>
          {/* Blue water droplet gradient */}
          <linearGradient id="dropBlueGrad" x1="20" y1="5" x2="90" y2="95" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="35%" stopColor="#2563EB" />
            <stop offset="70%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#0B1E48" />
          </linearGradient>

          {/* Cyan water wave highlight */}
          <linearGradient id="cyanWaveGrad" x1="40" y1="10" x2="80" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#BAE6FD" />
            <stop offset="60%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>

          {/* Green eco leaf gradient */}
          <linearGradient id="leafGreenGrad" x1="10" y1="35" x2="65" y2="95" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#A3E635" />
            <stop offset="40%" stopColor="#4ADE80" />
            <stop offset="85%" stopColor="#16A34A" />
            <stop offset="100%" stopColor="#14532D" />
          </linearGradient>

          {/* Inner leaf vein highlight */}
          <linearGradient id="veinHighlight" x1="18" y1="45" x2="55" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#D9F99D" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#22C55E" stopOpacity="0.2" />
          </linearGradient>

          {/* Soft shadow */}
          <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Ambient sparkle dots */}
        <circle cx="16" cy="40" r="1.5" fill="#15803D" opacity="0.6" />
        <circle cx="8" cy="48" r="2" fill="#047857" opacity="0.7" />
        <circle cx="20" cy="55" r="1.2" fill="#15803D" opacity="0.5" />
        <circle cx="85" cy="20" r="1.8" fill="#1D4ED8" opacity="0.6" />
        <circle cx="92" cy="32" r="1.4" fill="#0369A1" opacity="0.5" />

        {/* Main Droplet Body (Right / Blue Wave) */}
        <path
          d="M50 4C50 4 72 28 82 45C91 60 92 74 84 86C76 98 62 101 50 101C38 101 24 98 16 86C14 83 13 80 12 77C18 84 32 88 45 82C62 74 68 53 60 36C56 28 50 20 50 4Z"
          fill="url(#dropBlueGrad)"
          filter="url(#softGlow)"
        />

        {/* Dynamic Water Swirl Wave (Upper Right) */}
        <path
          d="M50 12C50 12 66 30 73 44C78 54 75 66 68 73C74 64 73 50 67 40C62 31 53 21 50 12Z"
          fill="url(#cyanWaveGrad)"
        />

        {/* Secondary wave curve */}
        <path
          d="M56 22C62 33 66 43 64 52C63 56 60 60 56 63C61 57 62 49 59 42C56 34 52 26 56 22Z"
          fill="#E0F2FE"
          opacity="0.8"
        />

        {/* Green Eco Leaf (Lower Left half of droplet) */}
        <path
          d="M50 40C50 40 34 46 23 57C14 66 12 78 18 87C24 96 36 100 48 99C44 94 40 86 41 78C42 66 50 54 55 46C56 44 54 41 50 40Z"
          fill="url(#leafGreenGrad)"
          filter="url(#softGlow)"
        />

        {/* Leaf inner curve & natural highlight */}
        <path
          d="M26 62C34 54 44 50 50 48C46 56 42 65 42 75C42 81 44 87 47 92C37 92 28 88 23 81C19 75 20 67 26 62Z"
          fill="url(#veinHighlight)"
        />

        {/* Sparkle 4-point Stars (Signature Gloziyo cleanliness glints) */}
        {/* Top-right sparkle star */}
        <path
          d="M74 29L75.5 33L79.5 34.5L75.5 36L74 40L72.5 36L68.5 34.5L72.5 33L74 29Z"
          fill="#FFFFFF"
        />
        {/* Inside leaf sparkle star */}
        <path
          d="M34 66L35 69L38 70L35 71L34 74L33 71L30 70L33 69L34 66Z"
          fill="#FFFFFF"
        />
        {/* Small water reflection star */}
        <path
          d="M66 52L67 54L69 55L67 56L66 58L65 56L63 55L65 54L66 52Z"
          fill="#E0F2FE"
        />
      </svg>

      {/* Typography Wordmark (GLOZIYO / GLOZIYO SERVICES) */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-black tracking-[0.08em] uppercase ${textColor} ${dim.textSize}`}
            style={{ fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', sans-serif" }}
          >
            GLOZIYO
          </span>
          <span
            className={`font-bold tracking-[0.2em] uppercase mt-1 ${subColor} ${dim.subSize}`}
          >
            SERVICES
          </span>
        </div>
      )}
    </div>
  );
};
