// Assigning a function to a variable
const greet = function (name) {
  return `Hello, ${name}!`;
};
// Passing a function as an argument
function callGreet(func, name) {
  console.log(func(name));
}
callGreet(greet, "Alice");

// Returning a function
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}
const double = createMultiplier(2);
console.log(double(5)); // Output: 10
