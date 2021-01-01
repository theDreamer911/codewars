// return `0${text.charCodeAt(0).toString(2)}`;
function whoTookTheCarKey(binary) {
  return (plaintText = binary
    .map((bin) => String.fromCharCode(parseInt(bin, 2)))
    .join(""));
  //   console.log(number);
  //   console.log(plaintText);
}

console.log(
  whoTookTheCarKey([
    "01000001",
    "01101100",
    "01100101",
    "01111000",
    "01100001",
    "01101110",
    "01100100",
    "01100101",
    "01110010",
  ])
);
