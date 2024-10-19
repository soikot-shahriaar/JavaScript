const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];
console.log(friends);

//removes elements from an array
//will change the original array
//inserts new elements in their place, returning the deleted elements.
const partial = friends.splice(2, 5, 99, 555, 777);
console.log(partial);
