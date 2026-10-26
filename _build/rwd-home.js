// Homepage responsive runtime — inlined by build/build-home.js. Two jobs: (1) set --z so 1152–1439px viewports
// zoom the whole 1440px design to fit, and zoom each [data-fit] mockup to its available width below 1152px;
// (2) the mobile menu toggle. Everything degrades to the CSS fallbacks in home-responsive.css without JS.
(function () {
  var doc = document, root = doc.documentElement, fits = [].slice.call(doc.querySelectorAll('[data-fit]')), raf = 0;
  function num(v) { return parseFloat(v) || 0; }
  function apply() {
    raf = 0;
    var w = window.innerWidth;
    root.style.setProperty('--z', (w >= 1152 && w < 1440) ? (w / 1440).toFixed(4) : '1');
    fits.forEach(function (el) {
      if (w >= 1152) { el.style.zoom = ''; return; }
      el.style.zoom = '1';
      var nat = num(el.getAttribute('data-fit')), p = el.parentElement, ps = getComputedStyle(p), es = getComputedStyle(el);
      var avail = p.clientWidth - num(ps.paddingLeft) - num(ps.paddingRight) - Math.max(0, num(es.marginLeft)) - Math.max(0, num(es.marginRight));
      el.style.zoom = Math.min(1, Math.max(.2, avail / nat)).toFixed(4);
    });
  }
  function queue() { if (!raf) raf = requestAnimationFrame(apply); }
  window.addEventListener('resize', queue);
  apply();

  var btn = doc.querySelector('[data-r=burger]'), menu = doc.getElementById('ms-menu');
  if (!btn || !menu) return;
  function set(open) {
    if (open) { menu.hidden = false; menu.setAttribute('data-open', ''); } else { menu.removeAttribute('data-open'); menu.hidden = true; }
    btn.setAttribute('aria-expanded', String(open));
  }
  btn.addEventListener('click', function () { set(menu.hidden); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
  doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
  window.addEventListener('resize', function () { if (window.innerWidth >= 1152) set(false); });
})();
