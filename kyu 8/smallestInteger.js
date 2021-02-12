// Solution One
smallest = (arr) => {
  const sorted = arr.sort((a, b) => a - b);
  const lowest = sorted[0];
  const highest = sorted[sorted.length - 1];
  return `lowest: ${lowest} \nhighest: ${highest}\n`;
};

// Solution Two
smallest = (arr) => {
  const lowest = Math.min(...arr);
  const highest = Math.max(...arr);
  return `lowest: ${lowest} \nhighest: ${highest}\n`;
};

console.log(smallest([34, 15, 88, 2]));
console.log(smallest([34, -345, -1, 100]));
