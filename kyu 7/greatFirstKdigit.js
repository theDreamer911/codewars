const findOddDigits = (n, k) => {
  str = n.toString();
  odd = [];
  for (let i = 0; i < str.length; i++) {
    str[i] % 2 == 1 ? odd.push(str[i]) : 0;
  }
  console.log(odd);
  result = [];
  for (let i = 0; i < k; i++) {
    result.push(odd[i]);
  }
  var filtered = result.filter((x) => x !== undefined);
  return k > filtered.length ? 0 : Number(result.join(""));
};

// console.log(findOddDigits(123456789111, 5));
console.log(findOddDigits(103756254800023, 2));
console.log(findOddDigits(30982, 3));
// console.log(findOddDigits(0, 100));

// function findOddDigits(n, k) {
//     const odd = (""+n).replace(/[02468]/g,'');
//     return k > odd.length ? 0 : +odd.substr(0,k);
//   }
