// function median(digit) {
//   const arrayDigit = digit.toString().split("");
//   const number = arrayDigit.map((x) => parseInt(x));
//   const long = number.length;

//   for (i = 0; i < long; i++) {
//     if (long % 2 == 0) {
//       index = Math.round(long / 2);
//       return number[index];
//     } else {
//       index = Math.round(long / 2) - 1;
//       return number[index];
//     }
//   }
// }

function means(digit) {
  const arrayDigit = digit.toString().split("");
  let number = arrayDigit.map((x) => parseInt(x));

  while (number.length > 1) {
    let l = number[0];
    number = number.slice(1).map((r) => {
      let v = Math.ceil((l + r) / 2);
      l = r;
      return v;
    });
  }
  return number[0];
}
console.log(means(345));

// console.log("------");

// let array = [3, 4, 5];
// console.log(array);

// // console.log(...array);
// while (array.length > 1) {
//   let l = array[0];
//   console.log(l);
//   array = array.slice(1).map((r) => {
//     let v = Math.ceil((l + r) / 2);
//     l = r;
//     return v;
//   });
// }
// // console.log(...array);
