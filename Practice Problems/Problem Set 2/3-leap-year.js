// function to find a leap year
function isLeapYear(year) {
  const remainder1 = year % 4;
  const remainder2 = year % 100;
  const remainder3 = year % 400;
  if ((remainder1 == 0 && remainder2 != 0) || remainder3 == 0) {
    return true;
  }
  return false;
}

const year1 = isLeapYear(1900);
console.log(year1);
const year2 = isLeapYear(2000);
console.log(year2);
