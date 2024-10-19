// var c = 300  // The 'var' keyword is function-scoped or globally scoped, not block-scoped like 'let' and 'const'.

let a = 300; // 'let' allows for block-scoping. This 'a' is defined globally within the block (outside the if block).

if (true) {
  let a = 10; // This 'a' is scoped to the 'if' block, so it won't interfere with the global 'a'.
  const b = 20; // 'b' is also block-scoped and is limited to this 'if' block.
  // console.log("INNER: ", a); // Output would be 10 (the block-scoped 'a').
}

// console.log(a); // Output: 300 (the global 'a').
// console.log(b); // Error: 'b' is not defined outside the 'if' block.
// console.log(c); // Error: 'c' is not defined if you commented out the var 'c'.

// Example of closures: Function 'two' can access variables from its parent function 'one'.
function one() {
  const username = "shahriar"; // Declared in the function scope of 'one'.

  function two() {
    const website = "youtube"; // Declared in the function scope of 'two'.
    console.log(username); // This works because 'two' has access to 'username' from its parent scope ('one').
  }
  // console.log(website); // Error: 'website' is defined inside 'two', not accessible here.

  two(); // Calling 'two' from within 'one' to access 'username' and log it.
}

// one(); // Output: 'shahriar' (username from the parent function).

// Nested block scoping example.
if (true) {
  const username = "shahriar"; // Block-scoped to this 'if' block.
  if (username === "shahriar") {
    const website = " youtube"; // Block-scoped to the inner 'if' block.
    // console.log(username + website); // Output: 'shahriar youtube'.
  }
  // console.log(website); // Error: 'website' is not defined outside the inner block.
}

// console.log(username); // Error: 'username' is block-scoped, not accessible outside 'if' block.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Function hoisting in JavaScript.

console.log(addone(5)); // Output: 6 (because the function declaration is hoisted).

// Function declaration: this is hoisted, meaning the entire function definition is moved to the top.
function addone(num) {
  return num + 1; // Adds 1 to the input number.
}

// The following example showcases a difference between function declarations and function expressions.
// Function expression: this is **not** hoisted, meaning the code cannot reference the function before it is defined.

addTwo(5); // Error: Cannot access 'addTwo' before initialization.
const addTwo = function (num) {
  return num + 2; // Adds 2 to the input number.
};
