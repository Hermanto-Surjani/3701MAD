// break and continue
// break and continue are control flow statements used within loops to alter their execution.
// break Statement
// The break statement terminates the current loop entirely, and execution continues with the code that
// follows the loop.
// Example:
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // Exit the loop when i is 3
  }
  console.log(`i = ${i}`);
}
// Output:
// i = 0
// i = 1
// i = 2
