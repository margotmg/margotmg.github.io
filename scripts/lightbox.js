/* Lightbox for the events gallery.
   Click a photo to enlarge it; the photo credit (if any) stays visible below it.
   Prev/next arrows, X to close, click anywhere outside the photo to close.
   Keyboard: ← → to move, Esc to close. Touch: swipe left/right. */
(function () {
  const grid = document.querySelector('.gallery__grid');
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll('.event-card'));
  const items = cards.map((card) => ({
    img: card.querySelector('.event-card__visual img'),
    visual: card.querySelector('.event-card__visual'),
    credit: card.querySelector('.event-card__credit'),
  })).filter((it) => it.img);
  if (!items.length) return;

  // ---- build the overlay once ----
  const box = document.createElement('div');
  box.className = 'lightbox';
  box.hidden = true;
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.setAttribute('aria-label', 'Photo viewer');
  box.innerHTML = `
    <button class="lightbox__close" type="button" aria-label="Close photo">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
    </button>
    <div class="lightbox__stage">
      <button class="lightbox__nav lightbox__nav--prev" type="button" aria-label="Previous photo">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 4l-8 8 8 8"/></svg>
      </button>
      <img class="lightbox__img" alt="">
      <button class="lightbox__nav lightbox__nav--next" type="button" aria-label="Next photo">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 4l8 8-8 8"/></svg>
      </button>
      <p class="lightbox__caption">
        <span class="lightbox__count"></span>
        <span class="lightbox__credit"></span>
      </p>
    </div>`;
  document.body.appendChild(box);

  const imgEl = box.querySelector('.lightbox__img');
  const countEl = box.querySelector('.lightbox__count');
  const creditEl = box.querySelector('.lightbox__credit');
  const closeBtn = box.querySelector('.lightbox__close');
  const prevBtn = box.querySelector('.lightbox__nav--prev');
  const nextBtn = box.querySelector('.lightbox__nav--next');

  let current = 0;
  let lastFocus = null;
  const pad = (n) => String(n).padStart(2, '0');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // dir: -1 = came from the left (previous), 1 = from the right (next), 0 = just opened
  function show(i, dir = 0) {
    current = (i + items.length) % items.length;
    const it = items[current];
    imgEl.src = it.img.currentSrc || it.img.src;
    imgEl.alt = it.img.alt;
    countEl.textContent = `[${pad(current + 1)}] / ${pad(items.length)}`;
    creditEl.innerHTML = it.credit ? it.credit.innerHTML : '';
    if (!reduceMotion && imgEl.animate) {
      imgEl.getAnimations().forEach((a) => a.cancel()); // fast key presses: don't stack
      imgEl.animate(
        [
          { opacity: 0, transform: dir ? `translateX(${dir * 40}px)` : 'scale(0.96)' },
          { opacity: 1, transform: 'none' },
        ],
        { duration: 450, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
      );
    }
    // preload neighbours so arrows feel instant
    [current - 1, current + 1].forEach((n) => {
      const nb = items[(n + items.length) % items.length];
      if (nb) new Image().src = nb.img.src;
    });
  }

  function open(i) {
    lastFocus = document.activeElement;
    show(i);
    box.hidden = false;
    document.documentElement.classList.add('lightbox-open');
    requestAnimationFrame(() => box.classList.add('is-open'));
    closeBtn.focus();
  }

  function close() {
    box.classList.remove('is-open');
    box.hidden = true;
    document.documentElement.classList.remove('lightbox-open');
    if (lastFocus) lastFocus.focus();
  }

  // ---- open from the grid ----
  items.forEach((it, i) => {
    it.visual.classList.add('is-zoomable');
    it.visual.setAttribute('role', 'button');
    it.visual.setAttribute('tabindex', '0');
    it.visual.setAttribute('aria-label', `Enlarge photo ${i + 1}: ${it.img.alt}`);
    it.visual.addEventListener('click', () => open(i));
    it.visual.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(i); }
    });
  });

  // ---- controls ----
  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', () => show(current - 1, -1));
  nextBtn.addEventListener('click', () => show(current + 1, 1));

  // click anywhere that isn't the photo, its caption, or a control → close
  box.addEventListener('click', (e) => {
    if (e.target.closest('.lightbox__img, .lightbox__caption, button')) return;
    close();
  });

  document.addEventListener('keydown', (e) => {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') { e.preventDefault(); show(current - 1, -1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); show(current + 1, 1); }
    else if (e.key === 'Tab') {
      // keep focus inside the viewer
      const f = Array.from(box.querySelectorAll('button, a[href]'));
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // swipe on touch screens
  let startX = null, startY = null;
  box.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX; startY = e.touches[0].clientY;
  }, { passive: true });
  box.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) show(current + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
    startX = null;
  });
})();
