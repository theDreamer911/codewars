function amaroPlan(pirateNum) {
  //   var pirate = pirateNum;
  //   var coin = 20;
  //   var zero = [];
  //   for (j = 0; j < pirateNum; j++) {
  //     zero.push(0);
  //   }
  //   var array = zero;
  //   var odd = [];
  //   for (i = 0; i < array.length; i += 2) {
  //     array[i] = 1;
  //     total = coin * pirate;
  //     array[0] = total;
  //     odd = array.filter((v) => v == 1);
  //     samePirate = odd.length;
  //     if (pirate > 2) {
  //       array[0] = total - samePirate;
  //     }
  //     odd.push(array[i]);
  //   }
  //   return array;
}

function amaroPlan(pirateNum) {
  const result = Array(pirateNum).fill(0);
  result[0] = pirateNum * 20;
  for (let i = 2; i < pirateNum; i += 2) {
    result[0]--;
    result[i]++;
  }
  return result;
}
console.log("3=", amaroPlan(3));
console.log("4=", amaroPlan(4));
console.log("5=", amaroPlan(5));
console.log("6=", amaroPlan(6));
console.log("6=", amaroPlan(90));

// array = [120, 0, 1, 0, 1, 0];
// odd = array.filter((v) => v == 1);
// samePirate = odd.length;
// console.log(odd);
// console.log(samePirate);

// odd = [];
// for (i = 0; i < array.length; i += 2) {
//   array[i] = 1;
//   array[0] = 98;
//   odd.push(array[i]);
// }

// console.log(array);
