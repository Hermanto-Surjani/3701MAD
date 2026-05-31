## Introduction to "use strict" in JavaScript

JavaScript's **"use strict";** directive was introduced in ECMAScript 5 and
remains relevant in ECMAScript 6 (ES6) and later versions. It enables a
restricted variant of JavaScript, facilitating easier debugging by catching
common coding mistakes and preventing unsafe actions, such as gaining access to
the global object.

Benefits of Using "use strict";

1. Makes Debugging Easier: It catches common coding mistakes and "unsafe"
   actions (e.g., accessing global objects).
2. Prevents Accidental Globals: Without strict mode, assigning a value to an
   undeclared variable automatically creates a global variable. In strict mode,
   this will throw an error, forcing you to explicitly declare variables.
3. Eliminates this Coercion: In strict mode, referencing this in a function that
   is not called as a method leads to this being undefined, rather than the
   global object.
4. Disallows Duplicate Property Names or Parameters: Strict mode throws an error
   when it detects a duplicate named property in an object (e.g., {x: 1, x: 2})
   or a function with duplicate named parameters.
5. Makes eval() Safer: Strict mode makes eval() safer by not introducing new
   variables into the surrounding scope and not creating eval or arguments as
   aliases for variable names.
6. Throws Error on Invalid Usage of delete: The delete operator will throw an
   error in strict mode if the operand is an unqualified identifier (e.g., a
   variable, function, or function parameter).
