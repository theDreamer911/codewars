function accum(strings) {
  let str = strings.split("");
  let output = [];
  for (let i = 1; i <= str.length; i++) {
    output.push(
      str[i - 1].toUpperCase() + str[i - 1].toLowerCase().repeat(i - 1)
    );
  }
  return output.join("-");
}

console.log(accum("abcd"));
