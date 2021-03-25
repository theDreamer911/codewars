num = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
];

const wallpaper = (l, w, h) =>
    w * l * h == 0
      ? num[0]
      : num[Math.ceil(((l * h * 2 + w * h * 2) * 1.15) / 5.2)];

console.log(wallpaper(6.3, 4.5, 3.29));
console.log(wallpaper(6.1, 6.7, 2.81));
