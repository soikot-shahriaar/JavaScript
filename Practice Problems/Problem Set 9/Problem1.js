/*
cubeNumber() নামে একটা function দেওয়া হয়েছে । function টা একটা input নাম্বার নিবে । 
1. Input নাম্বারটাকে cube করে result টা রি টার্ন করবে ফাংশন থেকে ।
2. Bonus: ইনপুট হিসেবে number টাইপ এর পরিবর্তে অন্য কিছু দিলে তুমি একটা মিনি ংফুল মেসেজ রিটার্ন করে দিবে ফাংশন থেকে ।

Sample Input  Sample Output
3             27
4             64
*/

function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Enter a Number Please! ";
  } else {
    return (result = Math.pow(number, 3));
  }
}
console.log(cubeNumber(4));
