const getCount = (strs) => {
  let vowel;
  let unvowel;
  if (typeof strs == "string") {
    vowel = strs.match(/[aiueo]/gi);
    unvowel = strs.match(/[^aiueo., ]/gi);
  } else {
    vowel = null;
    unvowel = null;
  }

  vowels = vowel == null || vowel == undefined ? 0 : vowel.length;
  consonant = unvowel == null || vowel == undefined ? 0 : unvowel.length;

  let keys = ["vowels", "consonants"];
  let values = [vowels, consonant];

  let result = {};
  keys.forEach((key, i) => (result[key] = values[i]));
  return result;
};

console.log(getCount("adsd dd"));

// const getCount = (str) => {
//   const vowel = ["a", "i", "u", "e", "o"];
//   const skip = [" ", ",", "."];
//   let vowels = 0;
//   let consonants = 0;

//   if (str != undefined) {
//     for (let letter of str.toLowerCase()) {
//       console.log(letter);
//       if (vowel.includes(letter)) {
//         vowels++;
//       } else if (skip.includes(letter)) {
//       } else {
//         consonants++;
//       }
//     }
//   } else {
//     vowels = 0;
//     consonants = 0;
//   }

//   let keys = ["vowels", "consonants"];
//   let values = [vowels, consonants];

//   let result = {};
//   keys.forEach((key, i) => (result[key] = values[i]));
//   return result;
// };

// const getCount = (str) => {
//   let txt = typeof str === "string";
//   return {
//     vowels: txt ? str.replace(/[^aiueo]/gi, "").length : 0,
//     consonants: txt ? str.replace(/[^bcdfghjklmnpqrstvwxyz]/gi, "").length : 0,
//   };
// };
