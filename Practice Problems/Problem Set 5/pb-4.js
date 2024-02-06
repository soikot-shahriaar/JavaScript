// Calculate the total cost of the products in a shopping cart

const shoppingCart = [
  { name: "shoe", price: 1200, quantity: 2 },
  { name: "shirt", price: 2200, quantity: 2 },
  { name: "pant", price: 1900, quantity: 2 },
  { name: "belt", price: 600, quantity: 2 },
];

function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productTotal = product.price * product.quantity;
    sum = sum + productTotal;
    // console.log(product);
  }
  return sum;
}
console.log("total cost:", totalCost(shoppingCart));
