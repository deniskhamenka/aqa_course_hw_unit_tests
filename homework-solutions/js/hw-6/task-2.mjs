/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzas = [...myPizzasT1, ...myPizzasT2];

let resultUnique = [];
let resultNull = null;

for (const myPizza of myPizzas) {
   let found = false;
    for(const competitorPizza of competitorPizzas){
      if (competitorPizza.toLowerCase() === myPizza.toLowerCase()){
        found = true;
        break;
      }
    }

    if (!found) {
      resultUnique.push(myPizza);
    }
  }

  if (resultUnique.length === 0) {
    resultNull = "null";
  }
console.log("resultUnique:", resultUnique);
console.log("resultNull:", resultNull);


export { resultNull, resultUnique };
