const user = {
  username: "shahriar", // Property of the 'user' object
  price: 999, // Another property of the 'user' object

  welcomeMessage: function () {
    // 'this' refers to the current object, which is 'user'
    console.log(`${this.username} , welcome to website`); // Outputs the username with a welcome message
    console.log(this); // Logs the 'user' object itself
  },
};

// user.welcomeMessage() // Calls the 'welcomeMessage' method and outputs "shahriar, welcome to website" and logs the 'user' object
// user.username = "sam" // Changes the 'username' property to "sam"
// user.welcomeMessage() // Calls the method again, now outputting "sam, welcome to website"

// console.log(this); // In the global context, 'this' refers to the global object (like 'window' in browsers)

// Traditional function declaration (non-arrow function)
// In non-arrow functions, 'this' refers to the caller of the function, which can vary based on how it's invoked.
// function chai() {
//   let username = "shahriar"; // This variable is local to the function
//   console.log(this.username); // 'this' refers to the global object (or undefined in strict mode)
// }

// chai() // Logs 'undefined' because there's no 'username' in the global context of 'this'

// Function expression (non-arrow function)
// const chai = function () {
//   let username = "shahriar"; // Local variable
//   console.log(this.username); // 'this' refers to the global object or undefined if used in strict mode
// };

// Arrow function example
const chai = () => {
  let username = "shahriar"; // Local variable, but 'this' is lexically scoped (inherited from the parent scope)
  console.log(this); // 'this' refers to the global scope (since arrow functions do not bind their own 'this')
};

// chai() // Outputs the global object (or 'window' in browsers) due to lexical 'this' in arrow functions

// Arrow function examples with different return methods

// Basic arrow function with a block body (requires 'return' for returning values)
// const addTwo = (num1, num2) => {
//   return num1 + num2; // Returns the sum of num1 and num2
// };

// Single-line arrow function without curly braces (implicit return)
// const addTwo = (num1, num2) => num1 + num2; // Automatically returns num1 + num2

// Arrow function with parentheses (implicit return of an object literal)
const addTwo = (num1, num2) => ({ username: "shahriar" }); // Returns an object with a 'username' property

console.log(addTwo(3, 4)); // Logs the object: { username: "shahriar" }

// Array example
// const myArray = [2, 5, 3, 7, 8]; // Array of numbers

// myArray.forEach() // The 'forEach' method would iterate over each element in 'myArray' if a callback was provided
