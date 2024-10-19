// Creating a new Date object representing the current date and time
let myDate = new Date();
// console.log(myDate.toString()); // Output: Current date and time as a string
// console.log(myDate.toDateString()); // Output: Current date in a human-readable format
// console.log(myDate.toLocaleString()); // Output: Current date and time in local format
// console.log(typeof myDate); // Output: "object"

// Creating specific Date objects
// let myCreatedDate = new Date(2023, 0, 23); // January 23, 2023 (0-indexed month)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3); // January 23, 2023, at 05:03 AM
// let myCreatedDate = new Date("2023-01-14"); // January 14, 2023
let myCreatedDate = new Date("01-14-2023"); // January 14, 2023
console.log(myCreatedDate.toLocaleString()); // Output: Date in local format

// Getting the current timestamp (milliseconds since January 1, 1970)
let myTimeStamp = Date.now();
// console.log(myTimeStamp); // Output: Current timestamp in milliseconds
// console.log(myCreatedDate.getTime()); // Output: Timestamp of myCreatedDate in milliseconds
console.log(Math.floor(Date.now() / 1000)); // Output: Current timestamp in seconds

// Getting current date and time information
let newDate = new Date();
console.log(newDate); // Output: Current date and time
console.log(newDate.getMonth() + 1); // Output: Current month (1-indexed)
console.log(newDate.getDay()); // Output: Day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)

// Displaying the current day and time in a string format
console.log(`${newDate.getDay()} and the time `);

// Getting the full name of the current weekday
console.log(
  newDate.toLocaleString("default", {
    weekday: "long", // Full name of the weekday
  })
);
