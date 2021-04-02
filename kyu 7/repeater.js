// function repeater(string, n) {
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.push(string);
//   }
//   return arr.join("");
// }

const repeater = (str, n) => str.repeat(n);

console.log(repeater("a", 5));

// Python
// repeater=str.__mul__
