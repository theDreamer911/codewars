function addArrays(array1, array2) {
  if (array1 === undefined) {
    array1 = [0];
  } else if (array1.length === 0) {
    array1 = [0];
  }
  if (array2 === undefined) {
    array2 = [0];
  } else if (array2.length === 0) {
    array2 = [0];
  }
  number1 = parseInt(array1.join(""));
  number2 = parseInt(array2.join(""));

  let backArray = [];
  let addition = "";

  addition = number1 + number2;
  const addString = Math.abs(addition).toString();

  for (i = 0; i < addString.length; i++) {
    backArray = addString.split``.map((x, i) =>
      i == 0 && addition < 0 ? -x : +x
    );
    if (backArray[0] === 0) {
      backArray = [];
    }
  }
  return backArray;
}

console.log(addArrays([]));
console.log(addArrays([8, 3], [9, 4]));

//===============

// function addArrays(array1, array2) {
//   if (array1.length === 0) {
//     array1 = [0];
//   }
//   if (array2.length === 0) {
//     array2 = [0];
//   }
//   number1 = parseInt(array1.join(""));
//   number2 = parseInt(array2.join(""));

//   addition = number1 + number2;
//   const addString = Math.abs(addition).toString();

//   for (i = 0; i < addString.length; i++) {
//     backArray = addString.split``.map((x, i) =>
//       i == 0 && addition < 0 ? -x : +x
//     );
//     if (backArray[0] === 0) {
//       backArray = [];
//     }
//   }
//   return backArray;
// }

// console.log(addArrays([0], []));

// const addArrays = (arr1, arr2) =>
//   arr1.length || arr2.length
//     ? `${+arr1.join`` + +arr2.join``}`.match(/-?\d/g).map(Number)
//     : [];

// console.log(addArrays([2, 3], [7, 5]));
