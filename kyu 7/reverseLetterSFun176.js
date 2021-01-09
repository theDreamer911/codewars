const reverse = (str) => {
  pass = str.replace(/[^A-Za-z]/g, "");
  return pass.split("").reverse().join("");
};

console.log(reverse("krishan"));
console.log(reverse("ultr53o?n"));
