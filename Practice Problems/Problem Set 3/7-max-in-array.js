function maxInArray(numbers) {
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[i];
    // console.log(element);
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}
const tallest = maxInArray([167, 190, 120, 165, 137]);
console.log("tallest person is:", tallest);