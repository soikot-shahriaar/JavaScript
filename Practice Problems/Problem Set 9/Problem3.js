/*
একটা ফাংশন লিখতে হবে যার নাম হবে sortMaker()। এই ফাংশনের parameter হবে একটি array এবং
এই array তে সবসময় দুইটি উপাদান থাকবে ।
1. যদি অ্যারের দুইটি উপাদান পজিটিভ সংখ্যা হয় সেক্ষেত্রে তুমি অ্যারে টিকে বড় থে কে ছোট ক্রমে সাজিয়ে রিটার্ন
করবে ।
2. যদি দুইটি উপাদান একই হয় সেক্ষেত্রে তুমি এই স্ট্রি ং রিটার্ন করবে ঃ “equal”
3. যদি অ্যারের যে কোন একটি উপাদান নেগেটিভ সংখ্যা হয় সেক্ষেত্রে তুমি রিটার্ন করবে “Invalid Input”

Sample Input  Sample Output
[2,3]         [3,2]
[4,2]         [4,2]
[4,4]         equal
[1,2]         [2,1]
[4,-2]        Invalid Input
*/

function sortMaker(arr) {
  if (arr[0] < 0 || arr[1] < 0) {
    return "invalid Input";
  } else if (arr[0] == arr[1]) {
    return "equal";
  } else if (arr[0] > arr[1]) {
    return arr;
  } else if (arr[0] > arr[1] || arr[1] > arr[0]) {
    const temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
    return arr;
  }
}
console.log(sortMaker([4, -2]));
