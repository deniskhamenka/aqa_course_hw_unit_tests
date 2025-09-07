/*
  У вас есть массив чисел. 
  Напиши функцию countOccurrences, которая принимает массив чисел и
  возвращает объект с подсчётом каждого числа.
  const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
  
  Ожидается: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }
*/

function countOccurrences(arr) {
  const result = {};
  for (const num of arr) {
    if (result[num]) {
      result[num] += 1;     // если число уже есть, увеличиваем счётчик
    } else {
      result[num] = 1;      // если встретилось впервые, кладём 1
    }
  }
  return result;
}

const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
//console.log(countOccurrences(numbers))


export { countOccurrences };
