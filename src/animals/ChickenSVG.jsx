const S = '#7A4C10'; // soft amber-brown stroke, not black

export default function ChickenSVG({ state = 'idle' }) {
  const eyesClosed = state === 'petting';

  return (
    <svg viewBox="0 0 120 178" width="108" height="160" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="ch-grain" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" seed="11" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.6" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      <g filter="url(#ch-grain)">
        {/* Tail feathers — soft blobs */}
        <circle cx="97" cy="90" r="15" fill="#C08828" stroke={S} strokeWidth="1.2" opacity="0.9" />
        <circle cx="104" cy="76" r="11" fill="#C08828" stroke={S} strokeWidth="1.2" opacity="0.8" />
        <circle cx="100" cy="105" r="12" fill="#C08828" stroke={S} strokeWidth="1.2" opacity="0.85" />

        {/* Body — big warm circle */}
        <circle cx="54" cy="118" r="46" fill="#D4A038" stroke={S} strokeWidth="1.4" />

        {/* Wing shading */}
        <path d="M 18 108 Q 28 98 42 106 Q 30 120 18 120 Z" fill="#C08828" stroke={S} strokeWidth="1.2" />

        {/* Neck bridge */}
        <ellipse cx="54" cy="84" rx="19" ry="12" fill="#D4A038" />

        {/* Head */}
        <circle cx="54" cy="62" r="28" fill="#D4A038" stroke={S} strokeWidth="1.4" />

        {/* Comb — 3 round bumps */}
        <circle cx="43" cy="38" r="9"  fill="#C83838" stroke={S} strokeWidth="1.2" />
        <circle cx="54" cy="32" r="11" fill="#C83838" stroke={S} strokeWidth="1.2" />
        <circle cx="65" cy="38" r="9"  fill="#C83838" stroke={S} strokeWidth="1.2" />

        {/* Wattle */}
        <ellipse cx="41" cy="78" rx="7" ry="9" fill="#C83838" stroke={S} strokeWidth="1.2" />

        {/* Beak — tiny, side-facing */}
        <path d="M 30 60 Q 20 58 20 65 Q 20 71 30 69 Z"
              fill="#E08830" stroke={S} strokeWidth="1.2" strokeLinejoin="round" />

        {/* Cheek */}
        <ellipse cx="70" cy="68" rx="11" ry="7" fill="#E8B848" opacity="0.4" />

        {/* Eye — one visible (3/4 view) */}
        {eyesClosed ? (
          <path d="M 62 60 Q 70 55 78 60" stroke={S} strokeWidth="2.2" fill="none" strokeLinecap="round" />
        ) : (
          <>
            <circle cx="70" cy="58" r="9"   fill="#1C1408" />
            <circle cx="70" cy="58" r="5"   fill="#080604" />
            <ellipse cx="73" cy="55" rx="3" ry="3.5" fill="white" opacity="0.88" />
          </>
        )}

        {/* Legs */}
        <line x1="40" y1="160" x2="40" y2="168" stroke="#E08830" strokeWidth="5.5" strokeLinecap="round" />
        <line x1="66" y1="160" x2="66" y2="168" stroke="#E08830" strokeWidth="5.5" strokeLinecap="round" />
        {/* Toes */}
        <path d="M 40 166 L 32 176 M 40 166 L 40 178 M 40 166 L 50 174"
              stroke="#E08830" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M 66 166 L 58 176 M 66 166 L 66 178 M 66 166 L 76 174"
              stroke="#E08830" strokeWidth="3" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
}
