/* 3. Function Hoisting
Hoisting allows function declarations to be used before they are defined in the code.
Example: */

// Hoisted function declaration
console.log(square(4)); // Output: 16
function square(x) {
  return x * x;
}

// Function expressions are NOT hoisted
console.log(cube(3)); // Error: cube is not defined
const cube = function (x) {
  return x * x * x;
};
