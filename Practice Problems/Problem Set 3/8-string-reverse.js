function reverseString(strings) {
  let reversed = "";
  
  for (let i = strings.length - 1; i >= 0; i--) {
    const element = strings[i];
    reversed = reversed + element;
    console.log(element, reversed);
  }
  return reversed;
}

let statement = "amar sonar bangla";
console.log(reverseString(statement));
