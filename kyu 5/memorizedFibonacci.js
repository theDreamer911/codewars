var fibbonaci = (function () {
  var fibArr = [];

  return function (n) {
    var calcFib = function (n) {
      return n < 1 ? Math.abs(n) : fibbonaci(n - 1) + fibbonaci(n - 2);
    };
    if (!fibArr[n]) {
      fibArr[n] = calcFib(n);
    }
    return fibArr[n];
  };
})();

console.log(fibbonaci(50));
