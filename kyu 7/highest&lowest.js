const highAndLow = (num) => {
  arr = num.split(" ").map((e) => parseInt(e));
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
};

console.log(highAndLow("1 2 3 4 5"));
