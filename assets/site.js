/* ==========================================================================
   Όμιλος Μπριτζ Ηρακλείου – site settings + shared menu / footer / popup
   --------------------------------------------------------------------------
   The things you will edit most often are in the SITE block right below:
     • popup  → the lesson poster. Set  enabled: false  to switch it off.
     • menu   → the left-hand navigation (add / remove / rename entries; icon = one of the names in ICON below).
     • footer → address, opening hours, e-mail, phone numbers.
   Paths are written relative to the site root (e.g. 'lessons/'); a full address starting with https:// is used as it is (add newTab: true to open it in a new tab).
   ========================================================================== */

const SITE = {

  /* ----- Popup (lesson poster) ----- */
  popup: {
    enabled: false,                       // true = show, false = hide
    id: 'mathimata-2026',                 // change this when you change the poster, so people who closed the old one see the new one
    image: 'assets/img/mathimata-2026.png', // the poster image (upload a new file and change this path)
    alt: 'Τα μαθήματα μπριτζ ξεκινούν – Λεωφόρος Δημοκρατίας 73',
    link: 'lessons/',                     // where a click on the poster goes ('' = nowhere)
    delayMs: 500,                         // wait this long before it appears
    hideDays: 30                          // after being closed, stay hidden for this many days
  },

  /* ----- Menu (the logo at the top of the bar is the link to the home page) ----- */
  menu: [
    { label: 'Όμιλος', icon: 'users', children: [
      { label: 'Το Διοικητικό συμβούλιο του ΟΜΗ', href: 'ds/' },
      { label: 'Οι αθλητές μας', href: 'https://hellasbridge.org/bridge/players/club/64', newTab: true }
    ]},
    { label: 'Το παιχνίδι', icon: 'info', children: [
      { label: 'Γενικές πληροφορίες', href: 'γενικές-πληροφορίες-για-το-μπριτζ/' },
      { label: 'Γιατί να μάθετε ΜΠΡΙΤΖ', href: 'γιατί-να-μάθετε-μπριτζ/' },
      { label: 'Χρήσιμα', href: 'χρήσιμα/' }
    ]},
    { label: 'Βιβλιοθήκη', icon: 'book', href: 'library/' },
    { label: 'Πώς να έρθετε', icon: 'map', href: 'directions_gr/' },
    { label: 'Μαθήματα', icon: 'cap', href: 'lessons/' },
    { label: 'Μάθε Μπριτζ', icon: 'monitor', href: 'https://learn.heraklion-bridge.gr/', newTab: true },
    { label: 'Πρόγραμμα', icon: 'calendar', href: 'https://program.heraklion-bridge.gr/', newTab: true },
    { label: 'English', icon: 'globe', children: [
      { label: 'Home', href: 'home/' },
      { label: 'Directions', href: 'directions/' }
    ]}
  ],
  themeLabel: 'Σκούρο θέμα',

  /* ----- Footer ----- */
  footer: {
    address: ['Λεωφόρος Δημοκρατίας 73'],
    hours: ['Κυριακή: 19.30-23.00', 'Δευτέρα 19:30-23:00', 'Τετάρτη: 19.30-23.00', 'Πέμπτη 19:30-23:00'],
    hoursEn: ['Sunday: 19:30-23:00', 'Monday: 19:30-23:00', 'Wednesday: 19:30-23:00', 'Thursday: 19:30-23:00'],  // shown on the English pages
    emailUser: 'omi', emailDomain: 'hellasbridge.org',   // kept in two parts and only put together after a visitor moves the mouse, touches the screen or presses a key, so e-mail harvesting bots never see the address
    facebook: 'http://fb.com/HeraklionBridgeClub',
    instagram: 'https://www.instagram.com/heraklionbridgeclub/',
    social: 'HeraklionBridgeClub',
    phones: [
      { name: 'Κωτσόπουλος Γιάννης', tel: '+30 6936852562' },
      { name: 'Σαράντου Εύα-Μαρίνα', tel: '+30 6944814373' },
      { name: 'Σαράτσης Φίλιππος', tel: '+30 6974412988' }
    ]
  }
};

/* ==========================================================================
   Below this line: the code that draws the shared parts. No need to edit.
   ========================================================================== */
