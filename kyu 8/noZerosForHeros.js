const noBoringZeros = (n) =>
  n >= 0
    ? Number(
        String(parseInt(String(n).split("").reverse().join(""), 10))
          .split("")
          .reverse()
          .join("")
      )
    : -Number(
        String(parseInt(String(n).split("").reverse().join(""), 10))
          .split("")
          .reverse()
          .join("")
      );

console.log(noBoringZeros(1400));

// function noBoringZeros(n) {
//   let a = Number(String(parseInt(String(n).split("").reverse().join(""), 10)).split("").reverse().join(""));
//   return n >= 0 ? a : -a;
// }

const noBore = (num) => +`${num}`.replace(/0*$/, "");

console.log(noBore(2440000));
