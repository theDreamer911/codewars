function countSalutes(hall) {
  arr = hall.split("");
  count = 0;
  multiplier = 0;
  console.log(arr);
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == "<") multiplier++;
  }

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == ">") count += multiplier;
    else if (arr[i] == "<") multiplier--;
  }

  answer = count * 2;
  return answer;
}

console.log(countSalutes("<---->---<---<-->"));
