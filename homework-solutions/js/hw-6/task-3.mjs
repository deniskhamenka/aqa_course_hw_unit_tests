/*
Удалить дубликаты
  - Создайте массив из чисел [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
  - Напишите скрипт, который убирает из массива дубликаты
  - При удалении дубликата, длина массива должна уменьшаться

  Присвойте результат в переменную "unique"
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
for (let i =0; i < numbers.length; i++){
  for (let j = i +1; j < numbers.length; j++){
    if (numbers[i] === numbers[j]) {
      numbers.splice(j, 1);
      j--;
    }
  }
}
let unique = numbers;

//console.log(unique)

export { unique };
