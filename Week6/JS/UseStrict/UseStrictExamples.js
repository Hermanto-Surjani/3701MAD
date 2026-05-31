/* How to Enable "use strict";

You can enable strict mode by adding "use strict"; at the beginning of a script or function. Placement
affects scope:

Script-wide strict mode: */

"use strict";
function test() {
  // This function is in strict mode
}

/* Function-specific strict mode: */

function test() {
  "use strict";
  // Code here is in strict mode
}

/* In this case, only the code within the function test runs in strict mode.
Examples and Implications */

/* ). Global Strict Mode: */

("use strict");
x = 3.14; // Throws an error because 'x' is not declared

/* *. Function Level Strict Mode: */

function myFunction() {
  "use strict";
  y = 3.14; // Throws an error because 'y' is not declared
}

/* +. Not Allowed in Strict Mode: 

    Using with statement.
    Setting properties on primitive values.
    Deleting undeletable properties.*/
