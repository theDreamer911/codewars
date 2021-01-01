function digitSum(str) {
  //Your code goes here
  sum = 0;
  for (i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
  }
  sum = sum.toString();
  console.log(sum);
  sum2 = 0;
  for (j = 0; j < sum.length; j++) {
    sum2 += parseInt(sum[j]);
  }
  console.log(sum2);
  sum2 = sum2.toString();
  sum3 = 0;
  for (k = 0; k < sum2.length; k++) {
    sum3 += parseInt(sum2[k]);
  }
  console.log(sum3);
  sum3 = sum3.toString();
  return sum3;
}

console.log(digitSum("1234"));
