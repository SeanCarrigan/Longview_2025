window.onload = () => {
  const landingSection = document.querySelector('.landing-section');

  const pageBackgrounds = {
    '/pages/solutions.html': '/images/Transmission_helicopter.png',
    '/pages/industry-news.html': '/images/double_transmission_towers.jpg',
    '/pages/careers.html': '/images/Workers.jpg',
    '/pages/contact.html': '/images/high-voltage-towers.jpg',
  };
  console.log('Available Paths:', Object.keys(pageBackgrounds));

  const currentPath = window.location.pathname;

  // Debug: Log current path
  console.log('Current path:', currentPath);

  // Check if landingSection exists and if there's a matching background for the current path
  if (landingSection && pageBackgrounds[currentPath]) {
    const bgImage = pageBackgrounds[currentPath];

    // Set the background image dynamically
    landingSection.style.backgroundImage = `url('${bgImage}')`;

    // Debug: Log the background image being applied
    console.log('Background Image Set:', bgImage);
  } else {
    // Debug: Log a message if no background is found for the current path
    console.log('No background image found for this path.');
  }
};
