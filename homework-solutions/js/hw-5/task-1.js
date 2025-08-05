/**
 * Сложить строку с четными числами от 10 до 0, разделенными `-` в переменную evenNumbersResult.
 * Переменная для результата `evenNumbersResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: '10-8-6-4-2-0'
 */

let evenNumbersResult = '';
for (let i = 10; i >= 0; i--){
    if (i % 2 !== 0) continue;
    evenNumbersResult += i;

    if (i !== 0){
    evenNumbersResult += '-';
    }
}
console.log(evenNumbersResult);

/**
 * Создать строку из 5 строк с увеличивающимся количеством смайликов ":)".
 * Переменная для результата `smilePatternResult` уже создана и содержит пустую строку.
 * Ожидаемый результат:
 * :)
 * :):)
 * :):):)
 * :):):):)
 * :):):):):)
 */

let smilePatternResult = '';
for (let i = 1; i <= 5; i++){
    let line = '';
    for (let j = 1; j <= i; j++){
        line += ':)';
    }
    smilePatternResult += line;
    if (i < 5){
        smilePatternResult += '\n';
    }
}
console.log(smilePatternResult);

/**
 * Заменить все пробелы в переменной text на "1".
 * Переменная для результата `replaceSpacesWithOneResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: 'Hello!1I1am1a1JS1student!'
 */

const text = 'Hello! I am a JS student!';
let replaceSpacesWithOneResult = '';

for (let i = 0; i < text.length; i++){
    replaceSpacesWithOneResult += (text[i] === ' ') ? 1 : text [i];
}
console.log(text.replaceAll(replaceSpacesWithOneResult,'1'))
export { evenNumbersResult, smilePatternResult, replaceSpacesWithOneResult };
