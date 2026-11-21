import React from 'react';

interface ChiliLogoProps {
  size?: number | string;
  className?: string;
  showBadge?: boolean;
  glow?: boolean;
}

export const ChiliLogo: React.FC<ChiliLogoProps> = ({
  size = 32,
  className = '',
  showBadge = true,
  glow = true,
}) => {
  // Use unique ID prefix to prevent SVG defs collision when multiple icons are rendered
  const id = React.useId().replace(/:/g, '');

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block flex-shrink-0 select-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Background disc gradient */}
        <linearGradient id={`discBg-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#241E1A" />
          <stop offset="100%" stopColor="#120F0D" />
        </linearGradient>

        {/* Warm gold & amber metallic rim */}
        <linearGradient id={`goldRim-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7C978" />
          <stop offset="40%" stopColor="#D66B32" />
          <stop offset="80%" stopColor="#B52A1D" />
          <stop offset="100%" stopColor="#E5A93C" />
        </linearGradient>

        {/* Interior ember glow */}
        <radialGradient id={`emberGlow-${id}`} cx="48%" cy="52%" r="48%">
          <stop offset="0%" stopColor="#E52E20" stopOpacity="0.32" />
          <stop offset="55%" stopColor="#D66B32" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#120F0D" stopOpacity="0" />
        </radialGradient>

        {/* Rich chili red gradient */}
        <linearGradient id={`chiliGrad-${id}`} x1="15%" y1="10%" x2="85%" y2="95%">
          <stop offset="0%" stopColor="#FF4D2D" />
          <stop offset="35%" stopColor="#E52414" />
          <stop offset="75%" stopColor="#A51408" />
          <stop offset="100%" stopColor="#670A02" />
        </linearGradient>

        {/* Glossy reflection */}
        <linearGradient id={`shineGrad-${id}`} x1="20%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#FFF3B0" stopOpacity="0.9" />
          <stop offset="45%" stopColor="#FF7A45" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FF2A14" stopOpacity="0" />
        </linearGradient>

        {/* Fresh green stem & calyx gradient */}
        <linearGradient id={`stemGrad-${id}`} x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#68D391" />
          <stop offset="40%" stopColor="#38A169" />
          <stop offset="80%" stopColor="#22543D" />
          <stop offset="100%" stopColor="#1A3628" />
        </linearGradient>

        {/* Dynamic drop shadow */}
        <filter id={`shadow-${id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="3" floodColor="#000000" floodOpacity="0.7" />
          {glow && (
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#E52E20" floodOpacity="0.45" />
          )}
        </filter>
      </defs>

      {/* Emblem Background Disc (when showBadge is true) */}
      {showBadge && (
        <g>
          <circle
            cx="50"
            cy="50"
            r="46"
            fill={`url(#discBg-${id})`}
            stroke={`url(#goldRim-${id})`}
            strokeWidth="2.5"
          />
          <circle
            cx="50"
            cy="50"
            r="41"
            fill="none"
            stroke="#D8C7AC"
            strokeOpacity="0.15"
            strokeWidth="0.8"
            strokeDasharray="2 2"
          />
          <circle cx="50" cy="50" r="44" fill={`url(#emberGlow-${id})`} />
        </g>
      )}

      {/* Chili Figure */}
      <g filter={`url(#shadow-${id})`}>
        {/* Main Chili Pepper Body */}
        <path
          d="M 54 28 C 63 32, 68 43, 65 55 C 62 67, 52 76, 40 81 C 36.5 82.2, 33.5 81, 33 78 C 32.5 75, 35 71, 39 67 C 45 61, 48 51, 47 42 C 46.5 35, 43 30, 41 27.5 C 45 26.5, 50 26.8, 54 28 Z"
          fill={`url(#chiliGrad-${id})`}
        />

        {/* Glossy Highlight Contour */}
        <path
          d="M 53 31 C 60 35, 63.5 44, 61 54 C 58 63, 50 71, 41 75.5 C 43.5 72, 49 66.5, 52 58 C 55 49, 53 39, 49 32.5 C 50.5 31.8, 51.8 31.3, 53 31 Z"
          fill={`url(#shineGrad-${id})`}
        />

        {/* Secondary Soft Warmth */}
        <path
          d="M 37 66 C 34.5 69, 34 73, 34.8 75.5 C 36.5 75.8, 39 74.5, 42 71 C 40 70, 38.5 68, 37 66 Z"
          fill="#FF7A45"
          opacity="0.4"
        />

        {/* Green Calyx / Cap */}
        <path
          d="M 39 27 C 42 28.5, 44 26, 47 26.5 C 50 27, 51.5 28.5, 54.5 28 C 56 27.8, 57.5 29, 57 30.5 C 54.5 31.5, 52 30, 49 32 C 46 30.5, 43 31.5, 40 30 C 38.5 29.2, 38 27.8, 39 27 Z"
          fill={`url(#stemGrad-${id})`}
        />

        {/* Curved Stem */}
        <path
          d="M 47 26.5 C 46 20, 42 14.5, 35 12 C 33.8 11.6, 34.5 10.2, 36 10.5 C 43.5 12, 49 17.5, 50 26.5 Z"
          fill={`url(#stemGrad-${id})`}
        />

        {/* Fresh Little Leaf */}
        <path d="M 42 17 C 38 15, 36 18, 39 19.5 C 41 20.5, 43 19, 42 17 Z" fill="#68D391" />

        {/* Decorative Culinary Star Sparkle */}
        <path
          d="M 68 22 Q 70.5 22, 70.5 19.5 Q 70.5 22, 73 22 Q 70.5 22, 70.5 24.5 Q 70.5 22, 68 22 Z"
          fill="#F7C978"
        />

        {/* Small Golden Glow Dots */}
        <circle cx="28" cy="40" r="1.5" fill="#F7C978" opacity="0.65" />
        <circle cx="71" cy="46" r="1.2" fill="#D66B32" opacity="0.5" />
      </g>
    </svg>
  );
};

export default ChiliLogo;
