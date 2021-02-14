function encode(str) {
  arr = [];
  for (i = 0; i < str.length; i++) {
    arr.push(str[i].charCodeAt() * 6);
  }
  dec = [];
  for (j = 0; j < arr.length; j++) {
    dec.push(String.fromCharCode(arr[j]));
  }
  return dec.join("");
}

function decode(str) {
  arr = [];
  for (i = 0; i < str.length; i++) {
    arr.push(str[i].charCodeAt() / 6);
  }
  dec = [];
  for (j = 0; j < arr.length; j++) {
    dec.push(String.fromCharCode(arr[j]));
  }
  return dec.join("");
}

console.log(encode(`Hello World!`));
console.log(decode(`ưɞʈʈʚÀȊʚʬʈɘÆ`));
