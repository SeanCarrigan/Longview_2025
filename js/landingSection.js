document.addEventListener('DOMContentLoaded', () => {
  const landingSection = document.querySelector('.landing-section');

  const pageBackgrounds = {
    '/pages/solutions.html': '/images/Transmission_helicopter.png',
    '/pages/industry-news.html': '/images/double_transmission_towers.jpg',
    '/pages/careers.html': '/images/Workers.jpg',
    '/pages/contact.html': '/images/high-voltage-towers.jpg',
  };

  // Ensure currentPath always has .html at the end
  let currentPath = window.location.pathname;
  if (!currentPath.endsWith('.html')) {
    currentPath += '.html';
  }

  // console.log('Current Path:', currentPath);
  // console.log('Available Paths:', Object.keys(pageBackgrounds));

  if (landingSection && pageBackgrounds[currentPath]) {
    const bgImage = pageBackgrounds[currentPath];
    landingSection.style.backgroundImage = `url('${bgImage}')`;
    // console.log('Background Image Set:', bgImage);
  } else {
    console.log('No background image found for this path.');
  }
});
