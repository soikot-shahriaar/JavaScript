// Example: Using forEach (Commented Out)

// const coding = ["js", "ruby", "java", "python", "cpp"];

// Using forEach to log each item (commented out)
// const values = coding.forEach((item) => {
//     //console.log(item); // Logs each programming language abbreviation
//     return item; // This return is ignored; forEach does not use it
// });

// Attempting to log the return value of forEach
// console.log(values); // This will log undefined since forEach does not return a value

// Example: Using filter with Numbers

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter to create a new array with numbers greater than 4
// const newNums = myNums.filter((num) => {
//     return num > 4; // Returns true for numbers greater than 4
// });

// Alternatively, using forEach to push values into a new array
const newNums = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num); // Pushes numbers greater than 4 into newNums
  }
});

console.log(newNums); // Logs the new array with numbers greater than 4

// Example: Using filter with an Array of Objects

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// Using filter to get books with genre 'History'
let userBooks = books.filter((bk) => bk.genre === "History");

// Using filter to get books published after 1995 in the 'History' genre
userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History"; // Returns books meeting both criteria
});

console.log(userBooks); // Logs the array of filtered books
