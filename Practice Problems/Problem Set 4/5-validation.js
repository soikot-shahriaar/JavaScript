function add(num1, num2) {
  if (typeof num1 != "number" || typeof num2 != "number") {
    return "Enter a Number Please!";
  }
  return num1 + num2;
}

console.log(add(2, 5));
