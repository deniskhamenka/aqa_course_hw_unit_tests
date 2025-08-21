/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {
  return [].concat(...arrays);
}
//console.log(mergeArrays([1, 2], [3, 4], [5, 6])); 
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  const words = sentence.split(/\s+/);
  let result = '';

  for (let i = 0; i < words.length; i++){
    if (i === 0) {
      result += words[i].toLowerCase();
    } else {
      let firstChar = words[i][0].toUpperCase();
      let restChar = words[i].slice(1).toLowerCase();
      result += '_' + firstChar + restChar;
    }
  }
  return result;
}
console.log(devideBy('I   am  super     engineer')); 
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */


function fibonacci(n) {
  const num = [1, 1];
  if (n <= 2) {
    return 1;
  }

  for (let i = 2; i < n; i++) {
    num[i] = num[i - 1] + num[i - 2];
  }
  return num[n - 1];
} 
/*function fibonacci(n) {
  if (n <= 2) return n; 
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(8));*/
console.log(fibonacci(8));

export { mergeArrays, fibonacci, devideBy };