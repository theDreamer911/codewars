const isPrime = (x) => {
  if (x <= 1) return false;
  if (x <= 3) return true;

  if (x % 2 == 0 || x % 3 == 0) return false;

  for (let i = 5; i * i < x; i = i + 6) {
    if (x % i == 0 || x % (i + 2) == 0) return false;
  }
  return true;
};

const nextPrime = (x) => {
  if (x <= 1) return 2;
  let prime = x;
  let found = false;

  while (!found) {
    prime++;
    if (isPrime(prime)) found = true;
  }
  return prime;
};

console.log(nextPrime(4));
