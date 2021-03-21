const divisibleBy = (arr, n) => {
  let num = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % n == 0 ? num.push(arr[i]) : "";
  }
  return num;
};

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
console.log(divisibleBy([0], 2));
