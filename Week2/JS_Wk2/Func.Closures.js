/* 4. Closures
A closure is a function that "remembers" the scope in which it was created, even after that scope is gone.
Example: */

function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    console.log(counter);
  };
}

const increment = outer();
increment(); // Output: 1
increment(); // Output: 2
