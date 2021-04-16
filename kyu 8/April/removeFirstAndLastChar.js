// const removeChar = (string) => string.substr(1, string.length - 2);
const removeChar = (string) => string.slice(1, -1);

console.log(removeChar("eloquent"));
