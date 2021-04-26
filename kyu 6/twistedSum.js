const twistedSum = (n) => {
  let num = 0;
  let more = [];
  let total = [];
  for (let i = 0; i <= n; i++) {
    if (i <= 9) {
      num += i;
    } else {
      t = i
        .toString()
        .split("")
        .map((e) => parseInt(e));
      total.push(t.reduce((a, b) => a + b || 0));
      more.push(total.reduce((a, b) => a + b || 0));
    }
  }
  return n > 9 ? num + more[more.length - 1] : num;
};

console.log(twistedSum(1));

// num = 12;
// for (let i = 10; i <= num; i++) {}
// console.log(mores);

// console.log(parseInt(num.toString().split("")));
