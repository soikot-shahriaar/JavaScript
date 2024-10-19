// Basic comparison operators
console.log(2 > 1); // true: 2 is greater than 1
console.log(2 >= 1); // true: 2 is greater than or equal to 1
console.log(2 < 1); // false: 2 is not less than 1
console.log(2 == 1); // false: 2 is not equal to 1
console.log(2 != 1); // true: 2 is not equal to 1

// Comparison with strings and numbers
console.log("2" > 1); // true: "2" is coerced to the number 2, which is greater than 1
console.log("02" > 1); // true: "02" is also coerced to 2, which is greater than 1

// Comparisons with null
console.log(null > 0); // false: null is treated as 0 for non-strict comparisons
console.log(null == 0); // false: null only equals undefined, not 0
console.log(null >= 0); // true: null is coerced to 0 for this comparison

// Comparisons with undefined
console.log(undefined == 0); // false: undefined is only equal to null in loose equality
console.log(undefined > 0); // false: undefined cannot be compared numerically
console.log(undefined < 0); // false: undefined cannot be compared numerically

// Strict equality (===) checks both value and type
console.log("2" === 2); // false: different types (string and number)
