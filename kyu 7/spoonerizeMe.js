function spoonerize(word) {
  const arr = word.split(" ");
  const first = arr[0][0];
  const second = arr[1][0];
  const txt1 = arr[0].substring(1, arr[0].length);
  const txt2 = arr[1].substring(1, arr[1].length);
  return `${second.concat(txt1)} ${first.concat(txt2)}`;
}

console.log(spoonerize("not picking"));
