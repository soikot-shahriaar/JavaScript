/*
একটা function দেওয়া হবে called “findAddress()” যা ইনপুট হিসেবে একটা object নিবে । Object এর তিনটি property থাকবে ।
1. ১ম sample output এর format এ output return করতে হবে ।
2. যদি object এর কোন property মিসিং থাকে সেক্ষেত্রে সেই অংশটুকু double underscore
দিয়ে replace হবে । (২য় output এর format এ )

Sample Input                                      Sample Output
{street:10,house:“15A”,society:“EarthPerfect”}    10,15A,Earth Perfect
{street:10,society:“Earth Perfect”}               10,__,Earth Perfect
{street:10}                                       10,__,__
*/

function findAddress(obj) {
  if (typeof obj !== "object") {
    return "please input a valid object";
  } else {
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";
    return street + "," + house + "," + society;
  }
}
console.log(findAddress({ street: 10, society: "Earth Perfect" }));
