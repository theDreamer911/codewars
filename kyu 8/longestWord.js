const theLongest = (text) => {
  const arr = text.split(" ");
  const str = arr.map((e) => e.length);
  const long = str.indexOf(Math.max(...str));
  return arr[long];
};
