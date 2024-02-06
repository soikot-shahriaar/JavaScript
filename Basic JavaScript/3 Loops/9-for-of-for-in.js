const arr = [1, 2, 3, 4, 5];
for (let item of arr) {
  console.log(item); // This will output each element of the array on separate lines
}

const obj = { a: 10, b: 20, c: 30 };
for (let item in obj) {
  console.log(item); // This will output each property key of the object
  console.log(obj[item]); // This will output the value associated with the current property
}
