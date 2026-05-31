/* Callback Functions

What is a Callback Function?

A callback function is a function passed as an argument to another function and executed after some
operation has been completed. Callbacks are fundamental to handling asynchronous operations in
JavaScript.

Example: */

function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}
function farewell() {
  console.log("Goodbye!");
}
greet("Alice", farewell);
// Output:
// Hello, Alice!
// Goodbye!
