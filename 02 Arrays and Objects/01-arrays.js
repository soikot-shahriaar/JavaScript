// Defining arrays using two different methods
const myArr = [0, 1, 2, 3, 4, 5]; // Array of numbers
const myHeroes = ["messi", "ronaldo", "neymar"]; // Array of strings

const myArr2 = new Array(1, 2, 3, 4); // Another way to define an array using the Array constructor
// console.log(myArr[1]); // Output: 1 (Accessing the second element in the array)

// Array methods

// Adding elements to the end of the array
// myArr.push(6); // Adds 6 to the end of the array
// myArr.push(7); // Adds 7 to the end of the array
// myArr.pop(); // Removes the last element from the array

// Adding elements to the beginning of the array
// myArr.unshift(9); // Adds 9 to the beginning of the array
// myArr.shift(); // Removes the first element from the array

// Checking if an element exists in the array
// console.log(myArr.includes(9)); // Checks if 9 is present in the array, returns true or false
// console.log(myArr.indexOf(3)); // Finds the index of the element 3 in the array, returns -1 if not found

// Joining array elements into a string
// const newArr = myArr.join(); // Joins all elements of the array into a string, separated by commas
// console.log(myArr); // Output: [0, 1, 2, 3, 4, 5] (original array is unchanged)
// console.log(newArr); // Output: "0,1,2,3,4,5" (joined string)

// Array slicing and splicing

console.log("A ", myArr); // Original array before slicing

// Using slice (non-destructive)
// Slice extracts part of the array (from index 1 to 3), but doesn't modify the original array
const myn1 = myArr.slice(1, 3);
console.log(myn1); // Output: [1, 2] (extracted portion)
console.log("B ", myArr); // Output: Original array remains unchanged

// Using splice (destructive)
// Splice removes elements from the array (starting at index 1, removing 3 elements)
const myn2 = myArr.splice(1, 3);
console.log("C ", myArr); // Output: [0, 4, 5] (modified array after splicing)
console.log(myn2); // Output: [1, 2, 3] (removed portion)
