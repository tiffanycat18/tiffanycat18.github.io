const stacker = document.getElementById('stacker');
const stage   = document.getElementById('stage');
const posters = Array.from(stage.querySelectorAll('.poster'));

document.documentElement.style.setProperty('--items', posters.length);

// STATIC LAYERING: earlier posters on top, later posters underneath
// (no dynamic reordering, so moving cards always slide below)
posters.forEach((el, i) => {
  el.style.zIndex = 1000 - i; // 0 = topmost, last = bottom
});

const clamp = (v, lo=0, hi=1) => Math.max(lo, Math.min(hi, v));
const lerp  = (a, b, t) => a + (b - a) * t;

function cssLenToPx(v) {
  if (!v) return 0;
  v = String(v).trim();
  if (v.endsWith('vw')) return innerWidth  * parseFloat(v) / 100;
  if (v.endsWith('vh')) return innerHeight * parseFloat(v) / 100;
  if (v.endsWith('px')) return parseFloat(v);
  if (v.endsWith('mm')) return parseFloat(v) * (96/25.4);
  if (v.endsWith('cm')) return parseFloat(v) * (96/2.54);
  return parseFloat(v) || 0;
}

function getVars() {
  const cs = getComputedStyle(stacker);
  return {
    peek:           cssLenToPx(cs.getPropertyValue('--peek') || '38px'),   // ~1cm of previous LEFT edge visible
    startOvershoot: cssLenToPx(cs.getPropertyValue('--startOvershoot') || '40vw'),
    anchorBaseX:    cssLenToPx(cs.getPropertyValue('--anchorBaseX') || '0px') // keep 0 with left:-4.5cm
  };
}

let ticking = false;

function render() {
  ticking = false;

  // Section progress (robust in CodePen iframe)
  const rect = stacker.getBoundingClientRect();
  const total = (rect.height - window.innerHeight) || 1;
  const g = clamp((-rect.top) / total);

  const { peek, startOvershoot, anchorBaseX } = getVars();

  // compute each poster's target center X (preserve ~1cm of previous LEFT edge)
  posters.forEach((el, i) => {
    const t = clamp(g * (posters.length + 1) - i, 0, 1);

    const targetX = anchorBaseX + i * peek;   // centers move by +peek each step
    const startX  = targetX + startOvershoot; // begin further to the RIGHT
    const x       = lerp(startX, targetX, t);

    el.style.setProperty('--tx', `${x}px`);

    // subtle feel shaping (no z-index flips)
    const sc = lerp(0.98, 1.0, 1 - Math.abs(0.5 - t) * 2);
    const op = lerp(0.85, 1.0, t);
    el.style.setProperty('--sc', sc.toFixed(3));
    el.style.setProperty('--op', op.toFixed(3));
  });
}

function onScroll(){ if (!ticking) { ticking = true; requestAnimationFrame(render); } }
function onResize(){ document.documentElement.style.setProperty('--items', posters.length); render(); }

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onResize);
window.addEventListener('load', render);
render();
