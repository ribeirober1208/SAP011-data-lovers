/*import { example } from './sand-data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);*/


fetch('./data/got/got.json')
    .then(Response => Response.json())
    .then(data => {
        document.getElementById('cardsContainer');

        data.got.forEach(character => {
            const card = document.createElement('div');
            card.classList.add('card');

            const image = document.createElement('img');
            image.src = character.imageUrl;
            image.alt = character.fullName;

            const firstName = document.createElement('h2');
            firstName.textContent = character.firstName;

            const lastName = document.createElement('p');
            lastName.textContent = character.lastName;

            card.appendChild(image);
            card.appendChild(firstName);
            card.appendChild(lastName);
            cardsContainer.appendChild(card);
        });
    })
.catch(error => {
    console.error('Error loading data:', error);
});