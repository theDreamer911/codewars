function swithed(str) {
  var change = {
    a: "b",
    b: "a",
  };
  str = str.replace(/a|b/gi, (matched) => {
    return change[matched];
  });
  return str;
}

console.log(swithed("aabacbaa"));

// const switcheroo = (x) => x.replace(/[ab]/g, (x) => (x == "a" ? "b" : "a"));
