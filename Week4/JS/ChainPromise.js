/* Chaining Promises

Promises can be chained to perform multiple asynchronous operations in sequence without deep nesting.

Example: Combining Multiple File Operations */

const fs = require("fs").promises;
const path = require("path");
const readDir = async () => {
  const directoryPath = path.join(
    __dirname,
    "../../../3701MAD_Ass1/MyTodoList/",
  );
  try {
    const files = await fs.readdir(directoryPath);
    console.log("List of files:");
    files.forEach((file) => {
      console.log(file);
    });
    // Read a specific file
    const data = await fs.readFile(
      path.join(directoryPath, "README.md"),
      "utf8",
    );
    console.log("\nContents of README.md:");
    console.log(data);
    // Write to a new file
    await fs.writeFile(path.join(directoryPath, "combined.txt"), data);
    console.log("\nFile written successfully!");
  } catch (err) {
    console.log("Error:", err);
  }
};
readDir();

/* Explanation:

    �. fs.readdir(directoryPath): Reads the directory.
    �. fs.readFile: Reads file1.txt after successfully reading the directory.
    �. fs.writeFile: Writes the content to combined.txt after reading file1.txt.
    �. try...catch: Handles any errors that occur in the chain.

Benefits of Chaining:

    Improved Readability: Flat structure compared to nested callbacks.
    Simplified Error Handling: Single .catch() or try...catch block handles all errors.
    Maintainability: Easier to add or remove operations in the chain. */
