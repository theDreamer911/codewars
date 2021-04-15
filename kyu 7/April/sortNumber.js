const solution = (num) =>
  num == null ? [] : num.length == 0 ? [] : num.sort((a, b) => a - b);

console.log(solution([1, 2, 3, 10, 5]));
console.log(solution(null));
console.log(solution([]));
