function fibbonaci(num) {
  var first = 0;
  var second = 1;

  var result;

  for (var i = 2; i <= num; i++) {
    result = (first + second) % 10;
    first = second;
    second = result;
  }
  return result;
}

console.log(fibbonaci(200001));
