// function reverse(num) {
//   let str = num.toString().split("");
//   console.log(str);
//   let reversed = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// console.log(reverse(189));

// var reverse = function (x) {
//   const reversedInt = Math.abs(x).toString().split("").reverse().join("");
//   if (reversedInt > 2 ** 31) return 0;

//   return reversedInt * Math.sign(x);
// };

// console.log(reverse(102));

function get(x) {
  for (i = 0; i < x; i++) {
    console.log(i);
  }
}

console.log(get(10));
