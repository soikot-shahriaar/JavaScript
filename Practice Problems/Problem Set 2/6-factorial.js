// sum of numbers using function
// function sumOfNumbers(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum = sum + i;
//     console.log(i, sum);
//   }
//   return sum;
// }
// const myNumber= 7;
// sumOfNumbers(myNumber);

// sum of numbers using function
function multiOfNumbers(number) {
  let multi = 1; // for multiplication use 1
  for (let i = 1; i <= number; i++) {
    multi = multi * i;
    //   console.log(i, multi);
  }
  return multi;
}

const myNumber = 7;
const result = multiOfNumbers(myNumber);
console.log(result);
