/*import { example } from './sand-data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);*/


fetch('./data/got/got.json')
    .then(response => response.json())
    .then(data => {
        const cardsContainer = document.getElementById('cardsContainer'); // Corrigido o acesso ao elemento

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
                <p>Family: ${character.family}</p>
                <p>Born: ${character.born}</p>
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
        }

        renderCards(data.got);

        const filterSelect = document.getElementById('filter');
        filterSelect.addEventListener('change', () => {
            const selectedValue = filterSelect.value;

            if (selectedValue === 'a-z') {
                data.got.sort((a, b) => a.fullName.localeCompare(b.fullName));
            } else if (selectedValue === 'z-a') {
                data.got.sort((a, b) => b.fullName.localeCompare(a.fullName));
            }

            renderCards(data.got);
        });

        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('flipped');
                card.classList.toggle('flipped-back');
            });
        });
    })
    .catch(error => {
        console.error('Error loading data:', error);
    });
