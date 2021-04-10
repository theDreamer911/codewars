const isIsogram = (text) => {
  origin = text.toLowerCase().split("");
  isogram = [...new Set(origin)];
  return origin.length == isogram.length ? true : false;
};

console.log(isIsogram("delicous"));
console.log(isIsogram(""));
