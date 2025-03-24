import { cardsData } from '../data/homePageCardsData.js';

// Function to create a single card dynamically
const createCard = ({ title, description, buttonText, buttonLink, imgSrc, imgAlt, imgOnRight }) => {
  // Create the container for the card
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('image-card');

  // Add dynamic class for image positioning
  if (imgOnRight) {
    cardContainer.classList.add('image-card--img-right');
  } else {
    cardContainer.classList.add('image-card--img-left');
  }

  // Create the text content for the card
  const textContainer = document.createElement('div');
  textContainer.classList.add('image-card-text');

  const titleElement = document.createElement('h2');
  titleElement.textContent = title;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = description;

  const button = document.createElement('button');
  button.textContent = buttonText;
  button.onclick = () => window.location.href = buttonLink;

  // Append the text content
  textContainer.appendChild(titleElement);
  textContainer.appendChild(descriptionElement);
  textContainer.appendChild(button);

  // Create the image content for the card
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-card-image');

  const imageElement = document.createElement('img');
  imageElement.src = imgSrc;
  imageElement.alt = imgAlt;

  // Append the image
  imageContainer.appendChild(imageElement);

  // Append the text and image containers to the card container
  cardContainer.appendChild(textContainer);
  cardContainer.appendChild(imageContainer);

  return cardContainer;
};

// Function to render all cards dynamically
const renderCards = () => {
  const mainContent = document.querySelector('.main-content');

  if (!mainContent) {
    console.error('Main content container not found');
    return; // Ensure the main content container exists
  }

  console.log('Rendering cards...');
  mainContent.innerHTML = ''; // Clear existing content before rendering

  // Loop through cardsData and create cards
  cardsData.forEach((card, index) => {
    console.log(card); // Log each card to check data

    // Determine if the image should be on the right or left
    const imgOnRight = index % 2 === 0; // Use the same logic for alternating sides
    const cardElement = createCard({
      title: card.title,
      description: card.description,
      buttonText: card.buttonText,
      buttonLink: card.buttonLink,
      imgSrc: card.imageSrc,
      imgAlt: card.imageAlt,
      imgOnRight: imgOnRight,
    });

    // Append the created card to the main content
    mainContent.appendChild(cardElement);
  });
};

document.addEventListener('DOMContentLoaded', renderCards);