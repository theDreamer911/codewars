const between = (a, b) => {
  arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
};

console.log(between(1, 4));
