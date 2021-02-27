positiveSum = (arr) => {
  sums = [];
  find = arr.map((e) => (e > 0 ? sums.push(e) : (e = 0)));
  return sums.length > 0 ? sums.reduce((a, b) => a + b) : 0;
};

console.log(positiveSum([3, 4, -2, 1]));
console.log(positiveSum([]));
