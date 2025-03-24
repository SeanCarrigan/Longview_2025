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

  // Normalize currentPage by removing .html extensions
  if (currentPage.endsWith('.html')) {
    currentPage = currentPage.slice(0, -5);
  }

  console.log('currentPage:', currentPage);

  const isMainPage = currentPage === '/' || currentPage === '/index';
  const isJobDescriptionPage = currentPage.includes('/pages/job-description');

  // Select logos
  const logoWhite = document.querySelector('.logo-white');
  const logoBlack = document.querySelector('.logo-black');
  const logoColored = document.querySelector('.logo-colored'); // Home page logo

  if (isMainPage) {
    // **Use the colored logo on the home page**
    logoColored.style.display = 'block';
    logoWhite.style.display = 'none';
    logoBlack.style.display = 'none';
  } else {
    // **For other pages, default to white-to-black transition**
    logoColored.style.display = 'none';
    logoWhite.style.display = 'block';
    logoBlack.style.display = 'none';
  }

  // **Scroll behavior for all pages**
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled'); // Dark background when scrolled
      if (!isMainPage) {
        logoWhite.style.display = 'none';
        logoBlack.style.display = 'block';
      }
    } else {
      header.classList.remove('scrolled'); // Transparent background at top
      if (!isMainPage) {
        logoWhite.style.display = 'block';
        logoBlack.style.display = 'none';
      }
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

  let activeLink = Array.from(navLinks).find((link) => {
    let href = link.getAttribute('href');
    if (href.endsWith('.html')) {
      href = href.slice(0, -5);
    }
    return href === currentPage;
  });

  if (!activeLink) {
    activeLink =
      document.querySelector('.nav-link[href="/index"]') ||
      document.querySelector('.nav-link[href="/"]');
  }

  if (activeLink) {
    activeLink.classList.add('active');
  }
}
