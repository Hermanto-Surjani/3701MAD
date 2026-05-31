// Looping Structures

// Loops allow you to execute a block of code repeatedly based on a condition. JavaScript provides several
// looping constructs to handle different scenarios.

// for Loop
// The for loop is used to execute a block of code a specific number of times. It consists of three parts:
// initialization, condition, and increment/decrement.
// Syntax:

// for (initialization; condition; increment) {
// // Code to execute in each iteration
// }

// Example:

const iterations = 100;
let total = 0;
let end = 0;
let start = 0;
let min = 999999999999999;
let max = 0;

for (let i = 0; i < iterations; i++) {
  const start = performance.now();
  console.log(`Iteration ${i}`);
  const end = performance.now();
  const time = end - start;
  if (time < min) {
    min = time;
  }
  if (time > max) {
    max = time;
  }
  console.log(`Iteration ${i}: ${time} ms`);
  total += time;
}
console.log(`Average execution time: ${total / iterations} ms`);
console.log(`Minimum execution time: ${min} ms`);
console.log(`Maximum execution time: ${max} ms`);
