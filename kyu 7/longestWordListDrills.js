const longest = (arr) => {
  const str = arr.map((e) => e.length);
  return Math.max(...str);
};

console.log(longest(["simple", "is", "better", "than", "complex"]));
