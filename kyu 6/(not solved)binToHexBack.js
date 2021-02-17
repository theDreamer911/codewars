// Normal
// function hexToBin(hex) {
//     return parseInt(hex, 16).toString(2);
// }

// function binToHex(bin) {
//     return parseInt(bin, 2).toString(16);
// }

// console.log(hexToBin("00F"));
// console.log(binToHex("000101"));

// hardWay
// function binToHex(binaryString) {
//   var output = "";

//   // For every 4 bits in the binary string
//   for(var i=0; i<binaryString.length;i+=4){
//       var bytes = binaryString.substr(i,4)

//       v
//   }
// }

function HEX2BIN(number, places) {
  // Return error if number is not hexadecimal or contains more than ten characters (10 digits)
  if (!/^[0-9A-Fa-f]{1,10}$/.test(number)) return "#NUM!";

  // Check if number is negative
  var negative =
    number.length === 10 && number.substring(0, 1).toLowerCase() === "f"
      ? true
      : false;

  // Convert hexadecimal number to decimal
  var decimal = negative
    ? parseInt(number, 16) - 1099511627776
    : parseInt(number, 16);

  // Return error if number is lower than -512 or greater than 511
  if (decimal < -512 || decimal > 511) return "#NUM!";

  // Ignore places and return a 10-character binary number if number is negative
  if (negative)
    return (
      "1" +
      _s.repeat("0", 9 - (512 + decimal).toString(2).length) +
      (512 + decimal).toString(2)
    );

  // Convert decimal number to binary
  var result = decimal.toString(2);

  // Return binary number using the minimum number of characters necessary if places is undefined
  if (typeof places === "undefined") {
    return result;
  } else {
    // Return error if places is nonnumeric
    if (isNaN(places)) return "#VALUE!";

    // Return error if places is negative
    if (places < 0) return "#NUM!";

    // Truncate places in case it is not an integer
    places = Math.floor(places);

    // Pad return value with leading 0s (zeros) if necessary (using Underscore.string)
    return places >= result.length
      ? _s.repeat("0", places - result.length) + result
      : "#NUM!";
  }
}

console.log(HEX2BIN("00F"));

// function bin2hex(str) {
//   var result = "";
//   var alphabet = "0123456789ABCDEF";
//   var mask = 15; //0000 1111 binary

//   for (var i = 0; i < str.length; i++) {
//     var index1 = str[i] & mask;
//     var index2 = (str[i] >> 4) & mask;
//     result += alphabet[index2] + alphabet[index1] + "-";
//   }
//   result = result.substring(0, result.length - 1);
//   return result;
// }
function bin2hex(str) {
  var result = "";

  for (var i = 0; i < str.length; i++) {
    var hex = str[i].toString(16);
    if (hex.length == 1) {
      hex = "0" + hex;
    }
    result += hex + "-";
  }
  result = result.substring(0, result.length - 1);
  return result;
}

console.log(bin2hex("FA"));
