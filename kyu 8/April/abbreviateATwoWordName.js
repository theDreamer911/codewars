const abbrevName = (name) =>
  name
    .toUpperCase()
    .split(" ")
    .map((e) => e[0])
    .join(".");
console.log(abbrevName("Sam Harris"));
