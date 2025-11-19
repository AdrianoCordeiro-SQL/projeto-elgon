// script.js - comportamento simples: menu mobile, lightbox e ano automático

document.addEventListener('DOMContentLoaded', () => {
  // Mostrar ano atual no footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Toggle menu (mobile)
  const btnMenu = document.getElementById('btn-menu');
  const nav = document.getElementById('nav');
  if (btnMenu && nav) {
    btnMenu.addEventListener('click', () => {
      const isVisible = nav.style.display === 'block';
      nav.style.display = isVisible ? '' : 'block';
    });

    // hide menu when clicking a nav link (mobile)
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (window.innerWidth <= 760) nav.style.display = '';
      });
    });
  }

  // Lightbox for images
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbClose = document.getElementById('lightbox-close');

  document.querySelectorAll('.img-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-src');
      if (!src) return;
      lbImg.src = src;
      lb.setAttribute('aria-hidden', 'false');
    });
  });

  const closeLightbox = () => {
    lb.setAttribute('aria-hidden', 'true');
    lbImg.src = '';
  };

  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lb) {
    lb.addEventListener('click', (e) => {
      if (e.target === lb) closeLightbox();
    });
  }

  // Optional: close with Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lb.getAttribute('aria-hidden') === 'false') {
      closeLightbox();
    }
  });
});
