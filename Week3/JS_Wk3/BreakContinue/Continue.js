// continue Statement
// The continue statement skips the current iteration of the loop and moves to the next one, without
// terminating the loop entirely.
// Example:

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skip the rest of the loop when i is 2
  }
  console.log(`i = ${i}`);
}
// Output:
// i = 0
// i = 1
// i = 3
// i = 4

// Explanation:
// When i is 2, the continue statement is executed, skipping the console.log for that iteration.
// The loop continues with the next value of i.
