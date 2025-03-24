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
  let currentPage = window.location.pathname;

  // Normalize currentPath by removing the .html extension
  if (currentPage.endsWith('.html')) {
    currentPage = currentPage.slice(0, -5); // Remove the '.html' part
  }

  console.log('currentPage:', currentPage);

  const isMainPage = currentPage === '/index' || currentPage === '/';
  const isJobDescriptionPage = currentPage.includes('/pages/job-description');

  if (!isJobDescriptionPage) {
    // Apply scroll behavior for all pages except job description
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  } else {
    // Specific behavior for job description page
    header.classList.add('scrolled');
    document.querySelector('.logo-white').style.display = 'none';
    document.querySelector('.logo-black').style.display = 'block';
  }

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
      href = href.slice(0, -5); // Remove the '.html' part
    }
    return href === currentPage;
  });

  // Fallback for root or main page
  if (!activeLink) {
    activeLink =
      document.querySelector('.nav-link[href="/index"]') ||
      document.querySelector('.nav-link[href="/"]'); // Support both paths
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
