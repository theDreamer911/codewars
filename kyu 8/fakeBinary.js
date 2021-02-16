function fakeBin(x) {
  arr = x.split("");
  answer = arr.map((e) => (e < 5 ? (e = 0) : (e = 1)));
  return answer.join("");
}

console.log(fakeBin("45385593107843568"));
