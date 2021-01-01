// function spinWords(str) {
//   str2 = str.split(" ");
//   str3 = [];
//   for (i = 0; i < str2.length; i++) {
//     str3 = str2[i].split("");

//     if (str3.length >= 5) {
//       str3.reverse();
//     }

//     str4 = str3.join("");
//     return str4;
//   }

// }

// spinWords("Welcome");

// // for (i = 0; i < str2.length; i++) {
// //     str3 = str2[i].split("");

// //     if (str3.length >= 5) {
// //       str3.reverse();
// //     }

// //     str2.push(str3);
// //     console.log();
// //   }

// function spinWords(str) {
//   str2 = str.split(" ");
//   for(i=0; i)
//   return str2;
// }

// console.log(spinWords("Welcome To The Club"));

function spinWords(str) {
  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  const words = str.split(" ");
  const spinnedWords = words.map((word) => {
    if (word.length >= 5) return reverseString(word);
    else return word;
  });

  return spinnedWords.join(" ");
}

console.log(spinWords("Welcome To The Club"));

function spinWords(str) {
  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  const word = str.split(" ");
  const spinnedWords = word.map((word) => {
    if (word.length >= 5) return reverseString(word);
    else return word;
  });

  return spinnedWords.join(" ");
}
