/* Understanding this in JavaScript

The this keyword in JavaScript is a dynamic reference that changes based on how a function is invoked. It
often causes confusion, especially when transitioning from other programming languages. This section
delves into various contexts where this behaves differently.

Global Context vs. Function Context

Global Context: Outside of any function, this refers to the module's exports object, which is {} by
default. In browsers, this is the window object; in Node.js, it's the global object. */

// console.log(this); // In browser: Window { ... }, in Node.js: {}

/* Function Context: Inside a regular function, this refers to the global object (non-strict mode) or
undefined (strict mode). */

// function showThis() {
// console.log(this);
// }
// showThis(); // In browser: Window { ... }, in strict mode: undefined

/* function showThis(param) {
  this.param = param; // In non-strict mode, this will refer to the global object, which is not recommended.
  console.log("this.param:", this.param);
  console.log("this:", this); // In browser: Window { ... }, in Node.js: {}
}
showThis("This is a test"); // In browser: Window { ... }, in strict mode: undefined */

/* this in Object Methods
When a function is called as a method of an object, this refers to the object the method is called on. */

// const person = {
//   name: "Alice",
//   greet: function () {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };
// person.greet(); // Output: Hello, my name is Alice

/* Explanation:
this.name: Refers to the name property of the person object. */

/* this in Constructor Functions and Classes
In constructor functions and ES6 classes, this refers to the newly created instance */

// function Person(name) {
//   this.name = name;
// }
// const bob = new Person("Bob");
// console.log(bob.name); // Output: Bob
// console.log(bob); // Output: Person { name: 'Bob' }
// console.log(Jane); // Output: undefined

/* In ES6 Classes: */

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }
// const carol = new Person("Carol");
// carol.greet(); // Output: Hello, my name is Carol

/* Explanation:
new Person('Bob') or new Person('Carol'): Creates a new instance where this inside the
constructor points to the new object. */

/* this in Traditional Functions vs. Arrow Functions
Understanding the difference between this in traditional functions and arrow functions is crucial,
especially when dealing with callbacks or nested functions.

Traditional Functions: */

// const obj = {
//   name: "Traditional",
//   regularFunction: function () {
//     console.log(this.name);
//   },
// };
// obj.regularFunction(); // Output: Traditional

// /* Arrow Functions: */
// const arrowObj = {
//   name: "Arrow",
//   arrowFunction: () => {
//     console.log(this.name);
//   },
// };
// arrowObj.arrowFunction(); // Output: undefined

/* Explanation:

    Traditional Function: this refers to obj.
    Arrow Function: this is lexically bound; it refers to the surrounding scope, which is the module
    exports in this case.

Key Point: Arrow functions do not have their own this binding; they inherit this from their defining
context. */

/* this in Arrow Functions within Objects

Arrow functions can be used within objects, but their behavior differs from
traditional functions. They can retain the this context even when used as
callbacks.

Example: */

const user = {
  name: "Eve",
  greetRegular: function () {
    setTimeout(function () {
      console.log("Regular Function:", this.name);
    }, 1000);
  },
  greetArrow: function () {
    setTimeout(() => {
      console.log("Arrow Function:", this.name);
    }, 1000);
  },
};
user.greetRegular(); // Output after 1s: Regular Function: undefined
user.greetArrow(); // Output after 1s: Arrow Function: Eve

/* Explanation:

    greetRegular: Uses a traditional function inside setTimeout. Here, this inside the callback
    refers to the global object, leading to undefined (in strict mode) or the global name property.
    greetArrow: Uses an arrow function inside setTimeout. The arrow function inherits this from
    greetArrow, which is bound to user. Hence, this.name correctly refers to 'Eve'.

Benefit: Arrow functions help avoid common pitfalls with this in callbacks by maintaining the lexical
context. */
