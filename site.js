// Optimity — page behaviour: section entrances, the Nexus AI sample panel, practice switches,
// the pinned teardown, product engine tabs, office clocks, dropdown state.
// Every page reads fully without this file; it only adds interaction and motion.
// Two root classes: `has-js` means this file ran; `rise-on` means entrances are active
// (only when IntersectionObserver exists and reduced motion is off). Only `rise-on` hides content.
(function () {
  'use strict';
  var root = document.documentElement;
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var STAGGER_CAP = 3; // matches the min(var(--i), 3) cap in styles.css

  // Section entrances. Elements already on screen are shown at once, so nothing flashes.
  // Common blocks rise in without hand-tagging; groups stagger by their position.
  var AUTO_RISE = 'main .sec h2, .statements > div, .cap-cols li, .next-steps li, table.data tbody tr, .stage-steps > li, .leader .bio p, .engine-btn, .facts > div, .two-col > div, .offices > div, .close-line > *, .close-ink > div > *, .flow li, .timeline > li';
  function initRise() {
    if (reduced || !('IntersectionObserver' in window)) return;
    var auto = document.querySelectorAll(AUTO_RISE);
    for (var a = 0; a < auto.length; a++) {
      if (auto[a].hasAttribute('data-rise') || auto[a].closest('[data-rise]')) continue;
      var sib = 0, n = auto[a];
      while ((n = n.previousElementSibling)) sib++;
      auto[a].setAttribute('data-rise', '');
      auto[a].style.setProperty('--i', Math.min(sib, STAGGER_CAP));
    }
    var els = document.querySelectorAll('[data-rise]');
    if (!els.length) return;
    // Read every position first, then write, so the browser lays out once.
    var vh = window.innerHeight, onScreen = [];
    for (var i = 0; i < els.length; i++) onScreen.push(els[i].getBoundingClientRect().top < vh * 0.92);
    for (var k = 0; k < els.length; k++) if (onScreen[k]) els[k].classList.add('in');
    root.classList.add('rise-on');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -4% 0px' });
    for (var j = 0; j < els.length; j++) if (!onScreen[j]) io.observe(els[j]);
    // Never leave anything hidden: at the bottom of the page, or when printing, show the rest.
    var ticking = false;
    function revealAll() {
      for (var r = 0; r < els.length; r++) els[r].classList.add('in');
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
    }
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        ticking = false;
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) revealAll();
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('beforeprint', revealAll);
  }

  // Single-choice button groups (radio semantics): click or arrow keys move the choice.
  function initSingleGroups() {
    var groups = document.querySelectorAll('[data-single]');
    for (var g = 0; g < groups.length; g++) {
      var items = groups[g].querySelectorAll('[role="radio"]');
      for (var i = 0; i < items.length; i++) items[i].tabIndex = items[i].getAttribute('aria-checked') === 'true' ? 0 : -1;
    }
    document.addEventListener('keydown', function (e) {
      var item = e.target.closest && e.target.closest('[role="radio"], [role="tab"]');
      if (!item) return;
      var keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
      if (!(e.key in keys)) return;
      var group = item.closest('[data-single], [role="tablist"]');
      if (!group) return;
      var list = [].slice.call(group.querySelectorAll('[role="radio"], [role="tab"]')).filter(function (b) { return b.offsetParent; });
      var next = list[(list.indexOf(item) + keys[e.key] + list.length) % list.length];
      if (!next) return;
      e.preventDefault();
      next.focus();
      next.click();
    });
  }
  function check(group, chosen, attr) {
    var items = group.querySelectorAll('[role="radio"], [role="tab"]');
    for (var i = 0; i < items.length; i++) {
      var on = items[i] === chosen;
      items[i].setAttribute(attr, on ? 'true' : 'false');
      items[i].tabIndex = on ? 0 : -1;
    }
  }

  // Nexus AI sample panel. Sample data only; the page says so next to the panel.
  // QUESTIONS.invoices is mirrored by the no-JS fallback table in index.html. Change both together.
  var QUESTIONS = {
    invoices: {
      src: 'ERPNext', engine: 'SmartOps',
      q: 'Which invoices are more than 30 days overdue?',
      cols: ['Invoice', 'Due', 'Days late', 'Balance'], num: [2, 3],
      rows: [['SINV-0418', '02 Sep', '47', '4,820.00'], ['SINV-0431', '09 Sep', '40', '1,265.50'], ['SINV-0457', '15 Sep', '34', '9,310.00']],
      bars: [62, 40, 95, 28], labels: ['31–40 d', '41–50 d', '51–60 d', '60+ d'], hi: 2
    },
    orders: {
      src: 'Odoo', engine: 'SmartOps',
      q: "Which sales orders from last week haven't shipped?",
      cols: ['Order', 'Ordered', 'Status', 'Value'], num: [3],
      rows: [['S00291', 'Mon', 'Waiting for stock', '3,140.00'], ['S00296', 'Tue', 'Packed, not collected', '860.00'], ['S00304', 'Thu', 'Waiting for payment', '12,700.00']],
      bars: [30, 55, 20, 70, 45], labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], hi: 3
    },
    deals: {
      src: 'HubSpot', engine: 'SmartOps',
      q: 'Which deals have sat in proposal stage for over two weeks?',
      cols: ['Deal', 'Stage', 'Days in stage', 'Amount'], num: [2, 3],
      rows: [['Annual service renewal', 'Proposal', '23', '18,000.00'], ['Warehouse rollout', 'Proposal', '17', '42,500.00'], ['Pilot, two sites', 'Proposal', '15', '6,900.00']],
      bars: [80, 52, 34], labels: ['Proposal', 'Negotiation', 'Contract'], hi: 0
    },
    docs: {
      src: 'Documents', engine: 'DocIntellect',
      q: 'What are the late payment terms in the supplier agreement?',
      text: 'Payment is due 30 days from invoice. After 45 days a 1.5% monthly late fee applies, and the supplier may pause priority support.',
      quote: '“…late fee of 1.5% per month on balances unpaid after 45 days…”',
      cite: 'Supplier agreement, section 4.2'
    },
    sql: {
      src: 'PostgreSQL', engine: 'SQL Database Agent', readOnly: true,
      q: 'How many customers ordered more than once this quarter?',
      sqlText: "SELECT count(*) FROM (\n  SELECT customer_id FROM orders\n  WHERE created_at >= date_trunc('quarter', now())\n  GROUP BY customer_id HAVING count(*) > 1\n) repeat_customers;",
      cols: ['repeat_customers'], num: [0], rows: [['214']]
    }
  };

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function tableFor(d) {
    var t = el('table', 'ui-table'), thead = el('thead'), tr = el('tr');
    d.cols.forEach(function (c, i) { var th = el('th', d.num.indexOf(i) > -1 ? 'num' : '', c); th.scope = 'col'; tr.appendChild(th); });
    thead.appendChild(tr); t.appendChild(thead);
    var tb = el('tbody');
    d.rows.forEach(function (r) {
      var row = el('tr');
      r.forEach(function (v, i) { row.appendChild(el('td', d.num.indexOf(i) > -1 ? 'num' : '', v)); });
      tb.appendChild(row);
    });
    t.appendChild(tb);
    return t;
  }

  function initDemo() {
    var demo = document.querySelector('[data-demo]');
    if (!demo) return;
    var qText = demo.querySelector('[data-q-text]');
    var route = demo.querySelector('[data-route]');
    var out = demo.querySelector('[data-out]');
    var announce = demo.querySelector('[data-announce]');
    if (!qText || !route || !out) return;
    var rowsBtn = demo.querySelector('[data-opt="rows"]');
    var chartBtn = demo.querySelector('[data-opt="chart"]');
    var current = 'invoices';

    function render(say) {
      var d = QUESTIONS[current];
      if (!d) return;
      qText.textContent = d.q;
      route.textContent = '';
      route.appendChild(document.createTextNode('Sent to '));
      route.appendChild(el('b', '', d.engine));
      route.appendChild(document.createTextNode(' · ' + d.src + (d.readOnly ? ' · read-only' : '')));
      out.textContent = '';
      var showRows = !rowsBtn || rowsBtn.getAttribute('aria-pressed') === 'true';
      var showChart = !chartBtn || chartBtn.getAttribute('aria-pressed') === 'true';
      var shown = false;
      if (d.text) {
        out.appendChild(el('p', '', d.text));
        if (showRows) {
          var c = el('p', 'cite', d.quote);
          c.appendChild(el('span', 'src', d.cite));
          out.appendChild(c);
        }
        shown = true;
      } else {
        if (d.sqlText) {
          var pre = el('pre', 'sql');
          pre.appendChild(el('code', '', d.sqlText));
          out.appendChild(pre);
          shown = true;
        }
        if (showRows) { out.appendChild(tableFor(d)); shown = true; }
        if (d.bars && showChart) {
          var bars = el('div', reduced ? 'bars' : 'bars grow'), labels = el('div', 'bar-labels');
          bars.setAttribute('aria-hidden', 'true');
          d.bars.forEach(function (h, i) {
            var b = el('span', i === d.hi ? 'hi' : '');
            b.style.height = h + '%';
            bars.appendChild(b);
            labels.appendChild(el('span', '', d.labels[i]));
          });
          out.appendChild(bars); out.appendChild(labels);
          if (!reduced) requestAnimationFrame(function () { requestAnimationFrame(function () { bars.classList.remove('grow'); }); });
          shown = true;
        }
      }
      if (!shown) out.appendChild(el('p', 'sample', 'The rows and the chart are switched off. Turn either back on to see the answer.'));
      out.appendChild(el('p', 'sample sub', d.text ? 'Sample document, not a client’s.' : 'Sample data, not a client’s.'));

      var chips = demo.querySelectorAll('[data-q]');
      for (var i = 0; i < chips.length; i++) if (chips[i].getAttribute('data-q') === current) check(chips[i].closest('[data-single]'), chips[i], 'aria-checked');
      var srcs = demo.querySelectorAll('[data-src]');
      for (var j = 0; j < srcs.length; j++) if (srcs[j].getAttribute('data-src') === d.src) check(srcs[j].closest('[data-single]'), srcs[j], 'aria-checked');
      if (say && announce) announce.textContent = d.text ? 'Answer from ' + d.src + '.' : (showRows ? d.rows.length + ' rows' : 'Answer') + ' from ' + d.src + '.';
    }

    demo.addEventListener('click', function (e) {
      var t = e.target.closest('button');
      if (!t || !demo.contains(t)) return;
      if (t.hasAttribute('data-q')) { current = t.getAttribute('data-q'); render(true); }
      else if (t.hasAttribute('data-src')) {
        var s = t.getAttribute('data-src');
        for (var k in QUESTIONS) if (QUESTIONS[k].src === s) { current = k; break; }
        render(true);
      } else if (t.hasAttribute('data-opt')) {
        t.setAttribute('aria-pressed', t.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
        render(true);
      }
    });
    render(false);
  }

  // Sentences with switches (home) and engine tabs (Nexus AI page).
  function initPressables() {
    document.addEventListener('click', function (e) {
      var sw = e.target.closest && e.target.closest('.sw');
      if (sw) { sw.setAttribute('aria-pressed', sw.getAttribute('aria-pressed') === 'true' ? 'false' : 'true'); return; }
      var tab = e.target.closest && e.target.closest('.engine-btn');
      if (!tab) return;
      var wrap = tab.closest('.engines');
      if (!wrap) return;
      check(tab.closest('[role="tablist"]') || wrap, tab, 'aria-selected');
      var panes = wrap.querySelectorAll('.engine-pane');
      for (var j = 0; j < panes.length; j++) panes[j].classList.toggle('on', panes[j].id === tab.getAttribute('aria-controls'));
    });
  }

  // Pinned teardown: the statement nearest the middle of the screen sets the card's state.
  function initPin() {
    var pin = document.querySelector('.pin');
    if (!pin || !('IntersectionObserver' in window)) return;
    var stage = pin.querySelector('.stage');
    var steps = pin.querySelectorAll('.step');
    if (!stage || !steps.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        for (var i = 0; i < steps.length; i++) steps[i].classList.toggle('act', steps[i] === e.target);
        stage.setAttribute('data-state', e.target.getAttribute('data-step'));
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    for (var i = 0; i < steps.length; i++) io.observe(steps[i]);
  }

  // Office clocks (about page). Zones are fixed strings in the page; a bad one keeps its label.
  function initClocks() {
    var clocks = document.querySelectorAll('[data-tz]');
    if (!clocks.length || !window.Intl) return;
    function tick() {
      var now = new Date();
      for (var i = 0; i < clocks.length; i++) {
        var tz = clocks[i].getAttribute('data-tz');
        try {
          clocks[i].textContent = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: tz }).format(now);
        } catch (e) { if (window.console) console.warn('Unknown time zone: ' + tz); }
      }
    }
    tick();
    setInterval(tick, 30000);
  }

  // Dropdown state for assistive tech, Escape to close, and the menu button's name.
  function initNavState() {
    function setDropdowns() {
      var dds = document.querySelectorAll('.nav-dropdown');
      for (var i = 0; i < dds.length; i++) {
        var open = !dds[i].classList.contains('dd-closed') && (dds[i].matches(':hover') || dds[i].contains(document.activeElement));
        var trig = dds[i].querySelector('.nav-dropdown-trigger');
        var val = open ? 'true' : 'false';
        if (trig && trig.getAttribute('aria-expanded') !== val) trig.setAttribute('aria-expanded', val);
      }
    }
    function inNav(e) { return e.target.closest && e.target.closest('nav.site'); }
    document.addEventListener('focusin', function (e) { if (inNav(e)) setDropdowns(); });
    document.addEventListener('focusout', function (e) { if (inNav(e)) setTimeout(setDropdowns, 0); });
    document.addEventListener('mouseover', function (e) { if (inNav(e)) setDropdowns(); });
    document.addEventListener('mouseout', function (e) {
      var dd = e.target.closest && e.target.closest('.nav-dropdown');
      if (dd && !dd.contains(e.relatedTarget)) { dd.classList.remove('dd-closed'); setTimeout(setDropdowns, 0); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      var dd = e.target.closest && e.target.closest('.nav-dropdown');
      if (!dd) return;
      dd.classList.add('dd-closed');
      var trig = dd.querySelector('.nav-dropdown-trigger');
      if (trig) trig.focus();
      setDropdowns();
    });
    document.addEventListener('focusout', function (e) {
      var dd = e.target.closest && e.target.closest('.nav-dropdown');
      if (dd && !dd.contains(e.relatedTarget)) dd.classList.remove('dd-closed');
    });
    // theme.js flips the checkbox from code (keyboard, link clicks), which fires no change event,
    // so the button label is synced after every interaction that can move it.
    function syncMenu() {
      var cb = document.getElementById('nav-cb');
      var btn = document.querySelector('.menu-btn');
      if (!cb || !btn) return;
      btn.textContent = cb.checked ? 'Close' : 'Menu';
      btn.setAttribute('aria-label', cb.checked ? 'Close the menu' : 'Open the menu');
      btn.setAttribute('aria-expanded', cb.checked ? 'true' : 'false');
    }
    document.addEventListener('change', syncMenu);
    document.addEventListener('click', function (e) { if (inNav(e)) setTimeout(syncMenu, 0); });
    document.addEventListener('keydown', function (e) { if (inNav(e)) setTimeout(syncMenu, 0); });
  }

  function start() {
    root.classList.add('has-js');
    initRise();
    initSingleGroups();
    initDemo();
    initPressables();
    initPin();
    initClocks();
    initNavState();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
