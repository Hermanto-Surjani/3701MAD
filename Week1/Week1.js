/* Console.log
console.log is a built-in JavaScript function used to print messages to the browser's console or the
terminal. It's an invaluable tool for debugging and inspecting variables during development.
*/
// Logging a string
console.log("Console Log: Hello, World!"); // Output: Console Log: Hello, World! 
// Logging numbers
console.log(42); // Output: 42 
// Logging variables
let name = "Alice"; 
console.log("Logname:", name); // Output: Logname: Alice 
// Logging multiple values
let age = 30; 
console.log("Name:", name, "Age:", age); // Output: Name: Alice Age: 30

/* Var Example
Scope: Function-scoped.
Hoisting: Variables declared with var are hoisted and initialized with undefined.
Re-declaration and Re-assignment: Allowed.
*/
function varExample() { 
var x = 10; 
if (true) { 
var x = 20; // 'var' is function-scoped, so this overwrites the outer 'x'
console.log("\nVar:", x); // Output: 20 
// 'var' is function-scoped, so the same 'x' variable is used both inside and outside the block.
console.log(x); // Output: 20 
}
}
varExample();

/*let
Scope: Block-scoped.
Hoisting: Hoisted but not initialized. Accessing before declaration results in a ReferenceError.
Re-declaration: Not allowed within the same scope.
Re-assignment: Allowed.
*/
function letExample() { 
let y = 10; 
if (true) { 
let y = 20; // Different variable 
console.log("\nLet:",y); // Output: 20 
  } 
console.log("Let:",y); // Output: 10 
} 
letExample(); 

/*const
Scope: Block-scoped.
Hoisting: Hoisted but not initialized. Accessing before declaration results in a ReferenceError.
Re-declaration: Not allowed
Re-assignment: Not allowed for primitive data types. However, for objects and arrays, the contents
can be modified.
*/
const z = 30; 
//z = 40; // Error: Assignment to constant variable. 

const obj = { name: "Bob" }; 
obj.name = "Charlie"; // Allowed
console.log("\nConst:",obj.name); // Output: Charlie

/*Choosing Between var,let, and const
Prefer const by default. It signals that the identifier won't be reassigned, making the code more
predictable.
Use let when you know the variable's value will change.
Avoid var unless necessary, as let and const provide better scoping and reduce potential bugs.
*/

const a = 9007199254740991n;   // max safe integer + 1
const b = a + 10n;

console.log("\nBigInt:", b); // 9007199254741001n