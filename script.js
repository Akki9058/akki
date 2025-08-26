document.addEventListener('DOMContentLoaded', () => {
  const navToggleButton = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  const year = document.getElementById('year');

  if (year) {
    year.textContent = new Date().getFullYear().toString();
  }

  if (navToggleButton && siteNav) {
    navToggleButton.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('open');
      navToggleButton.setAttribute('aria-expanded', String(isOpen));
    });

    siteNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (siteNav.classList.contains('open')) {
          siteNav.classList.remove('open');
          navToggleButton.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
});