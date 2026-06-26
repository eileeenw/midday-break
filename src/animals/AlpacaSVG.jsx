const STROKE = '#3D2B1F';
const SW = 2;

export default function AlpacaSVG({ state = 'idle' }) {
  const eyesClosed = state === 'petting';

  return (
    <svg viewBox="0 0 120 178" width="118" height="168" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="alpaca-rough" x="-8%" y="-8%" width="116%" height="116%">
          <feTurbulence type="fractalNoise" baseFrequency="0.055" numOctaves="3" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.8" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      <g filter="url(#alpaca-rough)">
        {/* Legs */}
        <rect x="27" y="149" width="14" height="23" rx="7" fill="#EDE8D8" stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" />
        <rect x="43" y="152" width="14" height="20" rx="7" fill="#EDE8D8" stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" />
        <rect x="63" y="152" width="14" height="20" rx="7" fill="#EDE8D8" stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" />
        <rect x="79" y="149" width="14" height="23" rx="7" fill="#EDE8D8" stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" />

        {/* Woolly body bumps */}
        <circle cx="29"  cy="108" r="13"  fill="#F7F2E2" stroke={STROKE} strokeWidth={SW} />
        <circle cx="44"  cy="101" r="15"  fill="#F7F2E2" stroke={STROKE} strokeWidth={SW} />
        <circle cx="60"  cy="98"  r="16"  fill="#F7F2E2" stroke={STROKE} strokeWidth={SW} />
        <circle cx="76"  cy="101" r="15"  fill="#F7F2E2" stroke={STROKE} strokeWidth={SW} />
        <circle cx="91"  cy="108" r="13"  fill="#F7F2E2" stroke={STROKE} strokeWidth={SW} />

        {/* Body fill — covers seams between bumps */}
        <ellipse cx="60" cy="131" rx="46" ry="35" fill="#F7F2E2" stroke={STROKE} strokeWidth={SW} />

        {/* Neck */}
        <path d="M 50 118 Q 48 100 52 90 Q 58 85 68 90 Q 72 100 70 118 Z"
              fill="#EDE8D8" stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" />

        {/* Head */}
        <path d="M 36 80 Q 36 56 60 56 Q 84 56 84 80 Q 84 98 60 98 Q 36 98 36 80 Z"
              fill="#F0EBD8" stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" />

        {/* Fluffy top-knot */}
        <circle cx="46"  cy="61" r="13" fill="#F7F2E2" stroke={STROKE} strokeWidth={SW} />
        <circle cx="60"  cy="56" r="15" fill="#F7F2E2" stroke={STROKE} strokeWidth={SW} />
        <circle cx="74"  cy="61" r="13" fill="#F7F2E2" stroke={STROKE} strokeWidth={SW} />

        {/* Left ear */}
        <path d="M 36 72 Q 28 58 33 50 Q 38 46 44 54 Q 45 62 40 72 Z"
              fill="#EDE8D8" stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" />
        <path d="M 37 70 Q 31 59 35 53 Q 38 50 42 56 Q 43 63 39 70 Z"
              fill="#F9D5C5" />

        {/* Right ear */}
        <path d="M 84 72 Q 92 58 87 50 Q 82 46 76 54 Q 75 62 80 72 Z"
              fill="#EDE8D8" stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" />
        <path d="M 83 70 Q 89 59 85 53 Q 82 50 78 56 Q 77 63 81 70 Z"
              fill="#F9D5C5" />

        {/* Cheek blush */}
        <ellipse cx="42" cy="84" rx="8"   ry="5" fill="#F9B8A8" opacity="0.6" />
        <ellipse cx="78" cy="84" rx="8"   ry="5" fill="#F9B8A8" opacity="0.6" />

        {/* Eyes */}
        {eyesClosed ? (
          <>
            <path d="M 44 78 Q 51 73 57 78" stroke={STROKE} strokeWidth="2.8" fill="none" strokeLinecap="round" />
            <path d="M 63 78 Q 70 73 76 78" stroke={STROKE} strokeWidth="2.8" fill="none" strokeLinecap="round" />
          </>
        ) : (
          <>
            {/* Left eye */}
            <ellipse cx="50" cy="78" rx="10" ry="11" fill="white"   stroke={STROKE} strokeWidth="1.5" />
            <ellipse cx="50" cy="79" rx="6.8" ry="7.8" fill="#4A2E1A" />
            <ellipse cx="50" cy="79" rx="4"  ry="4.8" fill="#1A0A05" />
            <ellipse cx="54" cy="75.5" rx="2.8" ry="3.2" fill="white" opacity="0.9" />
            <circle  cx="48.5" cy="83"  r="1.3"           fill="white" opacity="0.75" />
            {/* Right eye */}
            <ellipse cx="70" cy="78" rx="10" ry="11" fill="white"   stroke={STROKE} strokeWidth="1.5" />
            <ellipse cx="70" cy="79" rx="6.8" ry="7.8" fill="#4A2E1A" />
            <ellipse cx="70" cy="79" rx="4"  ry="4.8" fill="#1A0A05" />
            <ellipse cx="74" cy="75.5" rx="2.8" ry="3.2" fill="white" opacity="0.9" />
            <circle  cx="68.5" cy="83"  r="1.3"           fill="white" opacity="0.75" />
          </>
        )}

        {/* Nose */}
        <ellipse cx="60" cy="90" rx="6" ry="4" fill="#D4A0A0" stroke={STROKE} strokeWidth="1.2" />
        {/* Mouth */}
        <path d="M 56 93 Q 60 97 64 93" stroke={STROKE} strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}
