var friendsAge = [22, 21, 20, 21, 24];
console.log(friendsAge);
console.log(friendsAge.length);

// push => add an element in array as the last element of the array.
friendsAge.push(19);
console.log(friendsAge);
console.log(friendsAge.length);

// pop => remove the last element of the array.
// which element will be popped
var popElement = friendsAge.pop();
console.log(popElement);

friendsAge.pop();
console.log(friendsAge);
console.log(friendsAge.length);

// shift() => remove first element from array
friendsAge.shift();
console.log(friendsAge);
console.log(friendsAge.length);

// shift => remove elements from array at beginning
friendsAge.shift(20, 24);
console.log(friendsAge);
console.log(friendsAge.length);

// unshift => add elements at beginning in array
friendsAge.unshift(32, 34, 35);
console.log(friendsAge);
console.log(friendsAge.length);
