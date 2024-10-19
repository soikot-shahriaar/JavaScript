// Example 1: Simple For Loop

// A loop from 0 to 10 that prints each value of 'i'
for (let i = 0; i <= 10; i++) {
  const element = i;

  // When i equals 5, log a special message
  if (element == 5) {
    //console.log("5 is the best number"); // This will print when i is 5
  }

  // Log the value of 'element' (i) on each iteration
  //console.log(element); // Will print numbers from 0 to 10
}

// This will throw an error because 'element' is declared with 'let' inside the loop, so it's not accessible outside
// console.log(element);

// Example 2: Nested For Loops

// Outer loop runs from 1 to 10
for (let i = 1; i <= 10; i++) {
  //console.log(`Outer loop value: ${i}`); // Logs the value of the outer loop (i)

  // Inner loop runs from 1 to 10 for each value of 'i'
  for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and outer loop value ${i}`);
    // This will print multiplication tables from 1 to 10
    //console.log(i + '*' + j + ' = ' + i * j);
  }
}

// Example 3: Looping Through an Array

let myArray = ["flash", "batman", "superman"];

// The loop runs from 0 to the length of the array (3 in this case)
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index]; // Access each element of the array by its index

  //console.log(element); // Will print: "flash", "batman", "superman"
}

// Example 4: Break and Continue

// 'break' stops the loop when a certain condition is met
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`); // Will log when index is 5
//         break; // Exits the loop entirely when index reaches 5
//     }
//     console.log(`Value of i is ${index}`); // Logs values from 1 to 4
// }

// 'continue' skips the current iteration when the condition is met, but keeps the loop going
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`); // Will log when index is 5
    continue; // Skips the rest of the current iteration and continues with the next one
  }
  console.log(`Value of i is ${index}`); // Will print values from 1 to 20, except 5
}
