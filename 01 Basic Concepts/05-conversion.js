let score = "shahriar";

let valueInNumber = Number(score); // Converts "shahriar" to NaN
console.log(valueInNumber); // Output: NaN
console.log(typeof valueInNumber); // Output: number

// Examples of Number conversions:
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "shahriar";

let booleanIsLoggedIn = Boolean(isLoggedIn); // Converts "shahriar" to true (non-empty string)
console.log(booleanIsLoggedIn); // Output: true

// Boolean conversion examples:
// 1 => true; 0 => false
// "" => false (empty string)
// "shahriar" => true (non-empty string)

let someNumber = 33;

let stringNumber = String(someNumber); // Converts 33 to "33"
console.log(stringNumber); // Output: "33"
console.log(typeof stringNumber); // Output: string
