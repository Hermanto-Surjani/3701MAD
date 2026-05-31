/* Introduction

Errors happen—whether due to typos, unexpected inputs, network failures, or logic bugs. Robust error
handling lets your code fail gracefully, helps you diagnose issues quickly, and provides better user
experiences.

2. Types of Errors

    �. Syntax Errors

    Occur at parse time. */

// // SyntaxError: Unexpected end of input
// function foo() {
// console.log('hello'
// }

/* Explanation:

    Missing closing parenthesis causes a syntax error. The code won’t run until this is fixed. */

/* �. Runtime Errors

    Occur during execution. */

// let obj;
// console.log(obj.name); // TypeError: Cannot read property 'name' of undefined;

/* �. Logical Errors

    Code runs without throwing, but produces incorrect results. */

function add(a, b) {
  return a - b; // Oops—should be a + b
}
console.log(add(5, 3)); // Output: 2 (incorrect result)

/* Explanation:
    The function runs without errors, but the logic is wrong, leading to incorrect output. */
