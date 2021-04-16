const solution = (input, marker) => {
  input = input.split("\n");
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (marker.indexOf(input[i][j]) != -1) {
        input[i] = input[i].substring(0, j).trim();
        break;
      }
    }
  }
  return input.join("\n");
};

// function solution(input, markers){
//   return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
// }
console.log(
  solution(
    "apples, plums % and bananas\npears\noranges !applesauce",
    ["%", "!"],
    "apples, plums\npears\noranges"
  )
);
