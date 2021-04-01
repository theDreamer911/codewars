const countSheeps = (arrayOfSheep) => {
  let answer = 0;
  arrayOfSheep.map((e) => (e == true ? answer++ : 0));
  return answer;
};

var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

console.log(countSheeps(array1));
