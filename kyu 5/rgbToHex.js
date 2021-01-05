function componentToHex(c) {
  if (c < 0) {
    c = 0;
  } else if (c > 255) {
    c = 255;
  }
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgb(r, g, b) {
  return `${componentToHex(r)}${componentToHex(g)}${componentToHex(
    b
  )}`.toUpperCase();
}
console.log(rgb(148, 0, -20));

// function hexToRgb(hex) {
//   const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//   return result
//     ? {
//         r: parseInt(result[1], 16),
//         g: parseInt(result[2], 16),
//         b: parseInt(result[3], 16),
//       }
//     : null;
// }

// console.log(hexToRgb("#0033ff").g);
