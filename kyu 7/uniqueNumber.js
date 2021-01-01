function uniqueNumbers(numbersArray) {
  //   const uniqueNumber = [...new Set(numbersArray)];
  //   return uniqueNumber;
  return [...new Set(numbersArray)];
}

console.log(uniqueNumbers([1, 1, 2, 2, 1, 4]));
