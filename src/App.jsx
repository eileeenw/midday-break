import { useState, useEffect } from 'react';
import Animal from './components/Animal';
import FoodTray from './components/FoodTray';
import { ANIMALS, FOOD_ITEMS, INITIAL_HAPPINESS, PET_BOOST, CALL_BOOST, DECAY_AMOUNT, DECAY_INTERVAL } from './constants';
import bgImg from './assets/background.jpeg';
import { initCursors } from './cursorUtils';
import './App.css';

function loadHappiness() {
  try {
    const saved = localStorage.getItem('cosyfarm-happiness');
    return saved ? { ...INITIAL_HAPPINESS, ...JSON.parse(saved) } : INITIAL_HAPPINESS;
  } catch {
    return INITIAL_HAPPINESS;
  }
}

export default function App() {
  const [happiness,    setHappiness]    = useState(loadHappiness);
  const [selectedFood, setSelectedFood] = useState(null);

  useEffect(() => { initCursors(); }, []);

  useEffect(() => {
    localStorage.setItem('cosyfarm-happiness', JSON.stringify(happiness));
  }, [happiness]);

  useEffect(() => {
    const id = setInterval(() => {
      setHappiness(prev => {
        const next = {};
        for (const k in prev) next[k] = Math.max(10, prev[k] - DECAY_AMOUNT);
        return next;
      });
    }, DECAY_INTERVAL);
    return () => clearInterval(id);
  }, []);

  const bump = (id, amount) =>
    setHappiness(prev => ({ ...prev, [id]: Math.min(100, prev[id] + amount) }));

  const handleFeed = id => {
    if (!selectedFood) return;
    bump(id, selectedFood.boost);
    setSelectedFood(null);
  };

  const handleDrop = (animalId, foodId) => {
    const food = FOOD_ITEMS.find(f => f.id === foodId);
    if (food) bump(animalId, food.boost);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>mid day break: feed your animals</h1>
      </header>

      <main className="meadow" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="animals-row">
          {ANIMALS.map(animal => (
            <Animal
              key={animal.id}
              animal={animal}
              happiness={happiness[animal.id]}
              selectedFood={selectedFood}
              onFeed={handleFeed}
              onPet={id => bump(id, PET_BOOST)}
              onCall={id => bump(id, CALL_BOOST)}
              onDrop={handleDrop}
            />
          ))}
        </div>
      </main>

      <FoodTray
        foods={FOOD_ITEMS}
        selectedFood={selectedFood}
        onSelect={setSelectedFood}
      />
    </div>
  );
}

