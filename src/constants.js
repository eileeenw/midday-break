export const FOOD_ITEMS = [
  { id: 'bread',    emoji: '🍞', name: 'Sourdough bread',      boost: 10 },
  { id: 'soup',     emoji: '🍲', name: 'Mushroom soup',        boost: 15 },
  { id: 'grass',    emoji: '🌿', name: 'Organic grass bundle', boost: 8  },
  { id: 'porridge', emoji: '🥣', name: 'Warm oat porridge',    boost: 12 },
];

export const ANIMALS = [
  { id: 'chicken', name: 'Chicken',      sounds: ['bwok~',  'cluck~', 'bawk~'] },
  { id: 'cat',     name: 'Cat',          sounds: ['nyaa~',  'purr~',  'mrow~'] },
  { id: 'cow',     name: 'Highland Cow', sounds: ['muu~',   'mooo~',  'hmm~']  },
];

export const HAPPINESS_STAGES = [
  { min: 0,  max: 19,  label: 'Wilted',     stage: 1 },
  { min: 20, max: 39,  label: 'Sprouting',  stage: 2 },
  { min: 40, max: 59,  label: 'Blooming',   stage: 3 },
  { min: 60, max: 79,  label: 'Full bloom', stage: 4 },
  { min: 80, max: 100, label: 'Glowing',    stage: 5 },
];

export function getStage(happiness) {
  for (const s of HAPPINESS_STAGES) {
    if (happiness <= s.max) return s.stage;
  }
  return 5;
}

export const INITIAL_HAPPINESS = { chicken: 15, cat: 15, cow: 15 };
export const PET_BOOST   = 5;
export const CALL_BOOST  = 3;
export const DECAY_AMOUNT   = 0.8;
export const DECAY_INTERVAL = 8000;
