// Optimity — page behaviour. Motion only where it explains a product:
// the stage that shows each step's screen, the Nexus AI engine tabs, and nav/menu state.
// Without this file (or IntersectionObserver) the split stacks and each step shows its own screen inline.
(function () {
  'use strict';
  var root = document.documentElement;

  // The stage: the step nearest the middle of the screen decides which product screen it shows.
  // It only runs while the stage is on screen (wider than 1040px); on phones each step shows its own screen.
  var FADE = 160; // matches the opacity transition on .stage .shot img in styles.css
  function initStage() {
    var stages = document.querySelectorAll('[data-stage]');
    if (!stages.length) return;
    if (!('IntersectionObserver' in window)) { root.classList.add('no-stage'); return; }
    var wide = window.matchMedia('(min-width: 1040.01px)');
    var calm = window.matchMedia('(prefers-reduced-motion: reduce)');
    for (var s = 0; s < stages.length; s++) (function (stage) {
      var fig = stage.querySelector('.shot');
      var img = fig && fig.querySelector('img');
      var cap = fig && fig.querySelector('figcaption');
      var scope = stage.closest('.split');
      if (!img || !scope) return;
      var steps = [].slice.call(scope.querySelectorAll('[data-shot]'));
      var current = img.getAttribute('src');
      var timer = null, started = false;
      function apply(step) {
        img.src = step.getAttribute('data-shot');
        img.alt = step.getAttribute('data-alt') || '';
        if (cap) {
          // A step can carry its own caption in data-cap; without one the caption stays empty.
          var text = step.getAttribute('data-cap') || '';
          cap.textContent = text;
          cap.hidden = !text;
        }
      }
      function show(step) {
        var src = step.getAttribute('data-shot');
        if (!src || src === current) return;
        current = src;
        clearTimeout(timer);
        if (calm.matches) { apply(step); return; }
        fig.classList.add('swap');
        timer = setTimeout(function () { apply(step); fig.classList.remove('swap'); }, FADE);
      }
      function start() {
        if (started || !wide.matches) return;
        started = true;
        // The first screen is already showing; give it its own step's caption (empty for a real screenshot).
        for (var c = 0; c < steps.length; c++) if (steps[c].getAttribute('data-shot') === current) { apply(steps[c]); break; }
        for (var p = 0; p < steps.length; p++) { var pre = new Image(); pre.src = steps[p].getAttribute('data-shot'); }
        // Track every step inside the middle band and show the last one, so leaving the band counts too.
        var inBand = [];
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            var i = inBand.indexOf(e.target);
            if (e.isIntersecting && i < 0) inBand.push(e.target);
            if (!e.isIntersecting && i >= 0) inBand.splice(i, 1);
          });
          var last = null;
          for (var k = 0; k < steps.length; k++) if (inBand.indexOf(steps[k]) >= 0) last = steps[k];
          if (last) show(last);
        }, { rootMargin: '-45% 0px -45% 0px' });
        for (var i = 0; i < steps.length; i++) io.observe(steps[i]);
      }
      start();
      if (!started && wide.addEventListener) wide.addEventListener('change', start);
    })(stages[s]);
  }

  // Engine tabs on the Nexus AI page (arrow keys, Home and End move between tabs).
  function initTabs() {
    var lists = document.querySelectorAll('[role="tablist"]');
    for (var l = 0; l < lists.length; l++) (function (list) {
      var tabs = [].slice.call(list.querySelectorAll('[role="tab"]'));
      function select(tab, focus) {
        tabs.forEach(function (t) {
          var on = t === tab;
          t.setAttribute('aria-selected', on ? 'true' : 'false');
          t.tabIndex = on ? 0 : -1;
          var panel = document.getElementById(t.getAttribute('aria-controls'));
          if (panel) panel.classList.toggle('on', on);
        });
        if (focus) tab.focus();
      }
      list.addEventListener('click', function (e) {
        var t = e.target.closest('[role="tab"]');
        if (t) select(t, false);
      });
      list.addEventListener('keydown', function (e) {
        var keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
        var i = tabs.indexOf(document.activeElement);
        if (i < 0) return;
        if (e.key === 'Home' || e.key === 'End') { e.preventDefault(); select(tabs[e.key === 'Home' ? 0 : tabs.length - 1], true); return; }
        if (!(e.key in keys)) return;
        e.preventDefault();
        select(tabs[(i + keys[e.key] + tabs.length) % tabs.length], true);
      });
    })(lists[l]);
  }

  // Dropdown state for assistive tech, Escape to close the drawer or a dropdown, and the menu button's name.
  function initNav() {
    function inNav(e) { return e.target.closest && e.target.closest('nav.site'); }
    function setDropdowns() {
      var dds = document.querySelectorAll('.nav-dropdown');
      for (var i = 0; i < dds.length; i++) {
        var open = !dds[i].classList.contains('dd-closed') && (dds[i].matches(':hover') || dds[i].contains(document.activeElement));
        var trig = dds[i].querySelector('.nav-dropdown-trigger');
        var val = open ? 'true' : 'false';
        if (trig && trig.getAttribute('aria-expanded') !== val) trig.setAttribute('aria-expanded', val);
      }
    }
    document.addEventListener('focusin', function (e) { if (inNav(e)) setDropdowns(); });
    document.addEventListener('mouseover', function (e) { if (inNav(e)) setDropdowns(); });
    document.addEventListener('focusout', function (e) {
      var dd = e.target.closest && e.target.closest('.nav-dropdown');
      if (dd && !dd.contains(e.relatedTarget)) dd.classList.remove('dd-closed');
      if (inNav(e)) setTimeout(setDropdowns, 0);
    });
    document.addEventListener('mouseout', function (e) {
      var dd = e.target.closest && e.target.closest('.nav-dropdown');
      if (dd && !dd.contains(e.relatedTarget)) { dd.classList.remove('dd-closed'); setTimeout(setDropdowns, 0); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      var cb = document.getElementById('nav-cb');
      if (cb && cb.checked) {
        cb.checked = false;
        var btn = document.querySelector('.menu-btn');
        if (btn) btn.focus();
        syncMenu();
        return;
      }
      var dd = e.target.closest && e.target.closest('.nav-dropdown');
      if (!dd) return;
      dd.classList.add('dd-closed');
      var trig = dd.querySelector('.nav-dropdown-trigger');
      if (trig) trig.focus();
      setDropdowns();
    });
    // theme.js flips the menu checkbox from code (keyboard, link clicks), which fires no change event,
    // so the button label is synced after every interaction in the nav.
    function syncMenu() {
      var cb = document.getElementById('nav-cb');
      var btn = document.querySelector('.menu-btn');
      if (!cb || !btn) return;
      btn.textContent = cb.checked ? 'Close' : 'Menu';
      btn.setAttribute('aria-label', cb.checked ? 'Close the menu' : 'Open the menu');
      btn.setAttribute('aria-expanded', cb.checked ? 'true' : 'false');
    }
    function closeMenu() {
      var cb = document.getElementById('nav-cb');
      if (cb && cb.checked) { cb.checked = false; syncMenu(); }
    }
    document.addEventListener('change', syncMenu);
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('.navlinks a');
      if (a && !a.classList.contains('nav-dropdown-trigger')) closeMenu();
    });
    // A page restored by Back/forward comes back as it was left: close a drawer left open.
    window.addEventListener('pageshow', function (e) { if (e.persisted) closeMenu(); syncMenu(); });
    var wideNav = window.matchMedia('(min-width: 1040.01px)');
    if (wideNav.addEventListener) wideNav.addEventListener('change', function (m) { if (m.matches) closeMenu(); });
    document.addEventListener('click', function (e) { if (inNav(e)) setTimeout(syncMenu, 0); });
    document.addEventListener('keydown', function (e) { if (inNav(e)) setTimeout(syncMenu, 0); });
  }

  function start() {
    root.classList.add('has-js'); // also set in each page's head, so nothing flashes
    initStage();
    initTabs();
    initNav();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
