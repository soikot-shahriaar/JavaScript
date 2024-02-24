let first = "A";
let second = "B";
console.log(first, second);

// swap variable using temp
const temp = first;
first = second;
second = temp;
console.log(first, second);

// swap variable without temp
[first, second] = [second, first];
console.log(first, second);
