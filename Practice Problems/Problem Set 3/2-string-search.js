const lyrics ="Amar Sonar Bangla, Ami Tomay Valobashi"

// search something in a string
const searchString = "sOnAr";
const exist = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(exist);

// index in a string
console.log(lyrics.indexOf("i"));

// startsWith
console.log(lyrics.startsWith("Amar"));

// endsWith
console.log(lyrics.endsWith("Tomay"));

