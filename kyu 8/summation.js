function summation(x) {
  arr = [];
  for (let i = 1; i <= x; i++) {
    arr.push(i);
  }
  return arr.reduce((a, b) => a + b);
}

console.log(summation(8));
