let number = 999999999999;

function getSumOfDigits (num, sum = 0) {
  while (num > 0) {
    let digit = num % 10;
    num = (num - digit) / 10;
    sum = sum + digit;
  }
  let result = sum;
  sum = 0;
  
  while (result > 0) {
    let digit = result % 10;
    result = (result - digit) / 10;
    sum += digit
  }  
  return sum;
}

console.log(getSumOfDigits(number));
