import { cardData } from '../data/cardData.js';

// console.log('cardData:', cardData);

function createCard({ imgURL, title, subtitle, date, description, link }) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card-content');
  cardDiv.innerHTML = `
    <img src="${imgURL}" alt="${title}" class="lazyload" id="card-logo" />
    <div class="card-text-box">
      <h1>${title}</h1>
        <div id="sub-title">
          <h1>${subtitle}</h1>
          <h1>${date}</h1>
        </div>
        <p>
          ${description}
          <a href="${link}" target="_blank" id="link-text">Link</a>
        </p>
      </div>
    `;

  return cardDiv;
}

const mainContent = document.querySelector('.main-content');
cardData.forEach((card) => {
  const cardElement = createCard(card);
  mainContent.appendChild(cardElement);
});

document.getElementById('scroll-left').addEventListener('click', function () {
  const scrollContainer = document.querySelector('.main-content');
  scrollContainer.scrollBy({
    left: -300, // Scroll 300px to the left when the left arrow is clicked
    behavior: 'smooth',
  });
});

document.getElementById('scroll-right').addEventListener('click', function () {
  const scrollContainer = document.querySelector('.main-content');
  scrollContainer.scrollBy({
    left: 300, // Scroll 300px to the right when the right arrow is clicked
    behavior: 'smooth',
  });
});
