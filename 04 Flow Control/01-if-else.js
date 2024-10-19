// Declare a boolean variable to check if the user is logged in
const isUserloggedIn = true;

// Declare a variable for temperature
const temperature = 41;

// Example 1: Simple if-else conditional

// if (temperature === 40) {
//     // This block runs if the temperature is exactly 40
//     console.log("less than 50");
// } else {
//     // If the temperature is not 40, this block runs
//     console.log("temperature is greater than 50");
// }

// console.log("Execute"); // Will always execute because it's outside the if-else block

// Comparison operators in JavaScript:
// <  : less than
// >  : greater than
// <= : less than or equal to
// >= : greater than or equal to
// == : loose equality (checks value, ignores type)
// != : loose inequality (checks value, ignores type)
// ===: strict equality (checks value and type)
// !==: strict inequality (checks value and type)

// Example 2: Declaring a variable inside an if block

// const score = 200;

// if (score > 100) {
//     // If score is greater than 100, this block runs
//     let power = "fly"; // 'power' is scoped inside the if block
//     console.log(`User power: ${power}`); // Outputs 'User power: fly'
// }

// console.log(`User power: ${power}`); // Error: 'power' is not accessible here, it's block-scoped

// Example 3: Using multiple console.log() in a single line

// const balance = 1000;

// if (balance > 500) {
//     // This will log both "test" and "test2" if balance is greater than 500
//     console.log("test"), console.log("test2");
// }

// Example 4: Using multiple else-if conditions

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     // This block runs if balance is between 500 and 749
//     console.log("less than 750");
// } else if (balance < 900) {
//     // This block runs if balance is between 750 and 899
//     console.log("less than 900");
// } else {
//     // If none of the previous conditions are true, this block runs
//     console.log("less than 1200");
// }

// Example 5: Using logical operators (AND - &&, OR - ||)

// Declare multiple variables for user login status and payment method
const userLoggedIn = true; // User is logged in
const debitCard = true; // User has a debit card
const loggedInFromGoogle = false; // User is not logged in from Google
const loggedInFromEmail = true; // User is logged in from email

// Check if the user is logged in, has a debit card, and if 2 equals 3 (false)
if (userLoggedIn && debitCard && 2 == 3) {
  // This block won't execute because 2 == 3 is false
  console.log("Allow to buy course");
}

// Check if the user is logged in from Google OR email (OR operator)
if (loggedInFromGoogle || loggedInFromEmail) {
  // This block runs because 'loggedInFromEmail' is true
  console.log("User logged in");
}
