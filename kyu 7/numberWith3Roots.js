// console.log(Math.pow(256, 1 / 8));
const root = (num) =>
  Number.isInteger(
    Math.pow(num, 1 / 2) && Math.pow(num, 1 / 4) && Math.pow(num, 1 / 8)
  )
    ? true
    : false;

console.log(root(256));
console.log(root(1000));

console.log(Math.pow(1000, 1 / 8));
