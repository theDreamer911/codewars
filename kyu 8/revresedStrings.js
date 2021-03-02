// const solution = (str) => str.split("").reverse().join("");
const solution = (str) => [...str].reverse().join("");

console.log(solution("world"));
