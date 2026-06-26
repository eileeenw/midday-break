import eatSfx   from './assets/eat.mp3';
import crunchSfx from './assets/crunch.mp3';
import slurpSfx  from './assets/slurp.mp3';

const cache = {};
const timers = {};

function play(id, src, durationMs) {
  try {
    if (!cache[id]) cache[id] = new Audio(src);
    const audio = cache[id];
    audio.currentTime = 0;
    audio.volume = 0.6;
    audio.play().catch(() => {});

    clearTimeout(timers[id]);
    timers[id] = setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
    }, durationMs);
  } catch {
    // audio not supported — silently skip
  }
}

export function playFoodSound(foodId) {
  if (foodId === 'grass') {
    play('grass', crunchSfx, 4000);
  } else if (foodId === 'porridge' || foodId === 'soup') {
    play('slurp', slurpSfx, 2000);
  } else {
    play('eat', eatSfx, 4000);
  }
}
