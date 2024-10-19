// Example 1: Using `for...of` with Arrays

const arr = [1, 2, 3, 4, 5];

// `for...of` loops through the values of an iterable (like an array).
// In this loop, each element in the array is assigned to 'num' one by one.
for (const num of arr) {
  //console.log(num);  // This will print 1, 2, 3, 4, 5 (each number in the array)
}

// Example 2: Using `for...of` with Strings

const greetings = "Hello world!";

// `for...of` can also iterate over strings, character by character.
for (const greet of greetings) {
  //console.log(`Each char is ${greet}`); // This will print each character of the string "Hello world!"
  // It prints: H, e, l, l, o, (space), w, o, r, l, d, !
}

// Example 3: Using `for...of` with Maps

// A `Map` is a collection of key-value pairs where both keys and values can be any type of data.
const map = new Map();

// `map.set()` method adds or updates entries in the map.
// Here, we are setting key-value pairs: country codes as keys, country names as values.
map.set("BD", "Bangladesh"); // Key: 'BD', Value: "Bangladesh"
map.set("USA", "United States of America"); // Key: 'USA', Value: "United States of America"
map.set("Fr", "France"); // Key: 'Fr', Value: "France"
map.set("BD", "Bangladesh"); // The key 'BD' is repeated, but Map overwrites the previous value with the new one (no duplicates in keys).

// `for...of` iterates over the map, and it returns an array of `[key, value]` for each entry.
for (const [key, value] of map) {
  //console.log(key, ':-', value);  // This will print each key and value pair.
  // Example output:
  // BD :- Bangladesh
  // USA :- United States of America
  // Fr :- France
}

// Example 4: Trying to use `for...of` with an Object

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// `for...of` does NOT work with objects because objects are not iterable by default in JavaScript.
// You can use `for...in` or convert the object into an iterable structure like `Object.entries()`.

// The following would throw an error because `myObject` is not iterable:
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

// However, if you want to loop over the key-value pairs of an object, you can use `Object.entries()` like this:

for (const [key, value] of Object.entries(myObject)) {
  console.log(key, ":-", value); // This will print:
  // game1 :- NFS
  // game2 :- Spiderman
}
