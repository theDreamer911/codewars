function solution(string, number) {
  array = string.split("");
  answer = [];
  for (let i = 0; i < array.length; i++) {
    if (i < number) {
      answer.push(array[i]);
    } else {
      answer.push("...");
      break;
    }
  }

  return answer.join("");
}

console.log(solution("Testing String", 8));
