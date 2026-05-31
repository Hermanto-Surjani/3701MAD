/* apply()
The apply() method calls a function with a given *this* value and arguments provided as an array (or an
array-like object). */

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}
const user = { name: 'John' };
console.log(greet.apply(user, ['Hello', '!'])); // Output: "Hello, John!"

/* call()
Similar to apply(), the call() method calls a function with a given this value and
arguments provided individually. */

function greet2(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}
const user2 = { name: 'Jane' };
console.log(greet2.call(user2, 'Hello', '!')); // Output: "Hello, Jane!"

/* bind()
The bind() method creates a new function that, when called, has its *this*
keyword set to the provided value, with a given sequence of arguments preceding

any provided when the new function is called. */

function greet3(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}
const user3 = { name: 'Jack' };
const personalGreet = greet3.bind(user3, 'Hello');
console.log(personalGreet('!')); // Output: "Hello, Jack!"
