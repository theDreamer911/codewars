// const beta = "b";

// console.log(beta.charCodeAt(0).toString(2));

function wordToBin(str) {
  //code away!!!
  allText = str.split("");

  const array = allText.map((text) => {
    return `0${text.charCodeAt(0).toString(2)}`;
  });

  return array;
}

console.log(wordToBin("man"));
