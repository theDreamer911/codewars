function changer(usd) {
  cny = (usd * 6.75).toFixed(2);
  yuan = " Chinese Yuan";
  return cny + "yuan";
}

console.log(changer(466));
