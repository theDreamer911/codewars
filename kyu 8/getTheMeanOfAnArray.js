function getAverage(marks) {
  total = marks.reduce((a, b) => a + b, 0);
  sum = marks.length;
  return Math.floor(total / sum);
}

console.log(getAverage([2, 2, 2, 2]));
console.log(getAverage([1, 2, 3, 4, 5]));
