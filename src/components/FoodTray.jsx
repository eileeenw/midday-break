import { setSpoonCursor, restoreFarmerCursor } from '../cursorUtils';

function makeSpoonGhost() {
  const el = document.createElement('span');
  el.textContent = '🥄';
  el.style.cssText = 'font-size:2rem;position:fixed;top:-200px;left:-200px;pointer-events:none;';
  document.body.appendChild(el);
  return el;
}

export default function FoodTray({ foods, selectedFood, onSelect }) {
  return (
    <div className="food-tray" role="toolbar" aria-label="Food tray">
      {foods.map(food => (
        <button
          key={food.id}
          draggable
          onDragStart={e => {
            e.dataTransfer.setData('foodId', food.id);
            e.dataTransfer.effectAllowed = 'copy';
            const ghost = makeSpoonGhost();
            e.dataTransfer.setDragImage(ghost, 16, 16);
            requestAnimationFrame(() => ghost.remove());
            setSpoonCursor();
          }}
          onDragEnd={restoreFarmerCursor}
          className={`food-btn${selectedFood?.id === food.id ? ' selected' : ''}`}
          onClick={() => onSelect(selectedFood?.id === food.id ? null : food)}
          aria-pressed={selectedFood?.id === food.id}
          title={`${food.name} (+${food.boost} happiness) — drag onto an animal to feed`}
        >
          <span className="food-emoji" role="img" aria-label={food.name}>
            {food.emoji}
          </span>
          <span className="food-name">{food.name}</span>
        </button>
      ))}
    </div>
  );
}
