// function nextPerfectSquare(n) {
//   var perfect = new Array();
//   for (i = 0; i < Math.pow(2, 53) - 1; i++) {
//     perfect.push(Math.pow(i, 2));
//     if (n < perfect[i]) {
//       n = perfect[i];
//       break;
//     } else if (n < 0) {
//       n = 0;
//       break;
//     }
//   }
//   console.log(perfect);
//   return n;
// }

// console.log(nextPerfectSquare(19));

function nextPerfectSquare(n) {
  m = Math.sqrt(n);
  if (n < 0) {
    nextPerfect = 0;
  } else if (n == 0) {
    nextPerfect = 1;
  } else if (n % m == 0) {
    m += 1;
    z = Math.ceil(m);
    // console.log(z);
    nextPerfect = Math.pow(z, 2);
  } else {
    nextPerfect = Math.pow(Math.ceil(m), 2);
  }

  return nextPerfect;
}

console.log(nextPerfectSquare(-3));
console.log(nextPerfectSquare(0));
console.log(nextPerfectSquare(33));
console.log(nextPerfectSquare(10));
console.log(nextPerfectSquare(4));
console.log(nextPerfectSquare(45));
