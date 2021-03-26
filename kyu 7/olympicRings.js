function olympicRing(a) {
  let count = 0;
  a.split("").map((v) =>
    /[abdegopqADOPQR]/.test(v)
      ? count++
      : v === "B"
      ? (count += 2)
      : (count += 0)
  );
  let answer = Math.floor(count / 2);
  return answer == 2
    ? "Bronze!"
    : answer == 3
    ? "Silver!"
    : answer >= 4
    ? "Gold!"
    : "Not even a medal!";
}

console.log(olympicRing("wHjMudLwtoPGocnJ"));
