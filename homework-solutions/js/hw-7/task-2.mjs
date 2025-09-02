/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !=='string'){
    return false;
  }
  word = word.toLowerCase();
  return word === word.split('').reverse().join('');
}
console.log(isPalindrom(12321))
/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string') return [];

  sentence = sentence.trim();
  if (sentence.length === 0) return [];

  const words = sentence.split(/\s+/);
  let maxLengthWord = 0;
  let result = [];

  for (let word of words){
    if (word.length > maxLengthWord){
      maxLengthWord = word.length;
    }
  }

  for (let word of words){
    if (word.length === maxLengthWord){
      result.push(word);
    }
  }
  return result
}
console.log(findLongestWords(''))
export { isPalindrom, findLongestWords };
