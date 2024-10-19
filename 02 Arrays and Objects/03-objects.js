// Define a unique symbol with the description "key1".
// Symbols are used to create unique keys for object properties.
const mySym = Symbol("key1");

// Define an object 'JsUser' using an object literal.
// It contains various properties and a symbol as a computed property key.
const JsUser = {
  name: "Soikot", // String property
  "full name": "Soikot Shahriar", // String property with spaces in the key name
  [mySym]: "mykey1", // Symbol-based property
  age: 18, // Number property
  location: "Dhaka", // String property
  email: "soikot.shahriaar@gmail.com", // String property
  isLoggedIn: false, // Boolean property
  lastLoginDays: ["Monday", "Saturday"], // Array property
};

// Access and print the 'email' property in two different ways:
// Using dot notation (preferred when the property name is simple).
// console.log(JsUser.email);

// Using bracket notation (useful when the property name has special characters or spaces).
// console.log(JsUser["email"]);

// Access and print the "full name" property using bracket notation since it has spaces.
// console.log(JsUser["full name"]);

// Access and print the symbol-based property by using the Symbol reference.
// console.log(JsUser[mySym]);

// Update the 'email' property of the JsUser object.
JsUser.email = "soikot@chatgpt.com";

// Object.freeze(JsUser); // This would make the object immutable, preventing further changes.

// Even though we updated the email again, the change will only happen if Object.freeze() is not called.
JsUser.email = "soikot@microsoft.com";

// console.log(JsUser); // This would print the entire JsUser object with the updated email.

// Add a method to the JsUser object called 'greeting'.
// It logs a simple message to the console when called.
JsUser.greeting = function () {
  console.log("Hello JS user");
};

// Add another method to the JsUser object called 'greetingTwo'.
// This method uses the 'this' keyword to access the 'name' property from within the object.
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

// Call and log the result of the 'greeting' method. It will print the message and return undefined.
console.log(JsUser.greeting()); // Output: "Hello JS user"

// Call and log the result of the 'greetingTwo' method. It will use 'this.name' to print a personalized message.
console.log(JsUser.greetingTwo()); // Output: "Hello JS user, Soikot"
