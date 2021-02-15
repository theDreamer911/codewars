// function vowel2index(str) {
//   var answer = [];
//   for (i = 0; i < str.length; i++) {
//     if (str[i] == "a") {
//       answer.push(i);
//     } else if (str[i] == "i") {
//       answer.push(i);
//     } else if (str[i] == "u") {
//       answer.push(i);
//     } else if (str[i] == "e") {
//       answer.push(i);
//     } else if (str[i] == "o") {
//       answer.push(i);
//     } else {
//       answer.push(str[i]);
//     }
//   }
//   return answer.join("");
// }
vowel2index = (str) => str.replace(/[aiueo]/gi, (vowel, offset) => offset + 1);

console.log(vowel2index("thAt is my string"));
