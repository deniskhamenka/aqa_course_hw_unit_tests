/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = '123ASDasd!@#';

let vowelsAndConsonantsResult = '';

const vowels = 'aeiou';
const consonants = 'bcdfghjklmnpqrstvwxyz';
let vowelsCount = 0;
let consonantsCount = 0;

for (let i = 0; i < word.length; i++){
    let char = word[i].toLowerCase();
    if (vowels.includes(char)){
        vowelsCount++;
    } else if (consonants.includes(char)) {
        consonantsCount++;
    }
}

vowelsAndConsonantsResult = `${word} contains ${vowelsCount} vowels and ${consonantsCount} consonants`;
console.log(vowelsAndConsonantsResult)

export { vowelsAndConsonantsResult };
