// Assume that num is always an integer
function isPrime(num: number): boolean {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.floor(Math.sqrt(num)); ++i) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

// // Generate an array containing all prime numbers <= max. Assume that max is an integer.
// // Make sure to annotate all of the function with Typescript typings.
// // Once you are done, add this function to the list of export.
function generatePrimes(max: number): Array<number> {
    // TODO: Implement this
    let primes = []
    for(let i = 0; i <= max; ++i){
        if(isPrime(i)){
            primes.push(i);
        }
    }
    return primes;
}

export { isPrime, generatePrimes };
