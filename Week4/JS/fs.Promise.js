/* Using fs.promises with Promises

Node.js provides a promise-based API for the fs module through fs.promises. This allows the use of
Promises instead of traditional callbacks.

Example: Reading a Directory with Promises */

const fs = require("fs").promises;
const path = require("path");
const directoryPath = path.join(__dirname, "../../../3701MAD_Ass1/MyTodoList/");
fs.readdir(directoryPath)
  .then((files) => {
    console.log("List of files:");
    files.forEach((file) => {
      console.log(file);
    });
  })

  .catch((err) => {
    console.log("Unable to scan directory: " + err);
  });

/* 
Explanation:
    fs.promises.readdir(directoryPath): Returns a Promise that resolves with an array of file
    names.
    .then(files => {...}): Handles the successful reading of the directory.
    .catch(err => {...}): Catches and handles any errors that occur during the operation. */
