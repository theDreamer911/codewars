const addArrays = (arr1, arr2) => {
  answer = arr1.map((e, i) => e + arr2[i]);
  return answer.includes(NaN) ? RangeError : answer;
};

console.log(addArrays([1, 2], [4, 5]));
console.log(addArrays([1, 2, 3], [4, 5]));
console.log(addArrays(["a"], ["b"]));
