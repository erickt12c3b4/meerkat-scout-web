// Shared responsive runtime (homepage + sub-pages) — inlined by the build scripts. Two jobs: (1) set --z so
// 1152–1439px viewports zoom the whole 1440px design to fit, and zoom each [data-fit=W] mockup to the width
// available in its parent below 1152px; (2) the mobile menu toggle. Without JS the CSS fallbacks still apply.
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
      var cols = ps.display === 'grid' ? ps.gridTemplateColumns.split(' ').length : 1;
      var avail = (p.clientWidth - num(ps.paddingLeft) - num(ps.paddingRight) - num(ps.columnGap) * (cols - 1)) / cols
        - Math.max(0, num(es.marginLeft)) - Math.max(0, num(es.marginRight));
      var f = el.hasAttribute('data-spill') ? .9 : 1; // compositions that spill past their box keep a 5% margin each side
      el.style.zoom = avail >= nat ? '1' : Math.max(.2, f * avail / nat).toFixed(4);
    });
  }
  function queue() { if (!raf) raf = requestAnimationFrame(apply); }
  window.addEventListener('resize', queue);
  apply();

  var btn = doc.querySelector('[data-r=burger],[data-x=burger]'), menu = doc.getElementById('ms-menu');
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
