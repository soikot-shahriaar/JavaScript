/*
তুমি দোকানে একটা চিপ্স কিনতে গেলা কিছু খুচরা টাকার নোট নিয়ে । একটা canPay() নামে function বানাও যেটা ২টা ইনপুট নেয়, একটা array, এবং আরেকটা number
Array এর প্রত্যেকটা element তোমার খুচরা টাকা বুঝায়
    1 taka
    2 taka
    5 taka
second input টা বুঝাই চিপ্স এর দাম ।

1. যদি খুচরা টাকা গুলো যোগ করে চিপ্স এর দামের সমান বা তার বেশি হয় তাহলে boolean true রিটার্ন করবে ।
2. আর যদি নোটগুলোর যোগফল চিপ্স এর দামের চেয়ে কম হয় সেক্ষেত্রে boolean false রিটার্ন করবে ।
3. ইনপুট এর প্রথম উপাদান empty অ্যারে কিনা চেক করবে । empty অ্যারে হলে মিনি ংফুল মেসেজ রিটার্ন করে দিবে ।

Sample Input    Sample Output
[1,2,5],10      false
[1,5,5],10      true
*/

function canPay(changeArray, totalDue) {
  if (changeArray.length == 0) {
    return "array is empty";
  } else {
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
      const element = changeArray[i];
      sum = sum + element;
    }
    if (sum >= totalDue) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(canPay([], 10));
