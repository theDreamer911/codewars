const mouthSize = (animal) =>
  animal.toLowerCase() == "alligator" ? "small" : "wide";

console.log(mouthSize("toucan"));
console.log(mouthSize("ALLIGATOR"));
