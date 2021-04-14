const find_average = (list) =>
  list.length == 0 ? 0 : list.reduce((a, b) => a + b) / list.length;

console.log(find_average([1, 2, 3]));
