// Lightweight interactions: mobile navigation, scroll reveals, cursor glow, and 3D hero tilt.
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    }));
  }

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  const art = document.getElementById('hero-art');
  const glow = document.querySelector('.cursor-glow');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
    window.addEventListener('pointermove', event => {
      if (glow) {
        glow.style.left = `${event.clientX}px`;
        glow.style.top = `${event.clientY}px`;
      }
      if (art) {
        const rect = art.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        art.style.transform = `rotateX(${(-y * 13).toFixed(2)}deg) rotateY(${(x * 16).toFixed(2)}deg)`;
      }
    }, { passive: true });
    if (art) art.parentElement.addEventListener('pointerleave', () => {
      art.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  }
})();
