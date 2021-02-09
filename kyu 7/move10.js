function moveTen(s) {
  let array = s.split("").map((word) => word.charCodeAt());
  words = [];
  for (i = 0; i < array.length; i++) {
    move = array[i] + 10;
    if (move > 122) {
      move = move - 26;
      words.push(move);
    } else {
      words.push(move);
    }
  }
  text = words.map((word) => String.fromCharCode(word)).join("");
  return text;
}

console.log(moveTen("testcasez"));
console.log(moveTen("codewars"));
