const base = import.meta.env.BASE_URL;

const timers = {};

function play(key, filename, durationMs) {
  const audio = new Audio(`${base}sounds/${filename}`);
  audio.volume = 0.8;
  audio.play().catch(err => console.warn('[sound] failed:', key, err.message));

  clearTimeout(timers[key]);
  timers[key] = setTimeout(() => audio.pause(), durationMs);
}

export function playFoodSound(foodId) {
  if      (foodId === 'grass')                          play('crunch', 'crunch.mp3', 4000);
  else if (foodId === 'porridge' || foodId === 'soup')  play('slurp',  'slurp.mp3',  2000);
  else                                                  play('eat',    'eat.mp3',    4000);
}
