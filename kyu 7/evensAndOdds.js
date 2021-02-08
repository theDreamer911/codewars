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
