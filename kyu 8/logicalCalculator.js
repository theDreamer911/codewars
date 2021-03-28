const logicalCalc = (array, op) => {
  if (op == "AND") return array.reduce((a, b) => a && b);
  if (op == "OR") return array.reduce((a, b) => a || b);
  if ((op = "XOR")) return array.reduce((a, b) => a ^ b) == 0 ? false : true;
};
// console.log(logicalCalc([23, 23, 12, 22], "AND"));
console.log(logicalCalc([true, false, false, false], "AND"));
console.log(logicalCalc([true, true], "XOR"));
