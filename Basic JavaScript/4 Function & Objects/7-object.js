var shoppingCart = {
  // properties: values,
  books: 3,
  sunglass: 1,
  mouse: 2,
  keyboard: 3,
  pen: 10,
};

// get property values in 3 ways
console.log(shoppingCart.books);

console.log(shoppingCart["books"]);

var bookProName = "books";
var booksNumber = shoppingCart[bookProName];
console.log(booksNumber);

// change property values
console.log(shoppingCart);

shoppingCart.mouse = 4;
console.log(shoppingCart);

shoppingCart["books"] = 40;
console.log(shoppingCart);
