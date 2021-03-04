const test = (num) => {
  arr = num.toString().split("");
  ori = arr.map((e) => parseInt(e));
  sort = arr.sort().map((e) => parseInt(e));
  join = sort.join("");
  min = Math.min(...sort);
  idx = ori.indexOf(min, 1);
  console.log(idx);
  return `${join}, ${idx}, ${min}, ${Math.max(...sort)}`;
};

console.log(test(96781191));
