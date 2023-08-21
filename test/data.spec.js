import { sortCharactersByFullName, anotherExample } from '../src/data.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof sortCharactersByFullName).toBe('function');
  });

  it('returns `example`', () => {
    //expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
