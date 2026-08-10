// Optimity — theme toggle. Light is default; respects saved choice and OS preference.
(function () {
  var KEY = 'optimity-theme';
  var root = document.documentElement;

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    var btns = document.querySelectorAll('[data-theme-toggle]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].textContent = theme === 'dark' ? '◑ Light' : '◐ Dark';
      btns[i].setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  // Saved choice wins; otherwise follow the OS preference (matches the inline head script).
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  var osDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  apply(saved ? (saved === 'dark' ? 'dark' : 'light') : (osDark ? 'dark' : 'light'));

  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-theme-toggle]');
    if (!t) return;
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem(KEY, next); } catch (e) {}
  });

  // Mobile menu: keyboard toggle on the label, and close after choosing a link.
  document.addEventListener('keydown', function (e) {
    var t = e.target.closest && e.target.closest('.menu-btn');
    if (!t) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      var cb = document.getElementById('nav-cb');
      if (cb) cb.checked = !cb.checked;
    }
  });
  document.addEventListener('click', function (e) {
    var link = e.target.closest && e.target.closest('.navlinks a.link');
    if (!link) return;
    var cb = document.getElementById('nav-cb');
    if (cb) cb.checked = false;
  });

})();
