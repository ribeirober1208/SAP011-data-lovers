import {
  sortCharactersByFullName,
  filterCharactersByFamily,
  filterCharactersByName
} from '../src/data.js';

describe('filterCharactersByName', () => {
  it('is a function', () => {
    expect(typeof filterCharactersByName).toBe('function');
  });
  it('deve retornar os personagens quando o searchName estiver vazio', () => {
    const characters = [
      { fullName: 'Jon Snow' },
      { fullName: 'Daenerys Targaryen' },
      { fullName: 'Tyrion Lannister' },
      { fullName: 'Arya Stark' },
      { fullName: 'Cersei Lannister' },
    ];
    const searchName = filterCharactersByName(characters, '');
    expect(searchName).toEqual(characters);
  });
});

describe('sortCharactersByFullName', () => {
  it('is a function', () => {
    expect(typeof sortCharactersByFullName).toBe('function');
  });

  const characters = [
    { fullName: 'Jon Snow' },
    { fullName: 'Daenerys Targaryen' },
    { fullName: 'Tyrion Lannister' },
    { fullName: 'Arya Stark' },
    { fullName: 'Cersei Lannister' },
  ];

  it('deve retornar o personagem em ordem ascendente', () => {
    const sortedAscending = sortCharactersByFullName(characters, 'a-z');
    const expected = [
      { fullName: 'Arya Stark' },
      { fullName: 'Cersei Lannister' },
      { fullName: 'Daenerys Targaryen' },
      { fullName: 'Jon Snow' },
      { fullName: 'Tyrion Lannister' },
    ];
    expect(sortedAscending).toEqual(expected);
  });

  it('deve retornar o personagem em ordem descendente', () => {
    const sortedDescending = sortCharactersByFullName(characters, 'z-a');
    const expected = [
      { fullName: 'Tyrion Lannister' },
      { fullName: 'Jon Snow' },
      { fullName: 'Daenerys Targaryen' },
      { fullName: 'Cersei Lannister' },
      { fullName: 'Arya Stark' },
    ];
    expect(sortedDescending).toEqual(expected);
  });
});

describe('filterCharactersByFamily', () => {
  it('is a function', () => {
    expect(typeof filterCharactersByFamily).toBe('function');
  });

  const characters = [
    { family: 'Stark' },
    { family: 'Targaryen' },
    { family: 'Lannister' },
    { family: 'Greyjoy' },
    { family: 'Bolton' },
  ];

  it('deve retornar todos os personagens quando selectedFamily estiver vazio', () => {
    const filtered = filterCharactersByFamily(characters, '');
    expect(filtered).toEqual(characters);
  });

  const familyTestCases = [
    { selectedFamily: 'Stark', expected: [{ family: 'Stark' }] },
    { selectedFamily: 'Targaryen', expected: [{ family: 'Targaryen' }] },
    { selectedFamily: 'Lannister', expected: [{ family: 'Lannister' }] },
    { selectedFamily: 'Greyjoy', expected: [{ family: 'Greyjoy' }] },
    { selectedFamily: 'Bolton', expected: [{ family: 'Bolton' }] },
  ];

  familyTestCases.forEach(({ selectedFamily, expected }) => {
    it(`deve retornar os personagens da família "${selectedFamily}" selecionada`, () => {
      const filtered = filterCharactersByFamily(characters, selectedFamily);
      expect(filtered).toEqual(expected);
    });
  });
});