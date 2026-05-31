/* 5. Arrow Functions
Arrow functions provide a concise syntax and do not have their own 
this binding. */

// Syntax:
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Bob")); // Output: Hello, Bob!

// Arrow Function vs Regular Function
function regularFunction() {
  console.log("Rgular function:", this); // Depends on the caller
}

const arrowFunction = () => {
  console.log("Arrow function:", this); // Inherits `this` from the surrounding scope
};
regularFunction();
arrowFunction();
