const bump = (x) =>
  x.match(/n/gi) !== null && x.match(/n/gi).length > 15
    ? "Car Dead"
    : "Woohoo!";

// const bump = (x) => x.match(/n/gi).length;

console.log(bump("_"));
