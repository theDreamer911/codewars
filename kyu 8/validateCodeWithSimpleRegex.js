validateCode = (num) => {
  check = /^[1-3]./i;
  result = check.test(num);
  return result;
};
console.log(validateCode(48));
