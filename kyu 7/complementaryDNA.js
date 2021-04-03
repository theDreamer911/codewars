const DNAStrand = (text) => {
  const arr = text.split("");
  let answer = [];
  arr.map((e) =>
    e == "A"
      ? answer.push("T")
      : e == "T"
      ? answer.push("A")
      : e == "C"
      ? answer.push("G")
      : e == "G"
      ? answer.push("C")
      : "nothing"
  );
  return answer.join("");
};

console.log(DNA_strand("AATCAA"));

function DNAStrand(dna) {
  return dna.replace(/./g, function (c) {
    return DNAStrand.pairs[c];
  });
}

DNAStrand.pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
};
