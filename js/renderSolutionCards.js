import { cardData } from '../data/solutionsPageCardData.js';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('card-container');

  // Function to create a single card dynamically
  const createCard = ({ title, text, imgSrc, imgAlt, isIcon, button }) => {
    // Create the outer container for the card
    const section = document.createElement('section');
    section.classList.add('section-content');

    // Create the text content container
    const textContainer = document.createElement('div');
    textContainer.classList.add('text-box');

    const titleElement = document.createElement('h1');
    titleElement.textContent = title;

    const textElement = document.createElement('p');
    textElement.textContent = text;

    // Append text content
    textContainer.appendChild(titleElement);
    textContainer.appendChild(textElement);

    // If a button exists, create and append the button
    if (button) {
      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('button-container');
      
      const buttonElement = document.createElement('button');
      buttonElement.textContent = button.text;
      buttonElement.onclick = () => window.location.href = button.link;

      buttonContainer.appendChild(buttonElement);
      textContainer.appendChild(buttonContainer);
    }

    // Create the image container
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-box');

    const imageElement = document.createElement('img');
    imageElement.src = imgSrc;
    imageElement.alt = imgAlt;
    // Dynamically add class based on `isIcon`
    imageElement.classList.add(isIcon ? 'icon' : 'image');

    imageContainer.appendChild(imageElement);

    // Append the text and image containers to the section
    section.appendChild(textContainer);
    section.appendChild(imageContainer);

    return section;
  };

  // Render all the cards dynamically
  cardData.forEach((card) => {
    const cardElement = createCard(card);
    container.appendChild(cardElement);
  });
});