import { getStage } from '../constants';

const PETAL_ANGLES = [0, 72, 144, 216, 288];

const STAGE_CFG = [
  { petalFill: '#C0C0C0', centerFill: '#A0A0A0', stroke: '#A8A8A8', glow: false },
  { petalFill: '#90C870', centerFill: '#60A040', stroke: '#70A850', glow: false },
  { petalFill: '#F4A0B0', centerFill: '#E07090', stroke: '#E08898', glow: false },
  { petalFill: '#F480A0', centerFill: '#D04060', stroke: '#D06880', glow: false },
  { petalFill: '#F9C784', centerFill: '#F9A020', stroke: '#F0A840', glow: true  },
];

export default function HappinessMeter({ happiness }) {
  const stage = getStage(happiness);
  const cfg = STAGE_CFG[stage - 1];

  return (
    <div className={`happiness-meter${cfg.glow ? ' glowing' : ''}`} title={`Stage ${stage}`}>
      <svg viewBox="0 0 44 44" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        {/* Petals */}
        {PETAL_ANGLES.map((angle, i) => {
          const rad = ((angle - 90) * Math.PI) / 180;
          const cx = 22 + Math.cos(rad) * 11;
          const cy = 22 + Math.sin(rad) * 11;
          const filled = stage >= 2 ? i < stage - 1 : false;
          return (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx="6.5"
              ry="4.5"
              fill={filled ? cfg.petalFill : '#D8D8D8'}
              stroke={filled ? cfg.stroke : '#BEBEBE'}
              strokeWidth="0.8"
              transform={`rotate(${angle}, ${cx}, ${cy})`}
              opacity={filled ? 1 : 0.5}
            />
          );
        })}
        {/* Stem */}
        <line x1="22" y1="38" x2="22" y2="44" stroke="#A0B888" strokeWidth="2" strokeLinecap="round" />
        {/* Center */}
        <circle cx="22" cy="22" r="6.5" fill={cfg.centerFill} stroke={cfg.stroke} strokeWidth="1" />
        {/* Center highlight */}
        <ellipse cx="20.5" cy="20.5" rx="2.5" ry="1.8" fill="white" opacity="0.45" />
        {/* Sparkle for stage 5 */}
        {stage === 5 && (
          <>
            <text x="5"  y="12" fontSize="7" style={{ animation: 'petalGlow 1.5s ease-in-out infinite' }}>✦</text>
            <text x="31" y="12" fontSize="6" style={{ animation: 'petalGlow 1.5s ease-in-out infinite 0.4s' }}>✦</text>
          </>
        )}
      </svg>
    </div>
  );
}
