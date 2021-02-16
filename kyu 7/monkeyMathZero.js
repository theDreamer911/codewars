oneZero = /abdegopq069DOPQR/g;

twoZero = /%&B8/g;

mongkey = (str) => str.replace(/[abdegopq069DOPQR]/g, (vowel, offset) => 1);
function counterO(mongkey) {
  saved = mongkey.split("");
  return saved;
}

console.log(counterO("banana"));

//  unsolved
