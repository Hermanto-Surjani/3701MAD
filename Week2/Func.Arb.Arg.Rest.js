/* 7. Arbitrary Number of Arguments with Rest Parameters */

// The rest parameter (...args) is a modern way to handle an arbitrary number of arguments.
// It works in both traditional and arrow functions

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
