/* ── Language manager ─────────────────────────────────────────────────────
   Apply immediately (synchronous, in <head>) to avoid flash of wrong lang.
   Exposes window.toggleLang() used by the sidebar button.
──────────────────────────────────────────────────────────────────────────── */
(function () {
  var stored = localStorage.getItem('thesis-lang') || 'fr';

  function apply(l) {
    var html = document.documentElement;
    html.classList.remove('lang-fr', 'lang-en');
    html.classList.add('lang-' + l);
    html.lang = l;
    localStorage.setItem('thesis-lang', l);
  }

  apply(stored);

  window.toggleLang = function () {
    var cur = localStorage.getItem('thesis-lang') || 'fr';
    apply(cur === 'fr' ? 'en' : 'fr');
  };
})();
