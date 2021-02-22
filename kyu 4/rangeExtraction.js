// function rangeExtraction(list) {
//   var length = list.length;
//   var output = [];
//   var i, j;

//   for (i = 0; i < length; i = j + 1) {
//     output.push(list[i]);

//     for (j = i + 1; i < length && list[j] == list[j - 1] + 1; j++) j--;

//     if (i == j) {
//       output.push(",");
//     } else if (i + 1 == j) {
//       output.push(",", list[j], ",");
//     } else {
//       output.push("-", list[j], ",");
//     }
//   }
//   output.pop();
//   //   return output.join("");
// }

// solution = (arr) => (
//   (r = []),
//   arr.map((e, i) =>
//     i && !(arr[i - 1] + 1 - e) ? r.push(r.pop().concat(e)) : r.push([e])
//   ),
//   r.map((e) => (e.length + 1 - 1 ? `${e[0]}-${e.pop()}` : "" + e)).join(",")
// );

solution = (arr) => {
  var length = arr.length;
  var output = [];
  var i, j;

  for (i = 0; i < length; i = j + 1) {
    output.push(arr[i]);

    for (j = i + 1; j < length && arr[j] == arr[j - 1] + 1; j++);
    j--;

    if (i == j) {
      output.push(",");
    } else if (i + 1 == j) {
      output.push(",", arr[j], ",");
    } else {
      output.push("-", arr[j], ",");
    }
  }
  output.pop();
  return output.join("");
};

solution = (list) =>
  list.reduce((acc, curr, i) => {
    if (i == 0) return curr.toString();
    if (list[i - 1] == curr - 1 && list[i + 1] == curr + 1) return acc;
    if (list[i - 2] == curr - 2 && list[i - 1] == curr - 1)
      return acc + "-" + curr;
    return acc + "," + curr;
  });

console.log(
  solution([
    -6,
    -3,
    -2,
    -1,
    0,
    1,
    3,
    4,
    5,
    7,
    8,
    9,
    10,
    11,
    14,
    15,
    17,
    18,
    19,
    20,
  ])
);
