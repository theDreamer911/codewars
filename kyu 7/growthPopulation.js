function nb_year(p0, percent, aug, p) {
  percents = percent / 100;
  n = 0;
  pop = p0;
  while (pop < p) {
    pop = pop + pop * percents + aug;
    n++;
  }
  return n;
}

console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));
