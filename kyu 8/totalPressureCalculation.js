// function solution(m1, m2, M1, M2, V, T) {
//   mass = (M1 * 0.001) / m1 + (M2 * 0.001) / m2;
//   R = 0.082;
//   constanta = (R * (T + 273.15)) / V;
//   return mass * constanta * 1000;
// }

solution = (m1, m2, M1, M2, V, T, R = 0.082) =>
  ((M1 * 0.001) / m1 + (M2 * 0.001) / m2) * ((R * (T + 273.15)) / V) * 1000;

// console.log(solution(44, 30, 3, 2, 5, 50));
console.log(solution(60, 20, 10, 30, 10, 100));
