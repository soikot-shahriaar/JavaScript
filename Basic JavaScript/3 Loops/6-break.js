// for (i = 0; i < 10; i++) {
//   console.log(i);
//   if (i > 5) {
//     break;
//   }
// }

var numbers = [45, 76, 98, 78, 113, 35, 67, 56, 57];

for (let i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > 100) {
    break;
  }
  console.log(number);
}
