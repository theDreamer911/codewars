function pipeFix(lst) {
  begin = lst[0];
  last = lst[lst.length - 1];
  answer = [];
  for (let i = begin; i <= last; i++) {
    answer.push(i);
  }
  return answer;
}

console.log(pipeFix([6, 9]));
