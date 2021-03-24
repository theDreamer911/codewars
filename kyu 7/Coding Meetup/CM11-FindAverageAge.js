var list1 = [
  {
    firstName: "Maria",
    lastName: "Y.",
    country: "Cyprus",
    continent: "Europe",
    age: 30,
    language: "Java",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 70,
    language: "Python",
  },
];

function getAverageAge(x) {
  let save = x.map((e) => e["age"]);
  const sum = Math.round(save.reduce((a, b) => a + b) / save.length);
  return sum;
}

getAverageAge(list1);
