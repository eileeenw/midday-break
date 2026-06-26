import { useState, useRef, useCallback } from 'react';
import chickenImg from '../assets/chicken.png';
import catImg     from '../assets/cat.png';
import cowImg     from '../assets/cow.png';
import HappinessMeter from './HappinessMeter';
import { getStage } from '../constants';
import { playFoodSound } from '../sounds';

const IMGS = {
  chicken: chickenImg,
  cat:     catImg,
  cow:     cowImg,
};

const PARTICLES = ['♡', '🌸', '♡', '🌺', '✿', '🌼'];

export default function Animal({ animal, happiness, selectedFood, onFeed, onPet, onCall, onDrop }) {
  const [animState,  setAnimState]  = useState('idle');
  const [hearts,     setHearts]     = useState([]);
  const [sparkles,   setSparkles]   = useState([]);
  const [speech,     setSpeech]     = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const clickTimer = useRef(null);
  const stage      = getStage(happiness);

  const spawnHearts = useCallback(() => {
    const items = Array.from({ length: 6 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.round(Math.random() * 80 - 40),
      emoji: PARTICLES[i % PARTICLES.length],
      delay: i * 0.15,
    }));
    setHearts(items);
    setTimeout(() => setHearts([]), 2000);
  }, []);

  const spawnSparkles = useCallback(() => {
    const items = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.round(Math.random() * 70 - 35),
      y: Math.round(Math.random() * 40 - 20),
      delay: i * 0.08,
    }));
    setSparkles(items);
    setTimeout(() => setSparkles([]), 900);
  }, []);

  const triggerFeed = useCallback(() => {
    setAnimState('eating');
    spawnHearts();
    if (selectedFood) playFoodSound(selectedFood.id);
    onFeed(animal.id);
    setTimeout(() => setAnimState('idle'), 1400);
  }, [animal.id, onFeed, selectedFood, spawnHearts]);

  const triggerPet = useCallback(() => {
    setAnimState('petting');
    spawnSparkles();
    onPet(animal.id);
    setTimeout(() => setAnimState('idle'), 900);
  }, [animal.id, onPet, spawnSparkles]);

  const triggerCall = useCallback(() => {
    const sound = animal.sounds[Math.floor(Date.now() % animal.sounds.length)];
    setSpeech(sound);
    onCall(animal.id);
    setTimeout(() => setSpeech(null), 2100);
  }, [animal, onCall]);

  const handleClick = useCallback(() => {
    if (clickTimer.current) return;
    clickTimer.current = setTimeout(() => {
      clickTimer.current = null;
      if (selectedFood) triggerFeed();
      else              triggerPet();
    }, 220);
  }, [selectedFood, triggerFeed, triggerPet]);

  const handleDoubleClick = useCallback(() => {
    clearTimeout(clickTimer.current);
    clickTimer.current = null;
    triggerCall();
  }, [triggerCall]);

  const handleDrop = useCallback(e => {
    e.preventDefault();
    setIsDragOver(false);
    const foodId = e.dataTransfer.getData('foodId');
    if (!foodId) return;
    playFoodSound(foodId);
    onDrop(animal.id, foodId);
    setAnimState('eating');
    spawnHearts();
    setTimeout(() => setAnimState('idle'), 1400);
  }, [animal.id, onDrop, spawnHearts]);

  const isGlowing = stage === 5;

  const wrapClass = [
    'animal-img-wrap',
    animState === 'eating'  ? 'eating'  : '',
    animState === 'petting' ? 'petting' : '',
    isGlowing               ? 'glowing' : '',
  ].filter(Boolean).join(' ');

  return (
    <div
      className={`animal-container animal-container--${animal.id}${selectedFood ? ' has-food' : ''}${isDragOver ? ' drag-over' : ''}`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onDragOver={e => { e.preventDefault(); setIsDragOver(true); }}
      onDragLeave={() => setIsDragOver(false)}
      onDrop={handleDrop}
      role="button"
      tabIndex={0}
      aria-label={`${animal.name} (stage ${stage}/5). Click to ${selectedFood ? 'feed' : 'pet'}, double-click to call.`}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleClick(); }}
    >
      <HappinessMeter happiness={happiness} />

      <div className="animal-wrapper">
        {speech && <div className="speech-bubble">{speech}</div>}

        {hearts.map(h => (
          <span
            key={h.id}
            className="heart-particle"
            style={{ left: `calc(50% + ${h.x}px)`, bottom: '100%', animationDelay: `${h.delay}s` }}
          >{h.emoji}</span>
        ))}

        {sparkles.map(s => (
          <span
            key={s.id}
            className="sparkle-particle"
            style={{ left: `calc(50% + ${s.x}px)`, top: `calc(40% + ${s.y}px)`, animationDelay: `${s.delay}s` }}
          >✦</span>
        ))}

        <div className={wrapClass}>
          <img
            src={IMGS[animal.id]}
            alt={animal.name}
            className={`animal-img animal-img--${animal.id}`}
            draggable={false}
          />
        </div>
      </div>

      {animal.id === 'cow' && <div className="animal-label">{animal.name}</div>}
    </div>
  );
}
