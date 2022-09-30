import { isPrime, generatePrimes } from './prime.js';

console.assert(isPrime(2) === true);
console.assert(isPrime(6) === false);

// Uncomment everything below when you finish implementing generatePrime
// Make sure to import generatePrime

// // Return true if both arrays have the same values in the same order, false otherwise
// // Assume that both arrays only contain integers.
function compareIntArrays(arr1: Array<number>, arr2: Array<number>): boolean {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; ++i) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
console.assert(compareIntArrays(generatePrimes(10), [2,3,5,7]));
console.assert(compareIntArrays(generatePrimes(1), []));