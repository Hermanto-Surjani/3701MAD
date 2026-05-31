/* 
Declaring Functions
JavaScript allows you to declare functions in three main ways:
    1. Function Declaration
    2. Function Expression
    3. Arrow Function
*/

// Function Declaration
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // Output: 5

// Function Expression
const subtract = function (a, b) {
  return a - b;
};
console.log(subtract(5, 3)); // Output: 2

// Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // Output: 12
