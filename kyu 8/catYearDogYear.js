const humanYearsCatYearsDogYears = (humanYear) => {
  let catYear = 0;
  let dogYear = 0;

  if (humanYear === 1) {
    catYear = 15;
    dogYear = 15;
  } else if (humanYear === 2) {
    catYear = 24;
    dogYear = 24;
  } else if (humanYear >= 3) {
    catYear = 4 * (humanYear - 2) + 24;
    dogYear = 5 * (humanYear - 2) + 24;
  }
  return [humanYear, catYear, dogYear];
};

console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(2));
console.log(humanYearsCatYearsDogYears(10));
