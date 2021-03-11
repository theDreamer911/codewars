const number = "283910";

const consecutive = (num) => {
  let answer = 0;

  for (let i = 0; i < num.length; i++) {
    let fives = parseInt(num.substr(i, 5));
    if (fives > answer) {
      answer = fives;
    }
  }

  return answer;
};

console.log(consecutive(number));

// const solution = (digits) =>
//   [...digits].reduce((pre, _, idx) =>
//     Math.max(pre, digits.slice(idx, idx + 5))
//   );

// function solution(digits) {
//   let numbers = digits.match(new RegExp(/9\d{4}/, "g"));
//   return Math.max.apply(0, numbers);
// }
