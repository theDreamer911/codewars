function uncensor(str1, str2) {
  return str1.replace(/\*/g, () => ([, ...str2] = str2)[0]);
}

console.log(uncensor("A**Z*N*", "MAIG"));
