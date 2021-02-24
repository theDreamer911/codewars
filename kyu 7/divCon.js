// divCon = (arr) => arr.reduce((a, b) => parseInt(a) + parseInt(b));

function divCon(arr) {
  let num = 0;
  let str = 0;
  arr.map((e) => (typeof e == "number" ? (num += e) : (str += parseInt(e))));
  const total = num - str;
  return total;
}

console.log(divCon([9, 3, "7", "3"]));
