// Creating an empty object 'tinderUser' using the object literal notation.
const tinderUser = {};

// Adding properties dynamically to the 'tinderUser' object.
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); // This would print the 'tinderUser' object with its properties.

// Defining another object 'regularUser' with nested objects inside it.
const regularUser = {
  email: "some@gmail.com", // Email property
  fullname: {
    userfullname: {
      firstname: "soikot", // Nested 'firstname' property
      lastname: "shahriar", // Nested 'lastname' property
    },
  },
};

// Accessing the nested 'firstname' property within 'regularUser'.
// console.log(regularUser.fullname.userfullname.firstname); // Output: "soikot"

// Defining two simple objects 'obj1' and 'obj2' with number keys and string values.
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// Merging multiple objects into one using the spread operator.
// This combines the properties of obj1 and obj2 into a new object 'obj3'.
const obj3 = { ...obj1, ...obj2, ...obj4 };
// console.log(obj3); // Output: {1: 'a', 2: 'b', 3: 'a', 4: 'b', 5: 'a', 6: 'b'}

// Defining an array of user objects with id and email properties.
const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 2,
    email: "j@gmail.com",
  },
  {
    id: 3,
    email: "k@gmail.com",
  },
];

// Accessing the email property of the second user in the 'users' array.
// users[1].email // Output: "j@gmail.com"

// Object methods to interact with 'tinderUser' object.

// Returns an array of property keys of the 'tinderUser' object.
// console.log(Object.keys(tinderUser)); // Output: ['id', 'name', 'isLoggedIn']

// Returns an array of property values of the 'tinderUser' object.
// console.log(Object.values(tinderUser)); // Output: ['123abc', 'Sammy', false]

// Returns an array of key-value pairs of the 'tinderUser' object.
// console.log(Object.entries(tinderUser)); // Output: [['id', '123abc'], ['name', 'Sammy'], ['isLoggedIn', false]]

// Check if 'tinderUser' has the property 'isLoggedIn'.
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // Output: true
