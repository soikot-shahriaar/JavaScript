// Basic arithmetic operations
console.log(2 + 2); // 4
console.log(2 - 2); // 0
console.log(2 * 2); // 4
console.log(2 ** 3); // 8
console.log(2 / 3); // 0.666...
console.log(2 % 3); // 2

// Price calculations and increment/decrement operations
let price1 = 25;
let price2 = 15;
let total = price1 + price2; // 40
console.log(total);

price1--; // 24
price2++; // 16
console.log(price1);
console.log(price2);

let newPrice2 = price2 + 1; // 17
console.log(newPrice2);

// Negative values
let value = 3;
let negValue = -value; // -3
console.log(negValue);

// Type coercion with strings and numbers
console.log("1" + 2); // "12"
console.log(1 + "2"); // "12"
console.log("1" + 2 + 2); // "122"
console.log(1 + 2 + "2"); // "32"

// Arithmetic with parentheses and modulus
console.log(((3 + 4) * 5) % 3); // 2

// Unary plus operator and boolean conversion
console.log(+true); // 1
console.log(+""); // 0

// Multiple variable assignment
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // 4
console.log(num1, num2, num3);

// Pre-increment operator
let gameCounter = 100;
++gameCounter; // 101
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
