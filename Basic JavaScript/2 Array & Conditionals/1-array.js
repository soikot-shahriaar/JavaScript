// array declaration
var friendsName = ["Salam", "Kalam", "Salema", "Kalima"];
var friendsAge = [22, 21, 20, 21];

console.log(friendsName);
console.log(friendsAge);

// length of array
console.log(friendsAge.length);
var arr = [];
console.log(arr.length);

// get elements by index
console.log(friendsAge[0]);
console.log(friendsAge[2]);

var girlFriendAge = friendsAge[2];
console.log(girlFriendAge);

// set elements by index
friendsAge[1] = 25;
console.log(friendsAge);

// finding index of elements
var position = friendsAge.indexOf(20);
console.log(position);

var position = friendsAge.indexOf(19);
console.log(position);
