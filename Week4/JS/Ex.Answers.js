/* Answers to Exercises
Exercise 1: Reading Directory Contents with Callbacks
Solution:
Exercise1.js */

const fs = require("fs");
const path = require("path");
const directoryPath = path.join(__dirname, "../../logs");
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log("Error reading directory:", err.message);
  }
  if (files.length === 0) {
    console.log("The directory is empty.");
    return;
  }
  console.log('List of files in "logs" directory:');
  files.forEach((file) => {
    console.log(file);
  });
});

/* Explanation:
    path.join(__dirname, '../../logs'): Constructs the path to the logs directory relative to
    the current file.
    fs.readdir: Reads the contents of the logs directory.
    Callback Function:
        Error Handling: Logs a descriptive error message if the directory doesn't exist or another error
        occurs.
        Empty Directory Check: Logs a message if the directory has no files.
        Logging Files: Iterates over the files array and logs each file name.

Usage:
Ensure that the logs directory exists in the specified path. Run the script using Node.js: */

// node Exercise1.js

/* Possible Outputs:

�. Successful Read:
    List of files in "logs" directory:
    error.log
    access.log
    debug.log

�. Directory Does Not Exist:
    Error reading directory: ENOENT: no such file or directory, scandir
    '/path/to/logs'

�. Empty Directory:
    The directory is empty. */

/* Exercise 2: Implementing Promises with File Operations
Solution:
Exercise2.js */

const fs = require("fs").promises;
const path = require("path");
const inputFilePath = path.join(__dirname, "../../data/input.txt");
const outputFilePath = path.join(__dirname, "../../data/output.txt");
async function appendTextToFile() {
  try {
    // Read the contents of input.txt
    const data = await fs.readFile(inputFilePath, "utf8");
    console.log("Original Content:", data);
    // Append new text
    const updatedData = data + "\nAppended text.";
    console.log("Updated Content:", updatedData);
    // Write the updated content to output.txt
    await fs.writeFile(outputFilePath, updatedData);
    console.log("File written successfully to output.txt");
  } catch (error) {
    console.log("Error during file operations:", error.message);
  }
}
appendTextToFile();

/* Explanation:
fs.readFile: Reads the contents of input.txt.
Appending Text: Concatenates the original data with the new text.
fs.writeFile: Writes the updated content to output.txt.
try...catch: Handles any errors that occur during reading or writing.
Usage:
Ensure that the data directory exists and contains input.txt. Run the script using Node.js:
node Exercise2.js
Possible Outputs:
�. Successful Operation:
Original Content: This is the original content of input.txt.
Updated Content: This is the original content of input.txt.
Appended text.
File written successfully to output.txt
�. Error Handling (e.g., input.txt does not exist):
Error during file operations: ENOENT: no such file or directory, open
'/path/to/data/input.txt' */

/* Exercise 3: Fetching Data with Async/Await
Solution:
Exercise3.js */

async function fetchUserData() {
  const url = "https://jsonplaceholder.typicode.com/users/5";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Network response was not ok. Status: ${response.status}`,
      );
    }
    const user = await response.json();
    console.log("User Name:", user.name);
    console.log("User Email:", user.email);
  } catch (error) {
    console.log("Error fetching user data:", error.message);
  }
}
fetchUserData();

/* Explanation:

    fetch(url): Makes a network request to the specified URL.
    await response.json(): Parses the response as JSON.
    Logging: Outputs the user's name and email.
    try...catch: Catches and logs any network or parsing errors.

Usage:

Run the script using Node.js:
    node Exercise3.js

Expected Output:
    User Name: Chelsey Dietrich
    User Email: Lucio_Hettinger@annie.ca

Handling Errors:
If the network request fails or the server returns a non-OK status, the error will be caught and logged.

Example Error Output:
    Error fetching user data: request to
    https://jsonplaceholder.typicode.com/users/5 failed, reason: getaddrinfo
    ENOTFOUND jsonplaceholder.typicode.com */
