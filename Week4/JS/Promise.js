/* How a Promise actually works (step‑by‑step)
1) You create a Promise
js */

// const p = new Promise((resolve, reject) => {
//   // async work here
// });

/* The function you pass in is called the executor. It runs immediately.

It receives two functions:

resolve(value) → mark as fulfilled

reject(error) → mark as rejected

2) The async operation finishes later
Inside the executor, you eventually call:

js */

// resolve("done!");
// // or
// reject("something went wrong");

/* This moves the Promise from pending → fulfilled or pending → rejected.

3) You attach handlers with .then() and .catch()
js */

// p.then((result) => {
//   console.log("Success:", result);
// }).catch((error) => {
//   console.log("Error:", error);
// });

/* Handlers run after the Promise settles — even if it settled before you attached them.

This avoids race conditions. */

const checkEven = new Promise((resolve, reject) => {
  const number = 4;
  if (number % 2 === 0) resolve("The number is even!");
  else reject("The number is odd!");
});

checkEven.then((msg) => console.log(msg)).catch((err) => console.error(err));
