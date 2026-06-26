const S = '#8A7860'; // soft warm-gray stroke, not black

export default function CatSVG({ state = 'idle' }) {
  const eyesClosed = state === 'petting';

  return (
    <svg viewBox="0 0 120 180" width="108" height="162" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="cat-grain" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.055" numOctaves="3" seed="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      <g filter="url(#cat-grain)">
        {/* Tail */}
        <path d="M 88 145 Q 114 130 112 108 Q 110 90 96 98 Q 90 104 93 118"
              stroke="#C8C0B0" strokeWidth="13" fill="none" strokeLinecap="round" />
        <circle cx="92" cy="119" r="8" fill="#F0EBE0" stroke={S} strokeWidth="1" />

        {/* Body — round loaf */}
        <path d="M 18 144 Q 16 112 54 108 Q 92 108 96 138 Q 98 168 54 170 Q 12 168 18 144 Z"
              fill="#F4EFE4" stroke={S} strokeWidth="1.4" strokeLinejoin="round" />

        {/* Belly patch — slightly lighter */}
        <ellipse cx="54" cy="148" rx="26" ry="20" fill="#FAFAF4" stroke={S} strokeWidth="0.8" />

        {/* Tabby markings on back */}
        <path d="M 24 120 Q 30 116 40 120 Q 36 126 24 128 Z"
              fill="#D8CFC0" stroke={S} strokeWidth="0.7" strokeLinejoin="round" opacity="0.7" />
        <path d="M 70 112 Q 78 108 88 112 Q 84 120 70 122 Z"
              fill="#D8CFC0" stroke={S} strokeWidth="0.7" strokeLinejoin="round" opacity="0.7" />

        {/* Paws — front */}
        <ellipse cx="36" cy="166" rx="15" ry="9" fill="#F4EFE4" stroke={S} strokeWidth="1.2" />
        <ellipse cx="72" cy="166" rx="15" ry="9" fill="#F4EFE4" stroke={S} strokeWidth="1.2" />
        {/* Toe lines */}
        <path d="M 27 164 L 27 170 M 35 163 L 35 170 M 43 164 L 43 170" stroke={S} strokeWidth="1.1" strokeLinecap="round" fill="none" />
        <path d="M 63 164 L 63 170 M 71 163 L 71 170 M 79 164 L 79 170" stroke={S} strokeWidth="1.1" strokeLinecap="round" fill="none" />

        {/* Head — very round */}
        <circle cx="54" cy="78" r="34" fill="#F4EFE4" stroke={S} strokeWidth="1.4" />

        {/* Gray tabby patch on head */}
        <path d="M 24 68 Q 32 54 50 58 Q 56 46 68 52 Q 70 62 58 70 Q 44 76 24 72 Z"
              fill="#D8CFC0" stroke={S} strokeWidth="0.8" strokeLinejoin="round" opacity="0.6" />

        {/* Left ear */}
        <path d="M 24 62 Q 26 38 42 52 Z" fill="#F4EFE4" stroke={S} strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M 27 60 Q 28 42 40 52 Z" fill="#F0C8C0" />
        {/* Right ear */}
        <path d="M 84 62 Q 82 38 66 52 Z" fill="#F4EFE4" stroke={S} strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M 81 60 Q 80 42 68 52 Z" fill="#F0C8C0" />

        {/* Cheeks */}
        <ellipse cx="28" cy="86" rx="10" ry="6" fill="#F0D0C0" opacity="0.45" />
        <ellipse cx="80" cy="86" rx="10" ry="6" fill="#F0D0C0" opacity="0.45" />

        {/* Eyes */}
        {eyesClosed ? (
          <>
            <path d="M 38 76 Q 46 71 54 76" stroke={S} strokeWidth="2.2" fill="none" strokeLinecap="round" />
            <path d="M 54 76 Q 62 71 70 76" stroke={S} strokeWidth="2.2" fill="none" strokeLinecap="round" />
          </>
        ) : (
          <>
            {/* Left eye — warm amber, large */}
            <ellipse cx="44" cy="76" rx="12" ry="13" fill="white"      stroke={S} strokeWidth="1.2" />
            <ellipse cx="44" cy="77" rx="8"  ry="9.5" fill="#8A7040" />
            <ellipse cx="44" cy="77" rx="4.5" ry="6.5" fill="#1E1408" />
            <ellipse cx="48" cy="73" rx="3.5" ry="4"   fill="white"   opacity="0.9" />
            <circle  cx="42" cy="82" r="1.4"             fill="white"   opacity="0.7" />
            {/* Right eye */}
            <ellipse cx="64" cy="76" rx="12" ry="13" fill="white"      stroke={S} strokeWidth="1.2" />
            <ellipse cx="64" cy="77" rx="8"  ry="9.5" fill="#8A7040" />
            <ellipse cx="64" cy="77" rx="4.5" ry="6.5" fill="#1E1408" />
            <ellipse cx="68" cy="73" rx="3.5" ry="4"   fill="white"   opacity="0.9" />
            <circle  cx="62" cy="82" r="1.4"             fill="white"   opacity="0.7" />
          </>
        )}

        {/* Nose */}
        <path d="M 54 90 L 50 94 L 58 94 Z" fill="#F0A0A0" stroke={S} strokeWidth="0.9" strokeLinejoin="round" />
        <path d="M 50 94 Q 54 98 58 94" stroke={S} strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Whiskers — thin, soft */}
        <path d="M 22 88 Q 36 90 48 92" stroke={S} strokeWidth="0.9" fill="none" strokeLinecap="round" opacity="0.5" />
        <path d="M 22 93 Q 36 93 48 94" stroke={S} strokeWidth="0.9" fill="none" strokeLinecap="round" opacity="0.5" />
        <path d="M 86 88 Q 72 90 60 92" stroke={S} strokeWidth="0.9" fill="none" strokeLinecap="round" opacity="0.5" />
        <path d="M 86 93 Q 72 93 60 94" stroke={S} strokeWidth="0.9" fill="none" strokeLinecap="round" opacity="0.5" />
      </g>
    </svg>
  );
}
