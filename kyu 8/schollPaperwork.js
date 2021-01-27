function paperwork(n, m) {
  return Math.sign(n) == 1 && Math.sign(m) == 1 ? n * m : 0;
}

console.log(paperwork(5, 5));
