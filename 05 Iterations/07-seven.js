const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using map to create a new array where each number is multiplied by 10
// const newNums = myNumers.map((num) => { return num + 10 }); // This is commented out

// Chaining map and filter methods to transform and filter the array
const newNums = myNumers
  .map((num) => num * 10) // Step 1: Multiply each number by 10
  .map((num) => num + 1) // Step 2: Add 1 to each result
  .filter((num) => num >= 40); // Step 3: Filter numbers that are greater than or equal to 40

console.log(newNums); // Output the final array
