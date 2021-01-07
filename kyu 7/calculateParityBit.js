// function scale(x, base) {
//   const parsed = parseInt(x, base);
//   if (isNaN(parsed)) {
//     return 0;
//   }
//   return parsed * 100;
// }

// console.log(scale("1111", 2));

function checker(parity, bin) {
  let number = 0;
  if (bin.length % 2 == 1) {
    number = parseInt(bin, 2) + 1;
  } else {
    number = parseInt(bin, 2);
  }
  console.log(number);
  if (number % 2 == 0) {
    return parity == "even" ? 1 : 0;
  } else {
    return parity == "odd" ? 1 : 0;
  }
}
// console.log(checker("odd", "110101111"));
// console.log(checker("odd", "100111100"));
// console.log(checker("odd", "1010"));
console.log(parseInt("1001", 2));
