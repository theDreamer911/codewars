// function checker(parity, bin) {
//   number = parseInt(bin, 2);
//   // console.log(number);
//   if (number % 2 == 0) {
//     return parity == "even" ? 1 : 0;
//   } else {
//     return parity == "odd" ? 1 : 0;
//   }
// }
// console.log(checker("odd", "111010010"));

// function checker(parity, bin) {
//   numbSplit = bin.split("");
//   number = numbSplit.map((x) => parseInt(x));
//   if (parity == "odd") {
//     return 1;
//   }
//   if (parity == "even") {
//     return 0;
//   }
// }
// console.log(checker("even", "0101010"));

let array = [0, 1, 1, 0, 1, 1];
let unique = [...new Set(array)];

let duplicates = unique.map((value) => [
  value,
  array.filter((str) => str === value).length,
]);
