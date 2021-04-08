// a = "------/------";
// b = "-------------";
// console.log(a.length);
// console.log(b.length);

const bald = (x) => {
  const long = x.length;
  let shaved = x.split("");
  let stray = 0;
  for (let i = 0; i < long; i++) {
    if (shaved[i] == "/") stray++;
  }

  const clean = "-";
  let answer =
    stray == 0
      ? "Clean!"
      : stray == 1
      ? "Unicorn!"
      : stray == 2
      ? "Homer!"
      : stray >= 3 && stray <= 5
      ? "Careless!"
      : "Hobo!";

  return [clean.repeat(long), answer];
};

console.log(bald("/---------"));

//// best
// const bald = function(x){
//     return ['-'.repeat(x.length),
//             {0:'Clean!', 1:'Unicorn!',2:'Homer!', 3:'Careless!',
//              4:'Careless!', 5:'Careless!'}[x.replace(/-/g, '').length] || 'Hobo!']
//   }
