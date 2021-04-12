// Math Floor
const getPositions = (s) => [
  Math.floor(s % 3),
  Math.floor(s / 3) % 3,
  Math.floor(s / 9) % 3,
];

// ~~ Operator
const getPositions = (s) => [~~s % 3, ~~(s / 3) % 3, ~~(s / 9) % 3];

console.log(getPositions(4));
