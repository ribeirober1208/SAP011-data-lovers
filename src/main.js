/*import { example } from './sand-data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);*/


import { sortCharactersByFullName, filterCharactersByFamily, filterCharactersByName } from './data.js';


fetch('./data/got/got.json')
  .then(response => response.json())
  .then(data => {
    const cardsContainer = document.getElementById('cardsContainer');

    function createCard(character) {
      const card = document.createElement('div');
      card.classList.add('card', 'flippable');

      const cardInner = document.createElement('div');
      cardInner.classList.add('card-inner');

      const cardFront = document.createElement('div');
      cardFront.classList.add('front');

      const cardBack = document.createElement('div');
      cardBack.classList.add('back');

      const image = document.createElement('img');
      image.src = character.imageUrl;
      image.alt = character.fullName;

      const firstName = document.createElement('h2');
      firstName.textContent = character.firstName;

      const lastName = document.createElement('p');
      lastName.textContent = character.lastName;

      cardFront.appendChild(image);
      cardFront.appendChild(firstName);
      cardFront.appendChild(lastName);

      const characterInfo = document.createElement('div');
      characterInfo.classList.add('character-info');
      characterInfo.innerHTML = `
                <h3>${character.title}</h3>
                <p>Casa ${character.family}</p>
                <p>Nascimento: ${character.born}</p>
            `;

      cardBack.appendChild(characterInfo);

      cardInner.appendChild(cardFront);
      cardInner.appendChild(cardBack);

      card.appendChild(cardInner);

      return card;
    }

    function renderCards(characters) {
      cardsContainer.innerHTML = '';
      characters.forEach(character => {
        const card = createCard(character);
        cardsContainer.appendChild(card);
      });
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        card.addEventListener('click', () => {
          card.classList.toggle('flipped');
          card.classList.toggle('flipped-back');
        });
      });
    }

    const filterSelect = document.getElementById('filter');
    filterSelect.addEventListener('change', () => {
      const selectedValue = filterSelect.value;
      const sortedCharacters = sortCharactersByFullName(data.got, selectedValue);
      renderCards(sortedCharacters);


    });

    const filterFamilySelect = document.getElementById('filterFamily');
    filterFamilySelect.addEventListener('change', () => {
      const selectedFamily = filterFamilySelect.value;
      const filteredCharacters = filterCharactersByFamily(data.got, selectedFamily);

      renderCards(filteredCharacters);
    })

    const filterInput = document.getElementById('insertNameInput');
    filterInput.addEventListener('input', () => {
      const searchName = filterInput.value;
      const filteredCharacters = filterCharactersByName(data.got, searchName);
      renderCards(filteredCharacters);
    });

    renderCards(data.got);
  })

  
  .catch(error => {
    console.error('Error loading data:', error);
  });
