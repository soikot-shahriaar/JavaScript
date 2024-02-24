function findSum(arr) {
  if (!Array.isArray(arr)) {
    return "Please provide me an Array";
  }
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum;
}
// console.log(findSum(5));
console.log(findSum([1, 2, 3, 4, 5]));
