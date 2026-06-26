let farmerUrl = '';
let spoonUrl  = '';

function makeEmojiCursor(emoji, hotspotX = 2, hotspotY = 28) {
  const c = document.createElement('canvas');
  c.width = 40; c.height = 40;
  const ctx = c.getContext('2d');
  ctx.font = '30px serif';
  ctx.fillText(emoji, 2, 30);
  return `url(${c.toDataURL()}) ${hotspotX} ${hotspotY}, auto`;
}

export function initCursors() {
  farmerUrl = makeEmojiCursor('👨‍🌾');
  spoonUrl  = makeEmojiCursor('🥄', 4, 36);
  document.body.style.cursor = farmerUrl;
}

export function setSpoonCursor() {
  if (spoonUrl) document.body.style.cursor = spoonUrl;
}

export function restoreFarmerCursor() {
  if (farmerUrl) document.body.style.cursor = farmerUrl;
}
