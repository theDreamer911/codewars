const maxRedigit = (num) => {
  return num.toString().length === 3
    ? (value = parseInt(
        num
          .toString()
          .split("")
          .sort((a, b) => b - a)
          .join("")
      ))
    : null;
  return value > 0 ? value : null;
};

console.log(maxRedigit(123));
