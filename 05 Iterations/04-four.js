// Example 1: Using for...in with an Object

// An object containing programming language shortcuts as keys and their full names as values
const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

// The for...in loop iterates over the enumerable properties (keys) of the object
for (const key in myObject) {
  // Log the shortcut (key) and its corresponding value from the object
  // This will output:
  // js shortcut is for javascript
  // cpp shortcut is for C++
  // rb shortcut is for ruby
  // swift shortcut is for swift by apple
  //console.log(`${key} shortcut is for ${myObject[key]}`);
}

// Example 2: Using for...in with an Array

const programming = ["js", "rb", "py", "java", "cpp"];

// The for...in loop iterates over the indices of the array, not the values
for (const key in programming) {
  // Log the value at the current index of the array
  // This will output:
  // js
  // rb
  // py
  // java
  // cpp
  //console.log(programming[key]);
}

// Example 3: Using for...in with a Map (Commented Out)

// A Map allows you to associate keys with values, similar to an object but with more functionality
// const map = new Map();
// map.set('IN', "India");  // Adding key-value pairs to the map
// map.set('USA', "United States of America");
// map.set('Fr', "France");
// map.set('IN', "India"); // The key 'IN' will update the existing value

// The for...in loop is not suitable for iterating over Maps.
// Instead, you can use for...of or the Map's methods.
// for (const key in map) {
//     // This won't work as expected because map is not an object with enumerable properties.
//     //console.log(key);
// }
