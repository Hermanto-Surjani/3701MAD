/* Setting Up package.json to Support ES6 Modules

To use ES6 modules in Node.js, you need to make a small configuration in your package.json. Here are
the steps to ensure your Node.js project supports ES6 module syntax:

1. Specify Type as Module: In your package.json, you can set the "type" field to "module". This
tells Node.js to treat .js files as ES6 modules by default. */

// {
//   "name": "my-module-app",
//   "version": "1.0.0",
//   "type": "module",
//   "main": "app.js",
//   "scripts": {
//     "start": "node app.js",
//   },
// }

/* With this configuration, Node.js interprets JavaScript files using ES6 import and export syntax, rather
than CommonJS.
*. File Extensions:
If your package.json includes "type": "module", then:
.js files are treated as ES6 modules.
.cjs files are treated as CommonJS modules.
Conversely, if you donʼt include "type": "module", .js files are treated as CommonJS by
default, and .mjs files are treated as ES6 modules.
+. Hybrid Projects: If you need to support both ES6 and CommonJS in the same project, you can use
.mjs for ES6 modules and .cjs for CommonJS modules, regardless of the "type" setting in
package.json. */
