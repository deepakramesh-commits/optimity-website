// Optimity components loader & active link highlighting
(function() {
  function initNavHighlight() {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('.navlinks a.link');
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute('href');
      var dataNav = links[i].getAttribute('data-nav');
      var target = dataNav || href;
      if (target === path || (path === 'index.html' && (target === 'index.html' || target === '#teardowns'))) {
        if (target !== '#teardowns' || window.location.hash === '#teardowns') {
          if (target === path || (path === 'index.html' && target === 'index.html')) {
            links[i].setAttribute('aria-current', 'page');
          }
        }
      } else {
        links[i].removeAttribute('aria-current');
      }
    }
  }

  function initThemeButtons() {
    var root = document.documentElement;
    var theme = root.getAttribute('data-theme') || 'light';
    var btns = document.querySelectorAll('[data-theme-toggle]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].textContent = theme === 'dark' ? '◑ Light' : '◐ Dark';
      btns[i].setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  function loadComponent(id, file, callback) {
    var el = document.getElementById(id);
    if (!el) return;
    // If SSI already populated the content (actual DOM elements exist), just run callback
    if (el.children.length > 0) {
      if (callback) callback();
      return;
    }
    fetch(file + '?v=' + new Date().getTime())
      .then(function(res) {
        if (!res.ok) throw new Error('Failed to load ' + file);
        return res.text();
      })
      .then(function(html) {
        el.innerHTML = html;
        if (callback) callback();
      })
      .catch(function(err) {
        console.error('Error loading component ' + file + ':', err);
      });
  }

  document.addEventListener('DOMContentLoaded', function() {
    loadComponent('site-header', 'header.html', function() {
      initNavHighlight();
      initThemeButtons();
    });
    loadComponent('site-footer', 'footer.html', function() {
      initThemeButtons();
    });
  });
})();
