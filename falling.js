function createFallingItem() {
  const item = document.createElement('div');
  item.className = 'falling-item';
  item.style.left = Math.random() * window.innerWidth + 'px';
  item.style.animationDuration = (4 + Math.random() * 6) + 's';
  item.style.opacity = Math.random();
  document.body.appendChild(item);
  const duration = parseFloat(item.style.animationDuration) * 1000;
  setTimeout(() => item.remove(), duration);
}

setInterval(createFallingItem, 500);
