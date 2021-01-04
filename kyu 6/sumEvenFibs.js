// function fibonacci(num) {
//   let a = 1,
//     b = 0,
//     temp;

//   if (num == 0) {
//     b = 0;
//   }
//   store = [];
//   while (num > 0) {
//     temp = a;
//     a = a + b;
//     b = temp;
//     num--;
//   }

//   return b;
// }
// console.log(fibonacci(1));

// function fibonacci(num) {
//   if (num == 0) return 0;
//   if (num < 1) return 1;

//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

// console.log(fibonacci(10));

// function evenFibonacci(num) {
//   let i;
//   let fib = [];
//   let answer = 0;

//   fib[0] = 0;
//   fib[1] = 1;
//   for (i = 2; i <= num; i++) {
//     fib[i] = fib[i - 2] + fib[i - 1];

//     // console.log(fib[i]);
//     if (fib[i] % 2 == 0) {
//       answer += fib[i];
//     }
//   }
//   return answer;
// }

// console.log(evenFibonacci(10));

fib = function (numMax) {
  for (
    var fibArray = [0, 1], i = 0, j = 1, k = 0;
    k < numMax - 1;
    i = j, j = x, k++
  ) {
    x = i + j;
    fibArray.push(x);
  }
  if (numMax == 0) {
    fibArray = [0];
  }
  console.log(fibArray);
};

console.log(fib(10));
