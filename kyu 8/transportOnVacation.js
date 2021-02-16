function rent(d) {
  let sum = 0;
  const daily = 40;
  if (d < 3) {
    sum += d * daily;
  } else if (d >= 3 && d < 7) {
    sum += d * daily - 20;
  } else {
    sum += d * daily - 50;
  }
  return sum;
}

console.log(rent(3));
