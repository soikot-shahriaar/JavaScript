// Example 1: Simple While Loop

let index = 0;

// This while loop runs as long as the condition `index <= 10` is true
while (index <= 10) {
  // Log the current value of 'index' on each iteration
  console.log(`Value of index is ${index}`);

  // Increment 'index' by 2 each time to avoid an infinite loop
  index = index + 2;
}

// Example 2: While Loop with an Array

let myArray = ["flash", "batman", "superman"];
let arr = 0;

// Loop through the array while 'arr' is less than the length of 'myArray'
while (arr < myArray.length) {
  // Log the element of 'myArray' at the current 'arr' index
  console.log(`Value is ${myArray[arr]}`);

  // Increment 'arr' by 1 to move to the next element in the array
  arr = arr + 1;
}

// Example 3: Do...While Loop

let score = 11;

// The do...while loop will run the code inside the 'do' block at least once,
// regardless of whether the condition is true, and then check the condition
do {
  // Log the current score
  console.log(`Score is ${score}`);

  // Increment 'score' by 1
  score++;
} while (score <= 10); // Condition is false, but the loop runs once before checking
