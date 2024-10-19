const myNums = [1, 2, 3];

// Using reduce to calculate the total of the numbers in myNums
// The first parameter is a function that takes an accumulator (acc) and the current value (currval)
// The second parameter is the initial value for the accumulator (0 in this case)
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`); // This logs the accumulator and current value
//     return acc + currval; // Returns the new value of the accumulator
// }, 0);

// Using reduce with an arrow function for a more concise syntax
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0); // Sums up the numbers in myNums

console.log(myTotal); // Output: 6

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

// Using reduce to calculate the total price of all items in the shoppingCart array
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0); // Sums up the prices of all items

console.log(priceToPay); // Output: 19996
