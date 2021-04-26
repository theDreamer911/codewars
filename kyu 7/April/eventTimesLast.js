const evenLast = (numbers) => {
  sum = [];
  last = numbers[numbers.length - 1];
  if (numbers.length == 0) {
    return 0;
  } else {
    numbers.map((e, i) => (i % 2 == 0 ? sum.push(e) : 0));
  }
  total = sum.reduce((a, b) => a + b || 0);
  return total * last;
};

console.log(evenLast([]));
