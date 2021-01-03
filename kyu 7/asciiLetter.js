function asciiTranslator(number) {
  const numbString = number.toString();
  const separate = numbString.match(/.{1,2}/g);
  let numbArr = separate.map((x) => parseInt(x));
  let result = numbArr.map((x) => String.fromCharCode(x));
  return result.join("");
}

console.log(asciiTranslator(658776));
