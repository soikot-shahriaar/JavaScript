// write a function to find the sum of all odd numbers of an array

// function to get odd numbers
function getOddNumbersOfArray(numbers) {
  const oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[i];
    if (element % 2 != 0) {
      // console.log(index, element);
      oddNumbers.push(element);
    }
  }
  return oddNumbers;
}

// function to get sum of odd numbers
function getSumOfArray(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[i];
    sum = sum + element;
    // console.log(index, element, sum);
  }
  return sum;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNumbersOfArray(myNumbers);
console.log("Odd Numbers:", oddNumbers);
const oddNumbersSum = getSumOfArray(oddNumbers);
console.log("Sum of Odd Numbers:", oddNumbersSum);
