const _ = require("lodash");

/* Lodash is a powerful JavaScript utility library that provides a wide range of functions for common programming tasks, such as manipulating arrays, objects, and functions. It helps simplify code and improve readability. */

/* Working with Arrays
_.uniq: Removes duplicate values from an array. */

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = _.uniq(numbers);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

/*Object Manipulation
 _.cloneDeep: Creates a deep copy of the value. Unlike a shallow copy, nested objects are also recursively copied. */

const obj = { a: 1, b: { c: 2 } };
const deepCopyObj = _.cloneDeep(obj);
deepCopyObj.b.c = 3;
console.log(obj.b.c); // Output: 2
console.log(deepCopyObj.b.c); // Output: 3

/* String Utilities
_.capitalize: Converts the first character of a string to uppercase and the rest to lowercase. */

const greeting = "hello world";
const capitalizedGreeting = _.capitalize(greeting);
console.log(capitalizedGreeting); // Output: "Hello world"

/* Collection Iteration
_.forEach: Iterates over elements of a collection (arrays, objects) and invokes an iteratee for each element. */

_.forEach([1, 2, 3], function (value) {
  console.log(value);
});
// Output: 1 2 3

/* Debouncing
_.debounce: Creates a debounced function that delays invoking the provided function until after a
specified wait time has elapsed since the last time the debounced function was invoked. This is useful for
events like window resizing, scrolling, or keypress events in a search box to limit the rate of function
executions. */

// window.addEventListener(
//   "resize",
//   _.debounce(function () {
//     console.log("Window resized!");
//   }, 200),
// );

const log = _.debounce(() => console.log("Run"), 1000, {
  leading: true,
  trailing: false,
});

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

log(); // runs immediately
log(); // ignored
log(); // ignored
wait(2000).then(() => log()); // runs after 2 seconds
