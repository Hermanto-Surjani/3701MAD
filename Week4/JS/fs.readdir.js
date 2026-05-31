/* Using fs.readdir with Callbacks

In Node.js, the fs (File System) module provides methods to interact with the file system. The fs.readdir
method reads the contents of a directory asynchronously and uses a callback to handle the result.

Example: */

const fs = require("fs");
const path = require("path");
const directoryPath = path.join(__dirname, "./");
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log("Unable to scan directory: \n" + err);
  }

  if (files.length === 0) {
    return console.log("No files found in the directory.");
  }

  console.log("List of files:");
  files.forEach((file) => {
    console.log(file);
  });
});

/* Explanation:

fs.readdir(directoryPath, callback)
    directoryPath: The path of the directory to read.
    callback: Function executed after reading the directory.

Callback Function:
    Parameters:
        err: Error object if an error occurs.
        files: Array of file names in the directory.
    Functionality:
        Checks for errors and logs them.
        Iterates over the files array and logs each file name.

Output:
List of files:
file1.txt
file2.jpg
document.pdf */
