/* Promises

Introduction to Promises

Promises are a modern alternative to callbacks for handling asynchronous operations. They provide a
cleaner and more manageable way to handle async tasks, especially when dealing with multiple operations
in sequence.

Key Characteristics:
    States:
        Pending: Initial state, neither fulfilled nor rejected.
        Fulfilled: Operation completed successfully.
        Rejected: Operation failed.
    Chaining: Promises can be chained using .then() and .catch() for sequential operations.
    Error Handling: Errors can be caught in a single .catch() block.

Basic Syntax: */

const promise = new Promise((resolve, reject) => {
  // Asynchronous operation
  if (success) {
    resolve(result);
  } else {
    reject(error);
  }
});
promise
  .then((result) => {
    // Handle success
  })
  .catch((error) => {
    // Handle error
  });
