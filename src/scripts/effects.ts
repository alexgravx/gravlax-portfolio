/**
 * Text scramble + custom terminal cursor.
 *
 * Both are decoration, so both bail out completely under prefers-reduced-motion,
 * and the cursor additionally requires a fine pointer (no touch devices, which
 * would otherwise get a block chasing their taps).
 */

const GLYPHS = '!<>-_\\/[]{}—=+*^?#01ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ------------------------------------------------------------------ scramble */

function scramble(el: HTMLElement) {
  const text = el.dataset.text ?? el.textContent ?? '';
  if (!text || el.dataset.scrambling === '1') return;

  el.dataset.text = text;
  el.dataset.scrambling = '1';

  const total = 28;
  let frame = 0;

  // Each character resolves at its own time, so the word "decodes" left to right.
  const schedule = [...text].map((_, i) => ({
    start: Math.floor(i * 1.4),
    end: Math.floor(i * 1.4) + 8 + Math.floor(Math.random() * 8),
  }));

  const tick = () => {
    let out = '';
    let done = 0;

    for (let i = 0; i < text.length; i++) {
      const ch = text[i]!;
      const { start, end } = schedule[i]!;

      if (ch === ' ') {
        out += ' ';
        done++;
      } else if (frame >= end) {
        out += ch;
        done++;
      } else if (frame >= start) {
        out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      } else {
        out += ' ';
      }
    }

    el.textContent = out;

    if (done === text.length || frame > total + text.length * 1.4) {
      el.textContent = text;
      delete el.dataset.scrambling;
      return;
    }

    frame++;
    requestAnimationFrame(tick);
  };

  tick();
}

export function initScramble() {
  if (reduced) return;

  const targets = document.querySelectorAll<HTMLElement>('[data-scramble]');

  // Decode once when the element first scrolls into view...
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        scramble(e.target as HTMLElement);
        io.unobserve(e.target);
      }
    },
    { threshold: 0.6 },
  );

  targets.forEach((el) => {
    io.observe(el);
    // ...and again on hover, for anything interactive.
    el.addEventListener('mouseenter', () => scramble(el));
  });
}

/* -------------------------------------------------------------------- cursor */

/**
 * The custom block cursor is built and working, but switched off for now:
 * the OS cursor stays. Flip this to `true` to bring it back.
 */
export const CUSTOM_CURSOR = false;

export function initCursor() {
  if (!CUSTOM_CURSOR) return;
  if (reduced || !matchMedia('(pointer: fine)').matches) return;

  const dot = document.createElement('div');
  dot.className = 'cursor-block';
  dot.setAttribute('aria-hidden', 'true');
  document.body.append(dot);
  document.documentElement.classList.add('has-custom-cursor');

  let x = innerWidth / 2;
  let y = innerHeight / 2;
  let tx = x;
  let ty = y;

  addEventListener(
    'mousemove',
    (e) => {
      tx = e.clientX;
      ty = e.clientY;
    },
    { passive: true },
  );

  // Trail slightly behind the pointer — enough to feel alive, not enough to lag.
  const loop = () => {
    x += (tx - x) * 0.35;
    y += (ty - y) * 0.35;
    dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    requestAnimationFrame(loop);
  };
  loop();

  const interactive = 'a, button, input, [data-select], .leaf, summary';

  addEventListener(
    'mouseover',
    (e) => {
      const el = e.target as HTMLElement;
      dot.classList.toggle('on-target', Boolean(el.closest(interactive)));
    },
    { passive: true },
  );

  addEventListener('mousedown', () => dot.classList.add('down'), { passive: true });
  addEventListener('mouseup', () => dot.classList.remove('down'), { passive: true });

  // Hide the block when the pointer leaves the window entirely.
  document.addEventListener('mouseleave', () => dot.classList.add('gone'));
  document.addEventListener('mouseenter', () => dot.classList.remove('gone'));
}
