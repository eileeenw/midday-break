const base = import.meta.env.BASE_URL;

function preload(filename) {
  const a = new Audio(`${base}sounds/${filename}`);
  a.preload = 'auto';
  a.volume  = 0.8;
  a.load();
  return a;
}

const tracks = {
  eat:    { audio: preload('eat.mp3'),    duration: 4000 },
  crunch: { audio: preload('crunch.mp3'), duration: 4000 },
  slurp:  { audio: preload('slurp.mp3'),  duration: 2000 },
};

const timers = {};

function play(key) {
  const { audio, duration } = tracks[key];
  audio.currentTime = 0;
  audio.volume = 0.8;
  audio.play().catch(err => console.warn('[sound] play failed:', key, err));

  clearTimeout(timers[key]);
  timers[key] = setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, duration);
}

export function playFoodSound(foodId) {
  if      (foodId === 'grass')                          play('crunch');
  else if (foodId === 'porridge' || foodId === 'soup')  play('slurp');
  else                                                  play('eat');
}
