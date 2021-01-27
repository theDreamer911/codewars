function wordToMarks(string) {
  let array = string.toLowerCase().split("");
  num = 0;
  for (i = 0; i < array.length; i++) {
    num += array[i].charCodeAt(0) - 97 + 1;
  }
  return num;
}

console.log(wordToMarks("attitude"));
