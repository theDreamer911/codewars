const getNumberFromString = (s) => parseInt(s.match(/\d+/g).join(""));

console.log(getNumberFromString("1"));
