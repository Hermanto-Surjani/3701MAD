// Using for...in with Objects
// When used with objects, for...in iterates over the keys of the object.
// Example:

const person = {
  name: "Alice",
  age: 25,
  city: "Wonderland",
};
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Output:
// name: Alice
// age: 25
// city: Wonderland
