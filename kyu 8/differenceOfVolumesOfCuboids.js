// function number(a, b) {
//   var totalA = a.reduce(function (x, y) {
//     return x * y;
//   });
//   var totalB = b.reduce(function (x, y) {
//     return x * y;
//   });
//   var diff = (x, y) => {
//     return Math.abs(x - y);
//   };
//   return diff(totalA, totalB);
// }

// console.log(number([11, 2, 5], [1, 10, 8]));

function number2(a, b) {
  simplify = (a) => a.reduce((x, y) => x * y);
  return Math.abs(simplify(a) - simplify(b));
}

console.log(number2([11, 2, 5], [1, 10, 8]));
