// const chuckPushUps = (str) => {
//   if (typeof str === "string" || str instanceof String) {
//     const arr = str.split(" ");
//     const mapping = arr.map((e) => e.replace(/[^0-9]/g, ""));
//     const filtered = mapping.filter((el) => el != "");
//     const integer = filtered.map((e) => parseInt(e, 2));
//     return Math.max(...integer);
//   } else {
//     return "FAIL!!";
//   }
// };

// console.log(
//   chuckPushUps(
//     '1 "Chuck" 10 "Stop that!" 1dd1 "Your vest looks stupid" 100 101 110'
//   )
// );

// console.log(chuckPushUps([]));
// console.log(chuckPushUps(3));

// const chuckPushUps = (str) => {
//     if (str == [] || str == "" || typeof str == "integer") {
//       console.log("FAIL!!");
//     } else {
//       const arr = str.split(" ");
//       const mapping = arr.map((e) => e.replace(/[^0-9]/g, ""));
//       const filtered = mapping.filter((el) => el != "");
//       const integer = filtered.map((e) => parseInt(e, 2));
//       return Math.max(...integer);
//     }
//   };

// function bool(str) {
//   if (Boolean(str) == false) {
//     return "yeay salah";
//   } else {
//     return "yah benar";
//   }
// }
// console.log(bool(""));
// console.log(bool(24));
// console.log(bool("dsad"));
// console.log(bool());

const chuckPushUps = (str) => {
  console.log(str);
  if (typeof str !== "string" || str instanceof String) {
    return "FAIL!!";
  } else if (Boolean(str) == true) {
    const arr = str.split(" ");
    const mapping = arr.map((e) => e.replace(/[^0-1]/g, ""));
    const filtered = mapping.filter((el) => el != "");
    const integer = filtered.map((e) => parseInt(e, 2));
    return integer.length > 0 ? Math.max(...integer) : "CHUCK SMASH!!";
  } else {
    return "FAIL!!";
  }
};

// fail1 = "01101010000101 01101010000110 01101010000100 01101010000011";
// fail2 =
console.log(
  chuckPushUps(
    "List of jobs: clean house, stop being such a badass, cook dinner, buy some sleeves for that stupid denim vest!"
  )
);
console.log(
  chuckPushUps("01101010000101 01101010000110 01101010000100 01101010000011")
);
// fall3 = ["not", "a", "string"];