(function () {
  'use strict';

  var script = document.currentScript;
  var ROOT = script ? script.src.replace(/assets\/site\.js(\?.*)?$/, '') : '/';
  var path = decodeURIComponent(location.pathname);
  var rootPath = decodeURIComponent(new URL(ROOT).pathname);
  var here = path.indexOf(rootPath) === 0 ? path.slice(rootPath.length) : path;
  here = here.replace(/index\.html$/, '');

  var ICON = {
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    map: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    cap: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
    monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    chev: '<path d="M9 18l6-6-6-6"/>',
    bars: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    x: '<path d="M18 6L6 18M6 6l12 12"/>',
    mail: '<path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="M22 6l-10 7L2 6"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>',
    up: '<path d="M12 19V5M5 12l7-7 7 7"/>'
  };
  function svg(name, cls) {
    return '<svg class="' + (cls || '') + '" viewBox="0 0 24 24" aria-hidden="true">' + ICON[name] + '</svg>';
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  }
  function url(href) { return /^https?:\/\//.test(href) ? href : encodeURI(ROOT + href); }
  function isCurrent(href) { return href === here || (href === '' && here === ''); }

  /* ----- theme (light / dark): the choice is kept on the device; with no choice it follows the device ----- */
  function currentTheme() {
    var t = document.documentElement.getAttribute('data-theme');
    if (t) return t;
    try { t = localStorage.getItem('theme'); } catch (e) {}
    return t === 'dark' || t === 'light' ? t : (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    var b = document.querySelector('.theme-btn');
    if (b) b.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
  }
  applyTheme(currentTheme());

  /* ----- menu bar ----- */
  function buildRail() {
    var items = SITE.menu.map(function (m) {
      if (m.children) {
        var cur = m.children.some(function (c) { return isCurrent(c.href); });
        var subs = m.children.map(function (c) {
          return '<li' + (isCurrent(c.href) ? ' class="current"' : '') + '><a href="' + esc(url(c.href)) + '"' + (c.newTab ? ' target="_blank" rel="noopener"' : '') + '>' + esc(c.label) + '</a></li>';
        }).join('');
        return '<li class="rail-item has-sub' + (cur ? ' current' : '') + '">' +
          '<button type="button" class="rail-link sub-toggle" aria-expanded="false">' + svg(m.icon) + '<span class="lbl">' + esc(m.label) + '</span>' + svg('chev', 'chev') + '</button>' +
          '<ul class="fly"><li class="fly-title">' + esc(m.label) + '</li>' + subs + '</ul></li>';
      }
      var on = isCurrent(m.href);
      return '<li class="rail-item' + (on ? ' current' : '') + '"><a class="rail-link" href="' + esc(url(m.href)) + '"' + (m.newTab ? ' target="_blank" rel="noopener"' : '') + (on ? ' aria-current="page"' : '') + '>' +
        svg(m.icon) + '<span class="lbl">' + esc(m.label) + '</span></a></li>';
    }).join('');

    var rail = document.createElement('nav');
    rail.className = 'rail';
    rail.setAttribute('aria-label', 'Κύριο μενού');
    rail.innerHTML =
      '<a class="rail-brand" href="' + esc(url('')) + '"' + (here === '' ? ' aria-current="page"' : '') + ' aria-label="Όμιλος Μπριτζ Ηρακλείου – αρχική">' +
        '<img src="' + esc(url('assets/img/logo.png')) + '" width="40" height="40" alt=""><span class="brand-name">Όμιλος Μπριτζ<br>Ηρακλείου</span></a>' +
      '<span class="spacer rail-gap"></span>' +
      '<button type="button" class="rail-link theme-btn" aria-label="' + esc(SITE.themeLabel) + '" aria-pressed="' + (currentTheme() === 'dark') + '">' +
        svg('moon', 'i-moon') + svg('sun', 'i-sun') + '<span class="lbl">' + esc(SITE.themeLabel) + '</span></button>' +
      '<button type="button" class="rail-toggle" aria-expanded="false" aria-controls="site-nav" aria-label="Μενού">' + svg('bars', 'i-bars') + svg('x', 'i-x') + '</button>' +
      '<ul class="rail-list" id="site-nav">' + items + '</ul>';
    /* on a wide screen the list sits between the logo and the theme button */
    var list = rail.querySelector('.rail-list');
    rail.insertBefore(list, rail.querySelector('.rail-gap'));
    rail.querySelector('.rail-gap').className = 'spacer';
    document.body.insertBefore(rail, document.body.firstChild);

    var toggle = rail.querySelector('.rail-toggle');
    toggle.addEventListener('click', function () {
      var open = list.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    rail.querySelectorAll('.sub-toggle').forEach(function (b) {
      b.addEventListener('click', function () {
        var li = b.parentNode;
        var open = !li.classList.contains('open');
        rail.querySelectorAll('.has-sub.open').forEach(function (o) { o.classList.remove('open'); o.firstChild.setAttribute('aria-expanded', 'false'); });
        if (open) li.classList.add('open');
        b.setAttribute('aria-expanded', open);
      });
    });
    document.addEventListener('click', function (e) {
      if (!rail.contains(e.target)) {
        rail.querySelectorAll('.has-sub.open').forEach(function (li) { li.classList.remove('open'); li.firstChild.setAttribute('aria-expanded', 'false'); });
        list.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    rail.querySelector('.theme-btn').addEventListener('click', function () {
      var t = currentTheme() === 'dark' ? 'light' : 'dark';
      applyTheme(t);
      try { localStorage.setItem('theme', t); } catch (e) {}
    });

    var skip = document.createElement('a');
    skip.className = 'skip';
    skip.href = '#main';
    skip.textContent = 'Μετάβαση στο περιεχόμενο';
    document.body.insertBefore(skip, document.body.firstChild);
  }

  /* ----- footer ----- */
  function buildFooter() {
    var f = SITE.footer;
    var isEnglish = /^(home|directions)\//.test(here);
    var phones = f.phones.map(function (p) {
      return '<p>' + esc(p.name) + '<br><a href="tel:' + esc(p.tel.replace(/\s+/g, '')) + '">' + esc(p.tel) + '</a></p>';
    }).join('');
    var footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML =
      '<div class="cols">' +
        '<div><h2>' + (isEnglish ? 'Where &amp; when' : 'Πού &amp; πότε') + '</h2>' + f.address.map(esc).join('<br>') + '<br><br>' + (isEnglish ? f.hoursEn : f.hours).map(esc).join('<br>') + '</div>' +
        '<div><h2>' + (isEnglish ? 'Contact' : 'Επικοινωνία') + '</h2><ul>' +
          '<li>' + svg('mail', 'ico') + '<a class="obf-mail" href="#" data-u="' + esc(f.emailUser) + '" data-d="' + esc(f.emailDomain) + '">email</a></li>' +
          '<li>' + svg('facebook', 'ico') + '<a href="' + esc(f.facebook) + '" rel="noopener">' + esc(f.social) + '</a></li>' +
          '<li>' + svg('instagram', 'ico') + '<a href="' + esc(f.instagram) + '" rel="noopener">' + esc(f.social) + '</a></li>' +
        '</ul></div>' +
        '<div class="phones"><h2>' + (isEnglish ? 'Phone' : 'Τηλέφωνα') + '</h2>' + phones + '</div>' +
      '</div>' +
      '<div class="copy">© ' + new Date().getFullYear() + ' Όμιλος Μπριτζ Ηρακλείου (ΟΜΗ)</div>';
    document.body.appendChild(footer);
  }

  /* ----- scroll-to-top button ----- */
  function buildToTop() {
    var b = document.createElement('button');
    b.className = 'to-top';
    b.type = 'button';
    b.setAttribute('aria-label', 'Επιστροφή στην κορυφή');
    b.innerHTML = svg('up');
    b.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    document.body.appendChild(b);
    function toggle() { b.classList.toggle('show', window.scrollY > 300); }
    window.addEventListener('scroll', toggle, { passive: true });
    toggle();
  }

  /* ----- popup ----- */
  function initPopup() {
    var p = SITE.popup;
    if (!p || !p.enabled) return;
    var key = 'popup-closed-' + p.id;
    try {
      var until = parseInt(localStorage.getItem(key) || '0', 10);
      if (until > Date.now()) return;
    } catch (e) { /* storage blocked – just show it */ }

    var overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', p.alt || 'Ανακοίνωση');
    var img = '<img src="' + esc(url(p.image)) + '" alt="' + esc(p.alt || '') + '">';
    overlay.innerHTML =
      '<div class="popup-box">' +
        '<button class="popup-close" type="button">CLOSE</button>' +
        (p.link ? '<a href="' + esc(url(p.link)) + '">' + img + '</a>' : img) +
      '</div>';
    document.body.appendChild(overlay);

    var previous = null;
    function close() {
      overlay.classList.remove('visible');
      setTimeout(function () { overlay.classList.remove('show'); }, 350);
      document.body.classList.remove('popup-open');
      document.removeEventListener('keydown', onKey);
      try { localStorage.setItem(key, String(Date.now() + p.hideDays * 864e5)); } catch (e) {}
      if (previous && previous.focus) previous.focus();
    }
    function onKey(e) { if (e.key === 'Escape') close(); }
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    overlay.querySelector('.popup-close').addEventListener('click', close);

    setTimeout(function () {
      previous = document.activeElement;
      overlay.classList.add('show');
      requestAnimationFrame(function () { overlay.classList.add('visible'); });
      document.body.classList.add('popup-open');
      document.addEventListener('keydown', onKey);
      overlay.querySelector('.popup-close').focus();
    }, p.delayMs || 0);
  }

  /* ----- e-mail addresses (hidden from harvesting bots) -----
     Any  <a class="obf-mail" href="#" data-u="name" data-d="example.gr">email</a>
     becomes a real mailto link with the full address after the first real user action. */
  function initMail() {
    var els = document.querySelectorAll('.obf-mail');
    if (!els.length) return;
    var events = ['pointermove', 'pointerdown', 'touchstart', 'keydown'];
    function reveal() {
      events.forEach(function (ev) { window.removeEventListener(ev, reveal); });
      els.forEach(function (el) {
        var addr = el.getAttribute('data-u') + '@' + el.getAttribute('data-d');
        el.href = 'mailto:' + addr;
        el.textContent = addr;
      });
    }
    events.forEach(function (ev) { window.addEventListener(ev, reveal, { passive: true }); });
  }

  function init() {
    buildRail();
    buildFooter();
    buildToTop();
    initMail();
    initPopup();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
