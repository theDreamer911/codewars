//wrong

// const repeatStr = (n, s) => {
//   arr = [];
//   for (let i = 0; i < n; i++) {
//     arr += s.concat(s);
//   }
//   return arr;
// };

//true

const repeatStr = (n, s) => {
  str = "";
  for (let i = 0; i < n; i++) {
    str += s;
  }
  return str;
};

console.log(repeatStr(3, "hail"));

// const repeatStr = (n, s) => s.repeat(n);
