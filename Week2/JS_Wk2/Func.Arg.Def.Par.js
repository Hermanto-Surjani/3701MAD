/* 6. Arguments and Default Values */

// Default Parameters

// You can provide default values for function parameters:
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet(); // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!

// Accessing Arbitrary Arguments in Traditional Functions
// The arguments object is an array-like object available in traditional (non-arrow) functions.
// It contains all arguments passed to the function.
function logArgs() {
  console.log(arguments);
}
logArgs(1, 2, 3); // Output: [Arguments] { '0': 1, '1': 2, '2': 3 }

// Example with Summation:
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sum(1, 2, 3, 4)); // Output: 10
