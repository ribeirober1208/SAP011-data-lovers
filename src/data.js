// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
*/
  export function filterCharactersByName(characters, searchName) {
  if (!searchName) {
      return characters;
  } else {
      const lowerSearchName = searchName.toLowerCase();
      return characters.filter(character => {
          const fullName = `${character.firstName} ${character.lastName} ${character.family}`.toLowerCase();
          return fullName.includes(lowerSearchName);
      });
  }
}

export function sortCharactersByFullName(characters, order) {
  return characters.slice().sort((a, b) => {
    if (order === 'a-z') {
      return a.fullName.localeCompare(b.fullName);
    } else if (order === 'z-a') {
      return b.fullName.localeCompare(a.fullName);
    }
  });
}

export function filterCharactersByFamily(characters, selectedFamily) {
   if (selectedFamily === '') {
    return characters;
   } else {
    return characters.filter(character => character.family === selectedFamily);
   }
} 