// Exercise 1: Spread Operator
// 1. Merge two arrays [1, 2, 3] and [4, 5, 6] using the spread operator.
// 2. Copy the object { name: "Alice", age: 25 } and add a new property city: "Wonderland".

const first = [1, 2, 3];
const second = [4, 5, 6];

let combined = [...first, ...second];
console.log(combined);

// Exercise 2: Destructuring
// 1. Destructure the array [10, 20, 30] to get the second value.
// 2. Destructure the object { x: 1, y: 2, z: 3 } to get y and rename it to valueY.

let array = [10, 20, 30];
const [, due] = array;
console.log(due);

// Rename y to valueY
const obj = { x: 1, y: 2, z: 3 };
const { y: valueY } = obj;
console.log("ValueY:", valueY);

// Rename key y to valueY

const obj2 = { x: 1, y: 2, z: 3 };

// Step 1: destructure the entries
const [[k1, v1], [k2, v2], ...rest] = Object.entries(obj2);

// Step 2: build a new object with the renamed second key
const renamed = {
  [k1]: v1,
  newKey: v2,
  ...Object.fromEntries(rest),
};

console.log(renamed);
// { x: 1, newKey: 2, z: 3 }

// Exercise 3: Object Shorthand
// Write an object using shorthand syntax for variables firstName = "Alice" and lastName = "Smith".

// Object Shorthand
const firstName = "Alice";
const lastName = "Smith";
const person = { firstName, lastName }; // Shorthand syntax
console.log(person); // Output: { firstName: "Alice", lastName = "Smith" }

// Exercise 4: Template Strings
// 1. Create a greeting string using template literals that says
// "Hello, [name]!", where name is a variable.
// 2. Create a multi-line string using template literals.

const myName = "Hermanto";
const greeting = `Hello, ${myName}!`;
console.log(greeting); // Output: Hello, Hermanto!

const multiLineString = `This is a
test of a multi line literal,
${myName}`;
console.log(multiLineString);
