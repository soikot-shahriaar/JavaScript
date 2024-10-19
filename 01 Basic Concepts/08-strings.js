const name = "shahriar"; // A string variable holding a name
const repoCount = 50; // A number variable holding the repository count

// Using template literals for string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Creating a string object
const gameName = new String("shahriar-skt-com");

// Accessing characters and prototype of the string object
// console.log(gameName[0]);           // Output: "s"
// console.log(gameName.__proto__);     // Shows the prototype of String

// String properties and methods
// console.log(gameName.length);        // Output: 17 (length of the string object)
// console.log(gameName.toUpperCase()); // Output: "SHAHRIAR-SKT-COM"

// Character at a specific index
console.log(gameName.charAt(2)); // Output: "a"

// Finding the index of a character
console.log(gameName.indexOf("t")); // Output: 6 (first occurrence of "t")

// Extracting a substring
const newString = gameName.substring(0, 4); // Extracts "shah" (from index 0 to 4)
console.log(newString); // Output: "shah"

// Slicing a string
const anotherString = gameName.slice(4, 8); // Extracts "riar" (from index 4 to 8)
console.log(anotherString); // Output: "riar"

// Trimming whitespace from both ends of a string
const newStringOne = "   shahriar    ";
console.log(newStringOne); // Output: "   shahriar    "
console.log(newStringOne.trim()); // Output: "shahriar" (whitespace removed)

// URL string manipulation
const url = "https://www.soikot-shahriar.com/";

// Replacing a substring
console.log(url.replace("soikot", "shahriar")); // Output: "https://www.shahriar-shahriar.com/"

// Checking if a substring exists in the URL
console.log(url.includes("abcd")); // Output: false (abcd not found)

// Splitting the string into an array
console.log(gameName.split("-")); // Output: ["shahriar", "skt", "com"]
