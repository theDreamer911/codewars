function findUnique(array) {
  function isInt(num) {
    return Number(num) === num && num % 1 === 0;
  }
  function positive(num) {
    return Number(num) === num && num >= 0;
  }
  function even(num) {
    return Number(num) === num && num % 2 === 0;
  }
  function different(params) {}
  //   lepo = array.filter((el) => isInt(el) === true);
  //   return lepo;
  console.log(even(array[3]));
}

console.log(findUnique([1, 2, 3, 2, 5, 7]));
// console.log(findUnique([2, 4, 6, 8, 9]));
// console.log(findUnique([2, -4, 6, 8]));
// console.log(findUnique([-2, -4, -6, 8]));
// console.log(findUnique([2, 4.4, 6, 8]));
// console.log(findUnique([2.2, 4.4, 6.6, 8]));
// console.log(findUnique([2, 2, 2, 4]));

// function isFloat(num) {
//   return Number(num) === num && num % 1 !== 0;
// }
