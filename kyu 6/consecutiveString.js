// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
// k = 2;

// const longestConsec = (txt, n) => {
//   let combine = [];
//   if (n == 3) {
//     for (let i = 0; i < txt.length - 2; i++) {
//       combine.push(txt[i] + txt[i + 1] + txt[i + 2]);
//     }
//   } else if (n == 2) {
//     for (let i = 0; i < txt.length - 1; i++) {
//       combine.push(txt[i] + txt[i + 1]);
//     }
//   } else if (n == 1) {
//     for (let i = 0; i < txt.length - 1; i++) {
//       combine.push(txt[i]);
//     }
//   } else {
//     return "";
//   }

//   let longest = combine.sort((a, b) => b.length - a.length)[0];

//   return longest;
// };

const longestConsec = (txt, n) => {
  if (txt.length == 0 || n > txt.length || n <= 0) return "";
  let longest = "";
  let newStr = "";

  for (let i = 0; i < txt.length; i++) {
    newStr = txt.slice(i, i + n);
    if (newStr.join("").length > longest.length) longest = newStr.join("");
  }

  return longest;
};

console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3));
