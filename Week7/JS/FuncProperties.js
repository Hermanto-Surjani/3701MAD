/* Function Properties and Methods

JavaScript functions, beyond being callable code blocks, have several attributes and methods that allow
you to interact with and manipulate them in versatile ways. This tutorial will explore some essential
properties and methods like name, length, apply, call, and bind.
Function Properties

1. name
The name property returns the name of the function. */

function exampleFunction() {}
console.log(exampleFunction.name); // Output: "exampleFunction"

/* length
The length property indicates the number of parameters expected by the function. */

function add(a, b, c) {}
console.log(add.length); // Output: 3
