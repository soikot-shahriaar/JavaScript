function factorialReverse(number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result = result * i;
    // console.log(i);
  }
  return result;
}

const myNumber = 7;
const fact = factorialReverse(myNumber);
console.log("Factorial of", myNumber, "is", fact);
