// let inch = 84;
// let feet;
// feet = inch / 12;
// console.log(feet);

// inch to feet using function
function inchToFeet(inch) {
  let feet = inch / 12;
  return feet;
}

let nanaFeet = inchToFeet(156);
console.log(nanaFeet);

let senior = [36, 48, 90];
let dadaFeet = inchToFeet(senior[1]);
console.log(dadaFeet);
