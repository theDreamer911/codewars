// function longestSlideDown(arr) {
//   let change = [];
//   change.push(parseInt(arr[0]));
//   for (i = 0; i < arr.length; i++) {
//     for (j = 1; j < arr[i].length; j++) {
//       //   value += arr[i][j];
//       change.push(arr[i][i - 1]);
//       break;
//     }
//   }

//   console.log(change);
// const reducer = (acc, current) => acc + current;
//   return change.reduce(reducer);
// }

function longestSlideDown(pyramid) {
  let lastList = [];
  let newList = [];
  pyramid[0] = pyramid[0][0];
  for (i = 1; i < pyramid.length; i++) {
    for (j = 0; j < pyramid[i].length; j++) {
      if (j == 0) {
        lastList = pyramid[i - 1][j];
      } else if (j == pyramid[i].length - 1) {
        lastList = pyramid[i - 1][j - 1];
        console.log(lastList);
      } else {
        lastList.push(pyramid[i - 1][j] + pyramid[i - 1][j - 1]);
      }
      let last = Math.max(lastList);
      newList.push(last + pyramid[i][j]);
      pyramid[i][j] = newList;
    }
  }
  console.log(pyramid);

  let final = [];
  for (i = 0; i <= pyramid.length; i++) {
    for (j = 0; j <= i; j++) {
      for (k = 0; k <= j; k++) {
        final.push(pyramid.length[i][j][k]);
      }
    }
  }
}

console.log(
  longestSlideDown([
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 4, 82, 47, 65],
    [19, 1, 23, 75, 3, 34],
    [88, 2, 77, 73, 7, 63, 67],
    [99, 65, 4, 28, 6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
  ])
);
