function buildRowText(index, character) {
  // Do your magic :)
  var newChar = `|${character}|`;
  column = [];
  for (i = 0; i <= 9; i++) {
    column.push("|");
  }
  column.splice(index + 1, 0, newChar);
  gabung = column.join(" ");

  console.log(gabung);
  //   console.log(newOne);
  //   return combine;
}

console.log(buildRowText(2, "A"));
