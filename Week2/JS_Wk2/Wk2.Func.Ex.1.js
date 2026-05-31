/* Exercise 1: Function Declaration and Hoisting */
// Create a function declaration and call it before its definition.
// Then create a function expression and observe the behavior when called before its definition.

// Function Declaration
console.log(add(2, 3));

function add(a, b) {
  return a + b;
}

// Function Expression error when called before defining
// console.log(subtract(5, 3)); // Output: 2
// const subtract = function (a, b) {
//   return a - b;
// };

// Exercise 2: Closures
// Write a closure function that keeps track of the number of times it has been called.

function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    console.log("Times called:", counter);
  };
}

const increment = outer();
increment(); // Output: 1
increment(); // Output: 2
increment(); // Output: 3
increment(); // Output: 4
increment(); // Output: 5

// Exercise 3: Arrow Functions
// Refactor a regular function to use an arrow function. Verify that the behavior of this remains consistent.

function multi2(number) {
  return number * 2;
}
console.log("Function:", multi2(7));

const multi2arrow = (number) => number * 2;

console.log("Arrow:", multi2arrow(7));

// Exercise 4: Arbitrary Arguments with arguments
// Write a function using arguments to calculate the average of any number of arguments passed to it.

function average() {
  const nums = Array.from(arguments);
  const sum = nums.reduce((total, num) => total + num, 0);
  return sum / nums.length;
}
console.log("Average:", average(1, 2, 3, 4, 5));

// No arrow function version

// function average() {
//   var total = 0;

//   for (var i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }

//   return total / arguments.length;
// }

// Exercise 5: Rest Parameters
// Refactor the average function from Exercise 4 to use rest parameters.

const averageRest = (...numbers) =>
  numbers.reduce((total, num) => total + num, 0) / numbers.length;

console.log("Average using Rest:", averageRest(1, 2, 3, 4, 5));
