/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  if (typeof character.name === 'string' && typeof character.age === 'number') {
    characters.push(character);
  } else {
    throw new TypeError('Invalid character');
  }
};

// console.log("before:", characters);
// addCharacter({ name: 'Denis', age: 27 });
// console.log("after:", characters);


function getCharacter(name) {
  return characters.find (arr => arr.name === name);
}
//console.log(getCharacter('Fred'));

function getCharactersByAge(minAge) {
  if (typeof minAge !== 'number'){
    throw new TypeError('minAge must be a number');
  }
  return characters.filter (arr => arr.age >= minAge);
}
//console.log(getCharactersByAge(44));

function updateCharacter(name, newCharacter) {
  const char = getCharacter(name); // ищем персонажа

  if (!char) {
    throw new Error('Character not found');
  }

  if (newCharacter.name !== undefined) {
    char.name = newCharacter.name;
  }

  if (newCharacter.age !== undefined) {
    char.age = newCharacter.age;
  }
}
//updateCharacter('Barney', { age: 36 });
//console.log("after update:", characters);

function removeCharacter(name) {
  const index = characters.findIndex(arr => arr.name === name);
  if (index === -1) {
    throw new Error('Character not found');
  }
  characters.splice(index, 1);
}
//removeCharacter('Jack');
//console.log("after delete:", characters);
export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
