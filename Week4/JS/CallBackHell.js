/* Callback Hell

What is Callback Hell?

Callback Hell, also known as the "Pyramid of Doom," refers to deeply nested callback functions that make
code hard to read, maintain, and debug. It often arises when multiple asynchronous operations depend on
each other sequentially.

Visualization: */

// doSomething(function (result) {
//   doSomethingElse(result, function (newResult) {
//     doThirdThing(newResult, function (finalResult) {
//       console.log("Final Result:", finalResult);
//     });
//   });
// });

/* Example of Callback Hell
Using multiple fs operations with callbacks: */
const fs = require("fs");
fs.readFile("file1.txt", "utf8", (err, data1) => {
  if (err) return console.error(err);
  fs.readFile("file2.txt", "utf8", (err, data2) => {
    if (err) return console.error(err);
    fs.writeFile("combined.txt", data1 + data2, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("Files combined successfully!");
    });
  });
});

/* Explanation:

    �. First readFile: Reads file1.txt.
    �. Second readFile: Reads file2.txt inside the first callback.
    �. writeFile: Writes the combined data inside the second callback.
    �. Console Log: Notifies success inside the third callback.

Problems with Callback Hell:
    Readability: Hard to follow the flow due to indentation.
    Maintainability: Difficult to modify or extend the code.
    Error Handling: Errors need to be handled at each level, leading to repetitive code.
    Debugging: Tracing bugs through nested callbacks is challenging.

Problems with Callback Hell
    �. Complex Code Structure: Deep nesting makes the code resemble a pyramid, hindering readability.
    �. Repetitive Error Handling: Each callback requires its own error checks.
    �. Difficult to Manage: Adding or removing asynchronous operations becomes cumbersome.
    �. Scalability Issues: As applications grow, managing nested callbacks becomes impractical.

Illustrative Example: */

// Bad Practice: Excessive Nesting
fs.readFile("file1.txt", "utf8", (err, data1) => {
  if (err) throw err;
  fs.readFile("file2.txt", "utf8", (err, data2) => {
    if (err) throw err;
    fs.readFile("file3.txt", "utf8", (err, data3) => {
      if (err) throw err;
      // Continue nesting...
    });
  });
});
