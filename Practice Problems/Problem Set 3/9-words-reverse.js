function reverseWords(strings) {
  const words = strings.split(" ");
  const result = [];
  for (let i = words.length - 1; i >= 0; i--) {
    const element = words[i];
    result.push(element);
  }
  //console.log(result);
  const reversed = result.join(" ");
  return reversed;
}

const myString = "amar sonar bangla";
console.log(reverseWords(myString));
