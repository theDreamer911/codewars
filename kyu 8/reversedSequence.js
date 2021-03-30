// const reverseSeq = (n) => {
//   let answer = [];
//   for (let i = 1; i <= n; i++) answer.push(i);
//   return answer.reverse();
// };
const reverseSeq = (n) =>
  Array(n)
    .fill(0)
    .map((e, i) => n - i);

console.log(reverseSeq(5));
