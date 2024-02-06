// function oddOrEven(number) {
//   const remainder = number % 2;
//   if ((remainder == 0)) {
//     console.log("number is even");
//   } else {
//     console.log("number is odd");
//   }
// }
// oddOrEven(12);
// oddOrEven(133);

function isEven(number) {
  const remainder = number % 2;
  if (remainder == 0) {
    return true;
  } else {
    return false;
  }
}
const number1 = isEven(12);
console.log(number1);
const number2 = isEven(133);
console.log(number2);
