document.addEventListener('DOMContentLoaded', function () {
  fetch('/components/header.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('header-container').innerHTML = data;
      initializeHeader(); // Run header functionality after insertion
    })
    .catch((error) => console.error('Error loading the header:', error));
});

function initializeHeader() {
  const navLinks = document.querySelectorAll('.header-right .nav-link');
  const header = document.querySelector('.header');
  const logoWhite = document.querySelector('.logo-white');
  const logoColored = document.querySelector('.logo-colored');

  let currentPage = window.location.pathname;

  // Normalize currentPath by removing the .html extension
  if (currentPage.endsWith('.html')) {
    currentPage = currentPage.slice(0, -5);
  }

  console.log('currentPage:', currentPage);

  // Ensure white logo is visible and colored logo is hidden initially
  logoWhite.style.display = 'block';
  logoColored.style.display = 'none';

  // Apply scroll behavior to toggle logos
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      logoWhite.style.display = 'none';
      logoColored.style.display = 'block';
    } else {
      header.classList.remove('scrolled');
      logoWhite.style.display = 'block';
      logoColored.style.display = 'none';
    }
  });

  // Menu toggle functionality
  const menuToggle = document.querySelector('.menu-toggle');
  const menuClose = document.querySelector('.menu-close');
  const navMenu = document.querySelector('.header-right');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.add('show');
    menuToggle.classList.add('hidden');
    menuClose.classList.add('show');
  });

  menuClose.addEventListener('click', () => {
    navMenu.classList.remove('show');
    menuToggle.classList.remove('hidden');
    menuClose.classList.remove('show');
  });

  // Highlight active navigation link
  navLinks.forEach((link) => link.classList.remove('active'));

  // Normalize hrefs by removing the .html extension
  let activeLink = Array.from(navLinks).find((link) => {
    let href = link.getAttribute('href');
    if (href.endsWith('.html')) {
      href = href.slice(0, -5);
    }
    return href === currentPage;
  });

  // Fallback for root or main page
  if (!activeLink) {
    activeLink =
      document.querySelector('.nav-link[href="/index"]') ||
      document.querySelector('.nav-link[href="/"]');
  }

  if (activeLink) {
    activeLink.classList.add('active');
  }

  // Set active link function
  const setActiveLink = (activeLink) => {
    navLinks.forEach((link) => link.classList.remove('active'));
    if (activeLink) {
      activeLink.classList.add('active');
    }
  };

  // Click event for navigation links
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      // Allow full-page navigation without any scrolling behavior
      if (!href.startsWith('#')) {
        return;
      }

      e.preventDefault();
      setActiveLink(link);
    });
  });
}
