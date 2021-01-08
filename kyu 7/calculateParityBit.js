// function scale(x, base) {
//   const parsed = parseInt(x, base);
//   if (isNaN(parsed)) {
//     return 0;
//   }
//   return parsed * 100;
// }

// console.log(scale("1111", 2));

function checker(parity, bin) {
  // let number = 0;
  // if (bin.length % 2 == 1) {
  //   number = parseInt(bin, 2) + 1;
  // } else {
  // }
  number = parseInt(bin, 2);
  // console.log(number);
  if (number % 2 == 0) {
    return parity == "even" ? 1 : 0;
  } else {
    return parity == "odd" ? 1 : 0;
  }
}
// console.log(checker("odd", "110101111"));
console.log(checker("odd", "111010010"));
// console.log(checker("odd", "1010"));
console.log(parseInt(111010010, 2));

// even 100011110

// console.table({
//   name: "hand",
//   age: 20,
// });
