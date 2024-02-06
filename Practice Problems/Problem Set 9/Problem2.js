/*
একটা function দেওয়া হবে called “matchFinder()” যা ইনপুট হিসেবে দুইটা string নিবে ।
1. যদি প্রথম স্ট্রি ংটির কোন একটি অংশের সাথে দ্বিতীয় স্ট্রি ংটির পুরোপুরি মিল খুজে পাও সেক্ষেত্রে তুমি boolean রিটার্ন করবে এক্ষেত্রে তোমাকে true রিটার্ন করতে হবে ।
2. আর যদি পুরোপুরি মিল খুজে না পাও সেক্ষেত্রে তুমি boolean false রিটার্ন করবে ।
3. দুটি ইনপুট স্ট্রি ং দেওয়া হলো কি না সেটা validate করবে । যদি দুইটি বা যে ্কোন একটি ইনপুট স্ট্রি ং না হয় সেক্ষেত্রে তুমি একটা মিনি ংফুল মেসেজ রিটার্ন করে দিবে ।

Sample Input       Sample Output
“John Doe”,“ohn”      true
“JavaScript”,“Code”   false
“Peter Parker”,“Pen”  false
“Peter Parker”,”pet”  false 
*/

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Please Input Strings";
  } else {
    const searchString = string2;
    const existInString = string1.includes(searchString);
    return existInString;
  }
}
console.log(matchFinder("Peter Parker", "pet"));
