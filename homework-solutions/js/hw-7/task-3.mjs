/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(num) {
 if (typeof num !== 'number'|| num < 0)
  return null;

if (num <= 9) return num;
const digits = String(num);
let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum += Number(digits[i]);
  }
return digitalRoot(sum);
}
//console.log(digitalRoot(0));
export { digitalRoot };
