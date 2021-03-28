const reverseNumber = (num) => {
  console.log(Math.sign(num));
  arr = num.toString().split("").reverse();
  return arr.includes("-") == true
    ? -parseInt(arr.join(""))
    : parseInt(arr.join(""));
};

console.log(reverseNumber(-1000));
