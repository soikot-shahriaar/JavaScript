// function to find the sum of all elements of  an array
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
// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// getSumOfArray(myNumbers);
console.log(getSumOfArray[(12, 65, 45, 78, 32, 45, 91)]);
