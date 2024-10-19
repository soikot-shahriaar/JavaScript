// This function prints the name "shahriar" one letter at a time.
function sayMyName() {
  console.log("s");
  console.log("h");
  console.log("a");
  console.log("h");
  console.log("r");
  console.log("i");
  console.log("a");
  console.log("r");
}

// sayMyName(); // This will call the function and print each letter of "shahriar".

// This function adds two numbers and returns the result.
function addTwoNumbers(number1, number2) {
  // We can either store the result in a variable and return it, or return it directly.
  // let result = number1 + number2
  // return result
  return number1 + number2; // Directly returning the sum of number1 and number2
}

const result = addTwoNumbers(3, 5); // Calling the function with 3 and 5 as arguments
// console.log("Result: ", result); // Output: Result: 8

// This function logs a user login message. It uses a default parameter 'sam' for the username.
function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("Please enter a username"); // If no username is provided, it prompts the user.
    return; // Exit the function if there's no username
  }
  return `${username} just logged in`; // Return the login message with the username
}

// console.log(loginUserMessage("shahriar")); // Output: "shahriar just logged in"
// console.log(loginUserMessage()); // Output: "sam just logged in" (default username is "sam")

// This function accepts multiple parameters using the rest operator (...num1).
// It returns the additional arguments passed after val1 and val2 as an array.
function calculateCartPrice(val1, val2, ...num1) {
  return num1; // It returns all the extra arguments (num1)
}

// console.log(calculateCartPrice(200, 400, 500, 2000)); // Output: [500, 2000]

// Defining an object 'user' with username and price properties.
const user = {
  username: "shahriar",
  prices: 199,
};

// This function takes an object as input and prints the username and price properties.
function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user); // Output: "Username is shahriar and price is undefined" (because of a typo in 'prices')
// The correct object is passed below:
handleObject({
  username: "sam",
  price: 399,
}); // Output: "Username is sam and price is 399"

// Defining an array with several numbers.
const myNewArray = [200, 400, 100, 600];

// This function returns the second value in the array.
function returnSecondValue(getArray) {
  return getArray[1]; // Accessing the second element (index 1)
}

// console.log(returnSecondValue(myNewArray)); // Output: 400 (second value of 'myNewArray')
console.log(returnSecondValue([200, 400, 500, 1000])); // Output: 400 (second value of the new array passed)
