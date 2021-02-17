function removeRotten(bagOfFruits) {
  if (bagOfFruits == null) bagOfFruits = [];
  return bagOfFruits.map((e) => e.replace(/rotten/gi, "").toLowerCase());
}

console.log(removeRotten(null));
