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
countPrimeNumbers();
const finish = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${finish - start} milliseconds.`);
