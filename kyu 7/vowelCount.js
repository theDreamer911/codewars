function getCount(str) {
  var vowelsCount = 0;
  var text = str.split("");

  for (i = 0; i < text.length; i++) {
    if (text[i] == "a") {
      vowelsCount += 1;
    }
    if (text[i] == "i") {
      vowelsCount += 1;
    }
    if (text[i] == "u") {
      vowelsCount += 1;
    }
    if (text[i] == "e") {
      vowelsCount += 1;
    }
    if (text[i] == "o") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}

console.log(getCount("abracadabra"));
