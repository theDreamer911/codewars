function lifePathNumber(dateOfBirth) {
  let arr = dateOfBirth.split("-");
  let sum = [];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j <= arr[i].length; j++) {
      if (arr[i][j] == undefined) {
        arr[i][j] = 0;
      } else {
        sum.push(parseInt(arr[i][j]));
      }
    }
  }
  let sums = sum.reduce(reducer);
  let checker = sums.toString();

  let newSum = [];
  if (checker.length > 1) {
    for (i = 0; i < checker.length; i++) {
      newSum.push(parseInt(checker[i]));
    }
  } else {
    return parseInt(checker);
  }
  let newSums = newSum.reduce(reducer);
  let newChecker = newSums.toString();

  let lastSum = [];
  if (newChecker > 1) {
    for (i = 0; i < newChecker.length; i++) {
      lastSum.push(parseInt(newChecker[i]));
    }
  } else {
    return parseInt(newChecker);
  }
  return lastSum.reduce(reducer);
}

console.log(lifePathNumber("1961-07-04"));

// Best Solution that i found

// const lifePathNumber = (str) => +str.replace(/-/g, "") % 9 || 9;
// console.log(lifePathNumber("1961-07-04"));
