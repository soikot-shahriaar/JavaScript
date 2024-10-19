// Primitive Number
const score = 400;
// console.log(score); // Output: 400

// Creating a Number object
const balance = new Number(100);
// console.log(balance); // Output: [Number: 100]

// Demonstrating methods on the Number object
// console.log(balance.toString().length); // Output: 3 (length of "100")
// console.log(balance.toFixed(1)); // Output: "100.0" (fixed to 1 decimal place)

const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4)); // Output: "123.9" (4 significant digits)

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // Output: "10,00,000" (Indian number format)

// ++++++++++++++++++++++ Maths ++++++++++++++++++++++++

// Displaying Math object for reference
// console.log(Math);

// Mathematical operations
// console.log(Math.abs(-4)); // Output: 4 (absolute value)
// console.log(Math.round(4.6)); // Output: 5 (rounds to nearest integer)
// console.log(Math.ceil(4.2)); // Output: 5 (rounds up)
// console.log(Math.floor(4.9)); // Output: 4 (rounds down)
// console.log(Math.min(4, 3, 6, 8)); // Output: 3 (minimum value)
// console.log(Math.max(4, 3, 6, 8)); // Output: 8 (maximum value)

// Generating random numbers
console.log(Math.random()); // Output: A random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random() * 10 + 1); // Output: A random number between 1 (inclusive) and 11 (exclusive)
console.log(Math.floor(Math.random() * 10) + 1); // Output: A random integer between 1 and 10 (inclusive)

// Random integer within a specified range
const min = 10; // Minimum value
const max = 20; // Maximum value
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Output: A random integer between 10 and 20 (inclusive)
