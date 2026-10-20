// Optimity — page behaviour: section entrances, the Nexus AI sample panel, practice switches,
// the pinned teardown, product engine picker, office clocks, dropdown state.
// Every page reads fully without this file; it only adds interaction and motion.
(function () {
  'use strict';
  var root = document.documentElement;
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Section entrances. Elements already on screen are shown at once, so nothing flashes.
  // Common blocks rise in without hand-tagging; groups stagger by their position.
  var AUTO_RISE = 'main .sec h2, .statements > div, .cap-cols li, .next-steps li, table.data tbody tr, .stage-steps > li, .leader .bio p, .engine-btn, .facts > div, .two-col > div, .offices > div, .close-line > *, .close-ink > div > *, .flow li, .timeline > li';
  function initRise() {
    var auto = document.querySelectorAll(AUTO_RISE);
    for (var a = 0; a < auto.length; a++) {
      if (auto[a].hasAttribute('data-rise') || auto[a].closest('[data-rise]')) continue;
      auto[a].setAttribute('data-rise', '');
      var sib = 0, n = auto[a];
      while ((n = n.previousElementSibling)) sib++;
      auto[a].style.setProperty('--i', Math.min(sib, 6));
    }
    var els = document.querySelectorAll('[data-rise]');
    if (!els.length) return;
    if (reduced || !('IntersectionObserver' in window)) return;
    var vh = window.innerHeight;
    for (var i = 0; i < els.length; i++) {
      if (els[i].getBoundingClientRect().top < vh * 0.92) els[i].classList.add('in');
    }
    root.classList.add('js');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -4% 0px' });
    for (var j = 0; j < els.length; j++) if (!els[j].classList.contains('in')) io.observe(els[j]);
    // Never leave anything hidden: at the bottom of the page, or when printing, show the rest.
    function revealAll() { for (var k = 0; k < els.length; k++) els[k].classList.add('in'); }
    window.addEventListener('scroll', function () {
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) revealAll();
    }, { passive: true });
    window.addEventListener('beforeprint', revealAll);
  }

  // Nexus AI sample panel. Sample data only; the page says so next to the panel.
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
      cite: 'Supplier agreement, section 4.2 · sample document'
    },
    sql: {
      src: 'PostgreSQL', engine: 'SQL Database Agent',
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
    var chips = demo.querySelectorAll('[data-q]');
    var sources = demo.querySelectorAll('[data-src]');
    var rowsBtn = demo.querySelector('[data-opt="rows"]');
    var chartBtn = demo.querySelector('[data-opt="chart"]');
    var current = 'invoices';

    function render() {
      var d = QUESTIONS[current];
      qText.textContent = d.q;
      route.innerHTML = '';
      route.appendChild(document.createTextNode('Sent to '));
      route.appendChild(el('b', '', d.engine));
      route.appendChild(document.createTextNode(' · ' + d.src + ' · read-only'));
      out.innerHTML = '';
      var showRows = !rowsBtn || rowsBtn.getAttribute('aria-pressed') === 'true';
      var showChart = !chartBtn || chartBtn.getAttribute('aria-pressed') === 'true';
      if (d.text) {
        out.appendChild(el('p', '', d.text));
        var c = el('p', 'cite');
        c.appendChild(document.createTextNode('“…late fee of 1.5% per month on balances unpaid after 45 days…”'));
        c.appendChild(el('span', 'src', d.cite));
        if (showRows) out.appendChild(c);
      } else {
        if (d.sqlText) {
          var pre = el('pre', 'sql'), code = el('code', '', d.sqlText);
          pre.appendChild(code); out.appendChild(pre);
        }
        if (showRows) out.appendChild(tableFor(d));
        if (d.bars && showChart) {
          var bars = el('div', 'bars'), labels = el('div', 'bar-labels');
          bars.setAttribute('aria-hidden', 'true');
          d.bars.forEach(function (h, i) {
            var b = el('span', i === d.hi ? 'hi' : '');
            b.style.height = (reduced ? h : 4) + '%';
            bars.appendChild(b);
            labels.appendChild(el('span', '', d.labels[i]));
            if (!reduced) requestAnimationFrame(function () { requestAnimationFrame(function () { b.style.height = h + '%'; }); });
          });
          out.appendChild(bars); out.appendChild(labels);
        }
      }
      for (var i = 0; i < chips.length; i++) chips[i].setAttribute('aria-pressed', chips[i].getAttribute('data-q') === current ? 'true' : 'false');
      for (var j = 0; j < sources.length; j++) sources[j].setAttribute('aria-pressed', sources[j].getAttribute('data-src') === d.src ? 'true' : 'false');
    }

    demo.addEventListener('click', function (e) {
      var t = e.target.closest('button');
      if (!t || !demo.contains(t)) return;
      if (t.hasAttribute('data-q')) { current = t.getAttribute('data-q'); render(); }
      else if (t.hasAttribute('data-src')) {
        var s = t.getAttribute('data-src');
        for (var k in QUESTIONS) if (QUESTIONS[k].src === s) { current = k; break; }
        render();
      } else if (t.hasAttribute('data-opt')) {
        t.setAttribute('aria-pressed', t.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
        render();
      }
    });
    render();
  }

  // Sentences with switches (home) and engine picker (Nexus AI page).
  function initPressables() {
    document.addEventListener('click', function (e) {
      var sw = e.target.closest && e.target.closest('.sw');
      if (sw) { sw.setAttribute('aria-pressed', sw.getAttribute('aria-pressed') === 'true' ? 'false' : 'true'); return; }
      var eb = e.target.closest && e.target.closest('.engine-btn');
      if (eb) {
        var wrap = eb.closest('.engines');
        var btns = wrap.querySelectorAll('.engine-btn');
        for (var i = 0; i < btns.length; i++) btns[i].setAttribute('aria-pressed', btns[i] === eb ? 'true' : 'false');
        var panes = wrap.querySelectorAll('.engine-pane');
        for (var j = 0; j < panes.length; j++) panes[j].classList.toggle('on', panes[j].id === eb.getAttribute('aria-controls'));
      }
    });
  }

  // Pinned teardown: the statement nearest the middle of the screen sets the card's state.
  function initPin() {
    var pin = document.querySelector('.pin');
    if (!pin || !('IntersectionObserver' in window)) return;
    var stage = pin.querySelector('.stage');
    var steps = pin.querySelectorAll('.step');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        for (var i = 0; i < steps.length; i++) steps[i].classList.toggle('act', steps[i] === e.target);
        stage.setAttribute('data-state', e.target.getAttribute('data-step'));
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    for (var i = 0; i < steps.length; i++) io.observe(steps[i]);
  }

  // Office clocks (about page).
  function initClocks() {
    var clocks = document.querySelectorAll('[data-tz]');
    if (!clocks.length || !window.Intl) return;
    function tick() {
      var now = new Date();
      for (var i = 0; i < clocks.length; i++) {
        var tz = clocks[i].getAttribute('data-tz');
        try {
          clocks[i].textContent = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: tz }).format(now);
        } catch (e) {}
      }
    }
    tick();
    setInterval(tick, 30000);
  }

  // Dropdown state for assistive tech, and the menu button's name.
  function initNavState() {
    document.addEventListener('focusin', setDropdowns);
    document.addEventListener('focusout', function () { setTimeout(setDropdowns, 0); });
    document.addEventListener('mouseover', setDropdowns);
    function setDropdowns(e) {
      var dds = document.querySelectorAll('.nav-dropdown');
      for (var i = 0; i < dds.length; i++) {
        var open = dds[i].matches(':hover') || dds[i].contains(document.activeElement);
        var trig = dds[i].querySelector('.nav-dropdown-trigger');
        if (trig) trig.setAttribute('aria-expanded', open ? 'true' : 'false');
      }
    }
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
    document.addEventListener('click', function () { setTimeout(syncMenu, 0); });
    document.addEventListener('keydown', function () { setTimeout(syncMenu, 0); });
  }

  function start() {
    root.classList.add('has-js');
    initRise();
    initDemo();
    initPressables();
    initPin();
    initClocks();
    initNavState();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
