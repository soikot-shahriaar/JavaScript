// Primitive Data Types in JavaScript

// 7 primitive types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100; // Number (integer)
const scoreValue = 100.3; // Number (floating-point)

const isLoggedIn = false; // Boolean (false)
const outsideTemp = null; // null (represents no value)
let userEmail; // undefined (not initialized)

const id = Symbol("123"); // Symbol (unique identifier)
const anotherId = Symbol("123"); // Another Symbol with a different reference

console.log(id === anotherId); // Output: false (different Symbols)

// const bigNumber = 3456543576654356754n;  // BigInt (large integer)

// Reference Data Types in JavaScript
// Reference types include: Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // Array of strings

let myObj = {
  name: "hitesh", // Object with properties
  age: 22,
};

const myFunction = function () {
  // Function definition
  console.log("Hello world");
};

// Checking the type of anotherId
console.log(typeof anotherId); // Output: "symbol"
