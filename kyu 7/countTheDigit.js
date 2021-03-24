// arr = [1, 16, 81, 100, 121, 144, 169, 196, 361, 441];
// word = arr.join("").split("");
// val = 0;
// // one = word.map((e) => e);
// one = word.map((e) => (e == 1 ? val++ : "0"));

// console.log(val);
const nbDig = (n, d) => {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    let square = (i * i + "").split("");
    square.forEach((e) => (e == d ? answer++ : null));
  }
  return answer;
};

console.log(nbDig(10, 1));
