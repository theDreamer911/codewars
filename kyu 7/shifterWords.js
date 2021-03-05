const shifter = (str) => {
  const base = ["H", "I", "N", "O", "S", "X", "Z", "M", "W"];
  arrays = [...new Set(str.split(" "))];
  let counter = 0;
  if (str.length === 0) arrays = [];
  arrays.forEach((word) => {
    console.log(word);
    let check = word.split("").every((letter) => base.includes(letter));
    if (check) counter++;
  });

  return counter;
};

console.log(shifter("WHO IS WHO ASSEMBLE"));
console.log(shifter(""));
