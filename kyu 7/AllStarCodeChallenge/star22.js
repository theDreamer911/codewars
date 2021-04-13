function toTime(sec) {
  const min = (sec % 3600) / 60;
  const hour = sec / 3600;
  return `${Math.floor(hour)} hour(s) and ${Math.floor(min)} minute(s)`;
}
console.log(toTime(23500));
