// let point = { kata: 5, "Petes kata": 10, life: 0, eating: 1 };

function paul(x) {
  if (x.length > 0) {
    const point = { kata: 5, "Petes kata": 10, life: 0, eating: 1 };
    let points = x.map((e) => point[e]);
    let total = points.reduce((a, b) => (a || 0) + (b || 0));
    return total < 40
      ? "Super happy!"
      : total >= 40 && total < 70
      ? "Happy!"
      : total >= 70 && total < 100
      ? "Sad!"
      : "Miserable!";
  } else {
    let total = 0;
    return "Super happy!";
  }
}

console.log(
  paul([
    "Petes kata",
    "Petes kata",
    "eating",
    "Petes kata",
    "Petes kata",
    "eating",
  ])
);

console.log(paul([]));
// console.log(typeof []);
// paul(["life", "eating", "life"]);
console.log(
  paul([
    "Petes kata",
    "Petes kata",
    "eating",
    "Petes kata",
    "Petes kata",
    "eating",
  ])
);
