const getGrade = (a, b, c) => {
  average = (a + b + c) / 3;
  if (average >= 0 && average < 60) {
    return "F";
  } else if (average >= 60 && average < 70) {
    return "D";
  } else if (average >= 70 && average < 80) {
    return "C";
  } else if (average >= 80 && average < 90) {
    return "B";
  } else if (average >= 90 && average <= 100) {
    return "A";
  }
};

console.log(getGrade(95, 90, 93));
