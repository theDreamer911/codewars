function representase(number) {
  var biner = number,
    binary = "";
  if (number % 2 == 0) {
    while (number > 0) {
      binary = (number % 2) + binary;
      number = Math.floor(number / 2);
    }
    return binary;
  } else {
    hex = number.toString(16);
    return hex;
  }
}

console.log(representase(17));

function representase(number) {
  number % 2 == 0
    ? (answer = number.toString(2))
    : (answer = number.toString(16));
  return answer;
}

console.log(representase(1));

console.log(representase(4));
console.log(representase(6));
console.log(representase(8));
console.log(representase(10));
console.log(representase(11));
console.log(representase(13));
