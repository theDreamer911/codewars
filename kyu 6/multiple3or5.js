function solution(number) {
  let three = [];
  let five = [];
  for (j = 3; j < number; j += 3) {
    three.push(j);
  }
  for (k = 5; k < number; k += 5) {
    five.push(k);
  }
  let combined = [...three, ...five].sort();
  let neutral = [...new Set(combined)];

  const sum = neutral.reduce(function (a, b) {
    return a + b;
  }, 0);

  return sum;
}

console.log(solution(10));

// Another Way

// function solution(number) {
//   var sum = 0;

//   for (var i = 1; i < number; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
