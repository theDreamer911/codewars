x = [1, 2, 3, 4, 5];
t = 3;

// console.log(x.splice(t, 1));
// console.log(x);

// function duplicate(x, t) {
//   sum = 0;
//   for (i = 1; i < x.length; i++) {
//     a = x[i - 1];
//     b = x[i];
//     sum += a + b;
//     if (sum == t) {
//       c = x.indexOf(x[i]);
//       x.splice(c, 1);
//     }
//   }
//   return x;
// }

// console.log(duplicate(x, t));

function trouble(x, t) {
  for (let i = 0; i < x.length; i++) {
    if (x[i] + x[i + 1] == t) {
      x.splice(i + 1, 1);
      i--;
    }
  }
  return x;
}
console.log(trouble([4, 1, 1, 1, 4], 2));
