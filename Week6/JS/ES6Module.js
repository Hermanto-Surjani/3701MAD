// ES6 Modules

// ES6 modules are a standard feature in modern JavaScript and are supported in most modern browsers and
// environments like Node.js (with the appropriate configuration).

// Exporting and Importing with ES6 Modules:
// Exporting: You can use export to expose functions, variables, or classes.

// myModule.js
export const myFunction = () => {
  console.log("Hello from ES6!");
};

// Importing: Use import to bring exported members into another file.

// app.js
import { myFunction } from "./myModule.js";
myFunction(); // Output: Hello from ES6!

// Default Exports: You can also export a single value as the default export.

// myModule.js
const myDefaultFunction = () => {
  console.log("Hello from the default export!");
};
export default myDefaultFunction;
