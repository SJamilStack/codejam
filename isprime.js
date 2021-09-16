function isPrime(n) {
  // Write your code here
  let count = 2;
  while (count < n / 2 + 1) {
    if (n % count !== 0) {
      count++;
      continue;
    }
    return getDivisorList(n);
  }
  return true;
}

function getDivisorList(n) {
  if (n < 2) return [];
  const result = [2];
  for (let i = 3; i <= n; i++) {
    if (n % i == 0) result.push(i);
  }
  return result[0];
}

// console.log(isPrime(2));
// console.log(isPrime(12));
console.log(isPrime(24));
console.log(isPrime(1));
console.log(isPrime(4));
// console.log(getDivisorList(24));
