function countPrimeNumbers () {
  let primes = 0;

  for (let i = 2; i <= 100; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime === true) {
      primes += 1;
    }
  }
  return primes;
}

const start = performance.now();
setTimeout(() => {
  for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
  }
});
const finish = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${finish - start} milliseconds.`);
