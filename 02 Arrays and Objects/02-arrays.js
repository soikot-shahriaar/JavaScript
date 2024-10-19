// Defining two separate arrays for Marvel and DC heroes
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// Pushing the entire dc_heros array into marvel_heros
// marvel_heros.push(dc_heros);
// console.log(marvel_heros); // Output: ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
// console.log(marvel_heros[3][1]); // Output: "flash" (accessing element in the nested array)

// Concatenating two arrays using concat()
const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros); // Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// Merging arrays using spread operator
const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros); // Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// Nested array example
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Flattening a nested array with flat(), using Infinity to ensure all levels are flattened
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
// Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Checking if a variable is an array
console.log(Array.isArray("shahriar")); // Output: false (because "shahriar" is a string)
console.log(Array.from("shahriar")); // Output: ["s", "h", "a", "h", "r", "i", "a", "r"] (converts string to array)

// Attempting to create an array from an object (this does not work as expected)
console.log(Array.from({ name: "shahriar" })); // Output: [] (creates an empty array because object does not have an array-like structure)

// Creating an array using Array.of()
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
// Output: [100, 200, 300] (creates an array with the given arguments)
