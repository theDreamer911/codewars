function longest(s1, s2) {
  wordA = s1.split("");
  wordB = s2.split("");
  arr1 = wordA.filter((e, i, a) => a.indexOf(e) === i);
  arr2 = wordB.filter((e, i, a) => a.indexOf(e) === i);
  combined = arr1.concat(arr2);
  filtered = combined.filter((e, i, a) => a.indexOf(e) === i);
  return filtered.sort().join("");
}

console.log(longest("aretheyhere", "yestheyarehere"));
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
