// // wrong
// findOdd = (a) => {
//   let counts = {};

//   for (i = 0; i < a.length; i++) {
//     if (counts[a[i]]) {
//       counts[a[i]] += 1;
//     } else {
//       counts[a[i]] = 1;
//     }
//   }
//   console.log(counts);
// };

// console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));

// const findOdd = (a) => {
//   let count = 0;
//   let arr = a.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] == arr[j]) count++;
//     }
//     if (count % 2 !== 0) return arr[i];
//   }
// };

// const findOdd = (a) => {
//   let count = 0;
//   let arr = a.sort((a, b) => a - b);
//   //   let result = arr.map((e) => e.map((a) => a));
//   //   return result;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] == arr[j]) count++;
//     }
//     if (count % 2 !== 0) return arr[i];
//   }
// };
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
