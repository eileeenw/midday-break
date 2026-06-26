const S = '#5A3010'; // soft dark-brown stroke

export default function HighlandCowSVG({ state = 'idle' }) {
  const eyesClosed = state === 'petting';

  return (
    <svg viewBox="0 0 154 194" width="140" height="178" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="cow-grain" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.048" numOctaves="3" seed="6" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.8" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      <g filter="url(#cow-grain)">
        {/* Tail */}
        <path d="M 132 128 Q 150 116 148 96 Q 146 82 134 88"
              stroke="#8A5020" strokeWidth="8" fill="none" strokeLinecap="round" />
        <ellipse cx="133" cy="89" rx="9" ry="11" fill="#A06030"
                 stroke={S} strokeWidth="1.2" transform="rotate(-12,133,89)" />

        {/* Body — rounded, chunky */}
        <path d="M 12 122 Q 10 106 24 102 L 128 102 Q 144 106 142 122 L 142 162 Q 142 178 118 178 L 38 178 Q 10 178 12 162 Z"
              fill="#A86030" stroke={S} strokeWidth="1.5" strokeLinejoin="round" />

        {/* Body fur texture — lighter streaks */}
        <path d="M 22 120 Q 30 112 42 118 Q 34 130 22 132" fill="#C07840" stroke={S} strokeWidth="0.8" strokeLinejoin="round" opacity="0.6" />
        <path d="M 110 118 Q 120 110 134 116 Q 126 128 112 130" fill="#C07840" stroke={S} strokeWidth="0.8" strokeLinejoin="round" opacity="0.6" />
        <path d="M 60 158 Q 72 150 86 156 Q 80 168 64 168" fill="#C07840" stroke={S} strokeWidth="0.8" strokeLinejoin="round" opacity="0.5" />

        {/* Legs */}
        <rect x="22"  y="164" width="22" height="28" rx="9" fill="#8A5020" stroke={S} strokeWidth="1.4" strokeLinejoin="round" />
        <rect x="50"  y="166" width="22" height="26" rx="9" fill="#8A5020" stroke={S} strokeWidth="1.4" strokeLinejoin="round" />
        <rect x="82"  y="166" width="22" height="26" rx="9" fill="#8A5020" stroke={S} strokeWidth="1.4" strokeLinejoin="round" />
        <rect x="110" y="164" width="22" height="28" rx="9" fill="#8A5020" stroke={S} strokeWidth="1.4" strokeLinejoin="round" />
        {/* Hoof splits */}
        <path d="M 33 184 L 33 192" stroke={S} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 61 184 L 61 192" stroke={S} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 93 184 L 93 192" stroke={S} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 121 184 L 121 192" stroke={S} strokeWidth="1.5" strokeLinecap="round" />

        {/* Neck */}
        <path d="M 48 100 Q 46 84 54 78 Q 68 74 94 76 Q 106 80 104 100 Z"
              fill="#A86030" stroke={S} strokeWidth="1.4" strokeLinejoin="round" />

        {/* Head */}
        <path d="M 20 48 Q 18 26 42 22 L 118 22 Q 138 26 136 48 L 136 96 Q 136 116 118 116 L 42 116 Q 20 116 20 96 Z"
              fill="#A86030" stroke={S} strokeWidth="1.5" strokeLinejoin="round" />

        {/* Horns — long, curved, prominent */}
        <path d="M 26 50 C 10 32 12 14 22 12 C 26 11 32 18 28 30 C 27 38 26 46 28 54"
              stroke="#D4C05A" strokeWidth="12" fill="none" strokeLinecap="round" />
        <path d="M 130 50 C 146 32 144 14 134 12 C 130 11 124 18 128 30 C 129 38 130 46 128 54"
              stroke="#D4C05A" strokeWidth="12" fill="none" strokeLinecap="round" />

        {/* Shaggy fringe — main dark layer */}
        <path d="M 18 50
                 C 28 22 50 16 66 30
                 C 70 10 86 12 98 28
                 C 108 14 128 24 136 50
                 L 136 84
                 C 124 100 110 88 100 96
                 C 90 106 80 92 77 100
                 C 74 108 62 96 54 100
                 C 44 108 32 98 18 84 Z"
              fill="#7A4020" stroke={S} strokeWidth="1.4" strokeLinejoin="round" />

        {/* Fringe hair texture strands */}
        <path d="M 28 66 Q 38 48 56 54" stroke="#5A2E10" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.55" />
        <path d="M 32 76 Q 44 58 62 64" stroke="#5A2E10" strokeWidth="2"   fill="none" strokeLinecap="round" opacity="0.45" />
        <path d="M 90 54 Q 104 46 118 52" stroke="#5A2E10" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.55" />
        <path d="M 86 64 Q 100 56 116 62" stroke="#5A2E10" strokeWidth="2"   fill="none" strokeLinecap="round" opacity="0.45" />
        <path d="M 60 80 Q 76 70 92 76" stroke="#5A2E10" strokeWidth="2"     fill="none" strokeLinecap="round" opacity="0.4" />

        {/* Eyes peeking through fringe */}
        {eyesClosed ? (
          <>
            <path d="M 42 76 Q 53 71 64 76" stroke="#7A5000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M 84 76 Q 95 71 106 76" stroke="#7A5000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </>
        ) : (
          <>
            <ellipse cx="53" cy="76" rx="11" ry="10" fill="white"     stroke={S} strokeWidth="1.5" />
            <circle  cx="53" cy="76" r="6.5"           fill="#7A4C00" />
            <circle  cx="53" cy="76" r="3.8"           fill="#201400" />
            <ellipse cx="56" cy="73" rx="2.5" ry="3"   fill="white"  opacity="0.88" />
            <ellipse cx="95" cy="76" rx="11" ry="10" fill="white"     stroke={S} strokeWidth="1.5" />
            <circle  cx="95" cy="76" r="6.5"           fill="#7A4C00" />
            <circle  cx="95" cy="76" r="3.8"           fill="#201400" />
            <ellipse cx="98" cy="73" rx="2.5" ry="3"   fill="white"  opacity="0.88" />
          </>
        )}

        {/* Nose — big, soft */}
        <ellipse cx="77" cy="100" rx="25" ry="15" fill="#C49070" stroke={S} strokeWidth="1.4" />
        <ellipse cx="68" cy="102" rx="6.5" ry="5.5" fill="#A07050" stroke={S} strokeWidth="1" />
        <ellipse cx="86" cy="102" rx="6.5" ry="5.5" fill="#A07050" stroke={S} strokeWidth="1" />
      </g>
    </svg>
  );
}
