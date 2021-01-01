function iqTest(num) {
  array = num.split(" ");
  counter = array.map((x) => parseInt(x));
  status = counter.map((x, i) => (x % 2 == 0 ? `even` : `odd`));
  const findIndexOfDifferent = (status) =>
    status.findIndex((x) => status.indexOf(x) === status.lastIndexOf(x)) + 1;

  console.log(array);
  console.log(counter);
  console.log(status);

  return findIndexOfDifferent(status);
}

console.log(iqTest("2 4 7 8 10"));
console.log(iqTest("1 3 7 8 11"));

// const findIndexOfUnique = (arr) =>
//   arr.findIndex((x) => arr.indexOf(x) === arr.lastIndexOf(x)) + 1;

// console.log(findIndexOfUnique(["odd", "even", "even", "even", "even"]));

//   for (i = 0; i < status.length; i++) {
//     // console.log(status[i]);
//     // yes = status[i] == "even";
//     // nope = status[i] == "odd";
//     if (status[i].indexOf("even") == 0) {
//       console.log("yeah");
//     } else {
//       console.log("no");
//     }
//     // console.log(nope);
//   }

//   if (status.valueOf(`even`).length == 1) {
//     console.log("yeah");
//   } else if (status.valueOf(`odd`).length == 1) {
//     console.log("nope");
//   }
//   var count = {};
//   status.forEach(function (x) {
//     count[x] = (count[x] || 0) + 1;
//   });
