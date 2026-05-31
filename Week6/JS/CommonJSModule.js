// CommonJS Modules

// CommonJS is commonly used in Node.js environments. It allows you to encapsulate code within modules
// on the server-side and export it to be reused in other files.

// Exporting: You can export functions, objects, or primitive values from a module using the
// module.exports syntax.

// myModule.js
const myFunction = () => {
  console.log("Hello from CommonJS!");
};
module.exports = myFunction;

// Importing: Use the require() function to import modules.

// app.js
const myFunction = require("./myModule");
myFunction(); // Output: Hello from CommonJS!
