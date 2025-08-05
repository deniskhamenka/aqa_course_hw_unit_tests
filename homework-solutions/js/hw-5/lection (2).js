// let n = 10;
// let i = 1;
// while (i <= n) {
//   console.log(i);
//   i++;
// }
// console.log(i);

// let n = 1;
// let i = 10;
// while (i >= n) {
//   console.log(i);
//   i--;
// }
// console.log(i);

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 0);

// for (let i = 0; i < 6; i++) {
//   if (i === 2) continue;
//   if (i === 4) break;
//   console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log("Nested j === ", j);
//   }
//   console.log("I from global loop === ", i);
// }

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(i, "*", j, " === ", i * j);
//   }
// }

// let str = "new string"; // 'new string', `new string`
// let strOld = new String("new string");

// let student = "ALex";
// let studentSurname = "JSov";

// // let greetings = "Hello from " + student;
// let greetings = `Hello from ${student + " " + studentSurname}`;

// console.log(greetings);

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     // console.log(i, "*", j, " === ", i * j);
//     console.log(`${i} * ${j} === ${i * j}`);
//   }
// }

// console.log('I\'m the best QA')

// console.log("Hello\nHere I am");

// const str = "Hello there";

// console.log(str.length);
// console.log(str[10]);
// console.log(str[str.length - 1]);
// console.log(str.at(-2));

// let str = "www.aqacourse.javascript.com";

// console.log(str.indexOf("u"));
// console.log(str[9]);
// console.log(str.indexOf("!"));
// console.log(str.indexOf("a"));
// console.log(str.lastIndexOf("a"));

// if (str.indexOf("a") !== -1) {
// if (str.includes("a")) {
//   //..
// }

// console.log(str.startsWith("www"));

// const newStr = str.slice(4, 13);
// const newStr = str.slice(4);
// console.log(newStr);

// let str = "miKHaIl";

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// const firstElement = str[0];
// const firstUpper = firstElement.toUpperCase();
// const restElements = str.slice(1);
// const restElementsLower = restElements.toLowerCase();
// const result = firstUpper + restElementsLower;
// console.log(result);

// const newStr = str[0].toUpperCase() + str.slice(1).toLowerCase();
// console.log(newStr);
// let str = "miKHaIl";

// // console.log(str.codePointAt(str[0]));
// // console.log(String.fromCodePoint(109));

// const str1 = "aaaA";
// const str2 = "aaaa";

// console.log(str1.localeCompare(str2));

const str = "Mikhail";
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === "i") {
    count++;
  }
}
console.log(count);

String.prototype.countSpecificChars = function (char) {
  let count = 0;
  for (let i = 0; i < this.length; i++) {
    if (this[i] === char) {
      count++;
    }
  }
  return count;
};

console.log(str.countSpecificChars("i"));

// const newStr = str.replace("i", "I");
// console.log(newStr);
// const newStr2 = str.replaceAll("i", "I");
// console.log(newStr2);

// const expectedPrice = 124;
// // const actualPrice = +"$124.00".replace("$", "").replace(".00", "");
// const actualPrice = Number("$124.00".replace("$", "").replace(".00", ""));

// console.log(expectedPrice === actualPrice);

// const str = "Hello World";
// const words = str.split("d");
// console.log(words);

// const arr = [];
// let tempString = "";
// let divider = "d";

// for (let i = 0; i < str.length; i++) {
//   if (str[i] !== divider) {
//     tempString += str[i];
//   } else {
//     arr.push(tempString);
//     tempString = "";
//   }
//   if (i === str.length - 1) {
//     arr.push(tempString);
//     tempString = "";
//   }
// }
// console.log(arr);

// const str = "   AAA    ";
// console.log(str.trim());

//TODO: Numbers

// let num = 123;
// const str = num.toString();

// console.log(Math.round(3.1));
// console.log(Math.round(3.6));

// console.log(Math.floor(3.9));
// console.log(Math.ceil(3.1));
// console.log(Math.trunc(3.9));
// console.log((3.1415).toFixed(3));
// console.log(typeof (3.1415).toFixed(3));

// console.log(parseInt("3.6"));
// console.log(parseFloat("3.6"));

// console.log(parseInt("1234asdadasdsa5"));

// console.log(isNaN("0"));

// console.log(1 + Math.floor(Math.random() * 9));
// let min = 0;
// let max = 10;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// console.log(Math.max(1, 2, 3, 4, 5, 6));
// console.log(Math.min(1, 2, 3, 4, 5, 6));

// const str = "sasadasdasdsadsad";
// let min = 0;
// let max = 10;
// const num = Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(str[num]);

// console.log(2 ** 3);
// console.log(Math.pow(2, 3));

// const num = 1_000_000;
// console.log(num);
