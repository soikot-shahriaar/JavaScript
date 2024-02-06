//Find the cheapest phone from an array of phone objects

const phones = [
  {
    name: "Samsung",
    camera: 12,
    storage: "32gb",
    price: 36000,
    color: "silver",
  },
  {
    name: "Xiaomi",
    camera: 12,
    storage: "32gb",
    price: 31000,
    color: "silver",
  },
  {
    name: "Walton",
    camera: 12,
    storage: "32gb",
    price: 21000,
    color: "silver",
  },
  {
    name: "Sony Xperia",
    camera: 12,
    storage: "32gb",
    price: 33000,
    color: "silver",
  },
  {
    name: "iphone",
    camera: 12,
    storage: "32gb",
    price: 56000,
    color: "silver",
  },
  {
    name: "Nokia Mobile",
    camera: 12,
    storage: "32gb",
    price: 26000,
    color: "silver",
  },
];
function cheapestPhone(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    // console.log(phone);
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }
  return cheapest;
}
console.log(cheapestPhone(phones));
