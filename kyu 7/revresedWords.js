const reverseWords = (str) =>
  str
    .split(" ")
    .map((e) => e.split("").reverse().join(""))
    .join(" ");

console.log(reverseWords("This is an example!"));
