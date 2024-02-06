var teaLine = ["kalam", "salam", "balam", "jamal", "palam", "talam"];
console.log(teaLine);

console.log(teaLine.includes("kalam"));
console.log(teaLine.includes("rahim"));

var part = teaLine.slice(2); // removed first two elements
console.log(part);

var teaLine = ["kalam", "salam", "balam", "jamal", "palam", "talam"];
var part = teaLine.slice(2, 5);
console.log(part);
