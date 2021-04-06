function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  answer = [];
  for (let i = 0; i < birds.length; i++) {
    if (geese.indexOf(birds[i]) == -1) answer.push(birds[i]);
  }
  return answer;
}

// bird for bird in birds if bird not in geese

console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])
);
