const uefaEuro2016 = (country, score) => {
  return score[0] > score[1]
    ? `At match ${country[0]} - ${country[1]}, ${country[0]} won!`
    : score[0] == score[1]
    ? `At match ${country[0]} - ${country[1]}, teams played draw`
    : `At match ${country[1]} - ${country[0]}, ${country[1]} won!`;
};

console.log(uefaEuro2016(["Germany", "Ukraine"], [2, 0]));
