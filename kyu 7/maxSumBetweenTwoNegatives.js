const sumimasen = (arr) => {
  let array = [];
  let tempArr = [];
  // let negativeArr = [];
  let long = arr.length;

  for (i = 0; i < long; i++) {
    if (arr[i] > 0) {
      tempArr.push(arr[i]);
      if (i === long - 1) array.push(tempArr);
    } else {
      array.push(tempArr);
      tempArr = [];
    }
  }
  sum = [];
  for (let i = 0; i < array.length; i++) {
    ans = array[i].reduce((a, b) => a + (b || 0));
    sum.push(ans);
  }
  return Math.max(...sum);
};

console.log(sumimasen([4, -1, 6, -2, 3, 5, -7, 7]));
console.log(sumimasen([5, -2]));
console.log(sumimasen([1, -2]));
