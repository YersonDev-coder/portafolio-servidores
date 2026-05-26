/* ============================================
   PORTAFOLIO — YERSON ROJAS VILCA
   app.js — Funcionalidades principales
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ===== NAVBAR — Sticky shadow con IntersectionObserver =====
  const navbar   = document.getElementById('site-header');
  const sentinel = document.getElementById('nav-sentinel');

  if (navbar && sentinel) {
    const stickyObs = new IntersectionObserver(
      ([entry]) => {
        navbar.classList.toggle('is-stuck', !entry.isIntersecting);
      },
      { threshold: 0 }
    );
    stickyObs.observe(sentinel);
  }

  // ===== SCROLL SPY — Resaltar link activo según sección visible =====
  const sections = document.querySelectorAll('[data-section]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (sections.length && navLinks.length) {
    const spyObs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(link => {
              link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
          }
        });
      },
      {
        rootMargin: `-${parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 70}px 0px -50% 0px`,
        threshold: 0
      }
    );
    sections.forEach(s => spyObs.observe(s));
  }

  // ===== SMOOTH SCROLL con offset del navbar =====
  document.querySelectorAll('[data-scroll-link]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      // Cerrar menú móvil si está abierto
      const mobileNav = document.getElementById('primary-nav');
      const toggleBtn = document.getElementById('mobile-menu-toggle');
      if (mobileNav && mobileNav.classList.contains('is-open')) {
        mobileNav.classList.remove('is-open');
        if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
      }

      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ===== BOTÓN VOLVER ARRIBA =====
  const backBtn = document.getElementById('back-to-top');

  if (backBtn) {
    // Mostrar/ocultar observando la sección hero
    const heroSection = document.getElementById('inicio');
    if (heroSection) {
      const backObs = new IntersectionObserver(
        ([entry]) => {
          backBtn.hidden = false;
          backBtn.classList.toggle('visible', !entry.isIntersecting);
        },
        { threshold: 0 }
      );
      backObs.observe(heroSection);
    }

    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== MENÚ MÓVIL =====
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const primaryNav = document.getElementById('primary-nav');

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // ===== ANIMACIONES AL SCROLL — IntersectionObserver =====
  const animatedEls = document.querySelectorAll('.animate-on-scroll');

  if (animatedEls.length) {
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    animatedEls.forEach(el => revealObs.observe(el));
  }

  // ===== FILTRO DE CERTIFICADOS =====
  const filterBtns = document.querySelectorAll('.filter-btn');
  const certCards  = document.querySelectorAll('.cert-card');

  if (filterBtns.length && certCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Actualizar botón activo
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        certCards.forEach(card => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.classList.remove('hidden');
            // Re-trigger animation
            card.classList.remove('is-visible');
            void card.offsetWidth; // Force reflow
            card.classList.add('is-visible');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  // ===== AÑO ACTUAL EN FOOTER =====
  const yearEl = document.querySelector('[data-current-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
