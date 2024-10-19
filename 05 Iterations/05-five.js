// Example: Using forEach with an Array of Strings

const coding = ["js", "ruby", "java", "python", "cpp"];

// Using forEach with a traditional function expression
// coding.forEach(function (val) {
//     console.log(val); // Logs each item in the array
// })

// Using forEach with an arrow function
// coding.forEach((item) => {
//     console.log(item); // Logs each item in the array
// })

// Defining a separate function to print the item
function printMe(item) {
  console.log(item); // Logs the item passed to it
}

// Passing the function as a callback to forEach
// coding.forEach(printMe); // Calls printMe for each item in the array

// Using forEach with access to item, index, and array
// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr); // Logs item, its index, and the entire array
// })

// Example: Using forEach with an Array of Objects

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

// Using forEach to iterate over the array of objects
myCoding.forEach((item) => {
  // Log the language name from each object
  console.log(item.languageName); // Outputs: javascript, java, python
});
