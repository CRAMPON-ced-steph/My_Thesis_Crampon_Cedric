(function () {
  /* ── Sidebar HTML ──────────────────────────────────────────────────── */
  const sidebarHTML = `
    <div class="sidebar-header">
      <div class="sidebar-header-top">
        <div class="sidebar-logo">CNAM</div>
        <button class="lang-toggle" onclick="toggleLang()" title="Switch language / Changer de langue" aria-label="Switch language">
          <span class="lt-fr">FR</span>
          <span class="lt-sep">|</span>
          <span class="lt-en">EN</span>
        </button>
      </div>
      <div class="sidebar-subtitle">
        <span class="fr-text">Thèse de doctorat</span><span class="en-text">Doctoral thesis</span>
      </div>
    </div>
    <ul class="nav-tree">
      <li><a href="garde.html" class="nav-link nav-top">
        <span class="fr-text">Page de garde</span><span class="en-text">Cover page</span>
      </a></li>
      <li><a href="resume.html" class="nav-link nav-top">
        <span class="fr-text">Résumé / Abstract</span><span class="en-text">Summary / Abstract</span>
      </a></li>
      <li><a href="preambule.html" class="nav-link nav-top">
        <span class="fr-text">Préambule</span><span class="en-text">Preamble</span>
      </a></li>
      <li><a href="toc.html" class="nav-link nav-top">
        <span class="fr-text">Table des matières</span><span class="en-text">Table of contents</span>
      </a></li>
      <li><a href="intro.html" class="nav-link nav-top">Introduction</a></li>

      <li class="nav-section">
        <span class="nav-chapter-label">
          <span class="fr-text">Chapitre 1</span><span class="en-text">Chapter 1</span>
        </span>
        <a href="chap1.html" class="nav-link">
          <span class="fr-text">Panorama du traitement des boues</span>
          <span class="en-text">Overview of sludge treatment</span>
        </a>
      </li>
      <li class="nav-section">
        <span class="nav-chapter-label">
          <span class="fr-text">Chapitre 2</span><span class="en-text">Chapter 2</span>
        </span>
        <a href="chap2.html" class="nav-link">
          <span class="fr-text">Modélisation du procédé</span>
          <span class="en-text">Process modelling</span>
        </a>
      </li>
      <li class="nav-section">
        <span class="nav-chapter-label">
          <span class="fr-text">Chapitre 3</span><span class="en-text">Chapter 3</span>
        </span>
        <a href="chap3.html" class="nav-link">
          <span class="fr-text">Validations expérimentales</span>
          <span class="en-text">Experimental validation</span>
        </a>
      </li>
      <li class="nav-section">
        <span class="nav-chapter-label">
          <span class="fr-text">Chapitre 4</span><span class="en-text">Chapter 4</span>
        </span>
        <a href="chap4.html" class="nav-link">
          <span class="fr-text">Réglementaire &amp; énergétique</span>
          <span class="en-text">Regulatory &amp; energy</span>
        </a>
      </li>

      <li><a href="concl.html" class="nav-link nav-top">
        <span class="fr-text">Conclusion générale</span><span class="en-text">General conclusion</span>
      </a></li>
      <li><a href="annexe.html" class="nav-link nav-top">
        <span class="fr-text">Annexes</span><span class="en-text">Appendices</span>
      </a></li>
      <li><a href="biblio.html" class="nav-link nav-top">
        <span class="fr-text">Bibliographie</span><span class="en-text">Bibliography</span>
      </a></li>
    </ul>
    <div class="sidebar-footer">
      <button class="btn-pdf" onclick="window.print()">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        <span class="fr-text">Exporter en PDF</span><span class="en-text">Export to PDF</span>
      </button>
    </div>`;

  /* ── Inject sidebar ────────────────────────────────────────────────── */
  const sidebar = document.createElement('nav');
  sidebar.id = 'sidebar';
  sidebar.innerHTML = sidebarHTML;

  /* ── Inject hamburger button ───────────────────────────────────────── */
  const toggle = document.createElement('button');
  toggle.id = 'menu-toggle';
  toggle.setAttribute('aria-label', 'Menu');
  toggle.innerHTML = '&#9776;';

  /* Insert before all other body children */
  document.body.insertBefore(toggle,  document.body.firstChild);
  document.body.insertBefore(sidebar, document.body.firstChild);

  /* ── Active link ───────────────────────────────────────────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#sidebar .nav-link').forEach(function (link) {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  /* ── Menu toggle (mobile) ──────────────────────────────────────────── */
  toggle.addEventListener('click', function () {
    sidebar.classList.toggle('open');
    toggle.setAttribute(
      'aria-label',
      sidebar.classList.contains('open') ? 'Fermer le menu' : 'Ouvrir le menu'
    );
  });

  document.addEventListener('click', function (e) {
    if (window.innerWidth <= 800 &&
        !sidebar.contains(e.target) &&
        e.target !== toggle) {
      sidebar.classList.remove('open');
    }
  });
})();
