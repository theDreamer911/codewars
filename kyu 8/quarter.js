const quarterOf = (month) => {
  //   if (month >= 1 && month < 4) {
  //     return 1;
  //   } else if (month >= 4 && month < 7) {
  //     return 2;
  //   } else if (month >= 7 && month < 10) {
  //     return 3;
  //   } else if (month >= 10 && month < 13) {
  //     return 4;
  //   } else {
  //     return false;
  //   }
  //   return Math.ceil(month / 3);
  const months = [3, 6, 9, 12];
  return months.findIndex((n) => n >= month) + 1;
};

console.log(quarterOf(1));
