var shoppingCart = {
  books: 3,
  sunglass: 1,
  mouse: 2,
  keyboard: 3,
  pen: 10,
};

const keys = Object.keys(shoppingCart);
console.log(keys);
const values = Object.values(shoppingCart);
console.log(values);

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i], values[i]);
}
