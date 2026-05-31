// Introduction to the Spread Operator
// Using Spread with Arrays
// Merging Arrays:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// Copying Arrays:
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]

// Using Spread with Objects
// Merging Objects:
const obj1 = { name: "Alice" };
const obj2 = { age: 25 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Output: { name: "Alice", age: 25 }
