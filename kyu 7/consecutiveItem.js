function consecutive(arr, a, b) {
  //   console.log(arr);
  //   console.log(a);
  //   console.log(b);
  const numb1 = arr.indexOf(a);
  const numb2 = arr.indexOf(b);
  const diff = Math.abs(numb1 - numb2);

  return diff == 1 ? true : false;
}

console.log(consecutive([1, 3, 9, 7], 3, 7));
