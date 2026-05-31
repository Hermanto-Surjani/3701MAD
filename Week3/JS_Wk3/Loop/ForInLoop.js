// for...in Loop
// The for...in loop is used to iterate over the enumerable properties of an object. When used with arrays,
// it iterates over the indices.
// Using for...in with Arrays
// While it's possible to use for...in with arrays, it's generally recommended to use for...of or
// traditional for loops for array iteration to avoid unexpected behavior.
// Example:

const fruits = ["apple", "banana", "cherry"];
for (let index in fruits) {
  console.log(index, fruits[index]);
}
// Output:
// 0 apple
// 1 banana
// 2 cherry
