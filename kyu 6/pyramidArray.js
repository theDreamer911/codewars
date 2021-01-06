function pyramid(number) {
  let newArr = [];
  if (number == 0) {
    newArr.push();
  }
  for (i = 1; i <= number; i++) {
    if (i > 0) {
      newArr.push(Array(i).fill(1));
    }
  }
  return newArr;
}
console.log(pyramid(10));
