/* The Error Object

When JavaScript throws an error, it creates an Error object with key properties:

    name (e.g., "TypeError")
    message (human-readable description)
    stack (stack trace for debugging) */

try {
  throw new Error("Something went wrong");
} catch (err) {
  console.log(err.name); // "Error"
  console.log(err.message); // "Something went wrong"
  console.log(err.stack); // stack trace
}
