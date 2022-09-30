# Intro to Typescript

## Set up
- Clone this repository to your machine
- Make sure your NodeJS is up-to-date
- Install Typescript globally (for simplicity): `npm install -g typescript` ([Official installation guide.](https://www.typescriptlang.org/download))

## Look around
- Open `prime.ts` and `primeTest.ts` and understand what these files are doing
- Compile all your TypeScript files to JavaScript: `npx tsc` (Note: you can also choose which file to compile)
- Open the resulting `.js` files and compare them to the sources
- Execute the test file: `node primeTest.js`
- Note: Inside `tsconfig.json`, the option `"mode": "NodeNext"` is needed to make TypeScript work with Node when using ES Modules. The option `"strict": true` enables strict compiling mode. (Check [this](https://www.typescriptlang.org/tsconfig) for more about `tsconfig`.)

## Implement
- Implement the function `generatePrimes` in `prime.ts`
- Uncomment the test code for `generatePrimes` in `primeTest.ts`
- Compile, test, and fix anything if needed
- Commit and push (Note: `.js` files won't be included since we are ignoring them in `.gitignore`)

## Resources:
- [TypeScript for New Programmer](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- [Common types in TypeScript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
