// Example 1: Falsy and Truthy Values

const userEmail = [];

// In JavaScript, empty arrays ([]) are truthy values.
// The condition evaluates to true because userEmail (an empty array) is truthy.
if (userEmail) {
  console.log("Got user email"); // This will be logged, as [] is a truthy value.
} else {
  console.log("Don't have user email");
}

// Falsy values in JavaScript:
// - false
// - 0, -0
// - BigInt 0n
// - "" (empty string)
// - null
// - undefined
// - NaN

// Truthy values in JavaScript:
// - "0" (string with a number)
// - 'false' (string with the word false)
// - " " (non-empty string, even just spaces)
// - [] (empty array)
// - {} (empty object)
// - function(){} (any function)

// Example 2: Checking if an array is empty

// You can check if an array is empty by evaluating its length.
if (userEmail.length === 0) {
  console.log("Array is empty"); // This will be logged because userEmail is an empty array.
}

// Example 3: Checking if an object is empty

const emptyObj = {};

// Object.keys() returns an array of the object's keys.
// If the object has no keys, the array will be empty ([]), which has a length of 0.
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty"); // This will be logged since emptyObj has no keys.
}

// Example 4: Nullish Coalescing Operator (??)
// The nullish coalescing operator (??) returns the right-hand value if the left-hand value is null or undefined.

let val1;

// Examples of the nullish coalescing operator:
// val1 = 5 ?? 10       // val1 is 5 because 5 is not null or undefined
// val1 = null ?? 10    // val1 is 10 because null is a "nullish" value
// val1 = undefined ?? 15 // val1 is 15 because undefined is a "nullish" value
val1 = null ?? 10 ?? 20; // The first nullish value is null, so val1 becomes 10

console.log(val1); // Output will be 10, since null is replaced by 10

// Example 5: Ternary Operator

// The ternary operator is a shortcut for if-else statements.
// Syntax: condition ? value_if_true : value_if_false

const iceTeaPrice = 100;

// If iceTeaPrice is less than or equal to 80, it will log "less than 80"; otherwise, it will log "more than 80".
iceTeaPrice <= 80
  ? console.log("less than 80") // if true
  : console.log("more than 80"); // if false
// Output: "more than 80" because iceTeaPrice is 100, which is greater than 80
