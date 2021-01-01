function sumStr(a, b) {
  if (a == undefined) {
    a = 0;
  }
  if (b == undefined) {
    b = 0;
  }
  var sum1 = parseInt(a);
  var sum2 = parseInt(b);
  sum3 = sum1 + sum2;
  return sum3.toString();
  //   return (sum1 + sum2).toString();
}

console.log(sumStr());
