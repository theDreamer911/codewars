function digitTier(num) {
  let numbString = num.toString();
  let length = numbString.length;
  let result = [];
  for (i = 0; i < length; i++) {
    first = numbString.substr(0, length - i);
    result.push(first);
  }
  return result.reverse();
}

console.log(digitTier(2017));
