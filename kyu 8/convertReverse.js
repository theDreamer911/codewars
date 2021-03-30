const digitize = (n) =>
  n
    .toString()
    .split("")
    .reverse()
    .map((e) => parseInt(e));

// .toString()
// .split()
// .map((e) => parseInt(e));

console.log(digitize(35231));
