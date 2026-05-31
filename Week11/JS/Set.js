/* JavaScript Set
Set is a built-in object type introduced in ECMAScript 2015 (ES6) that provides enhanced capabilities for
working with collections of values. A Set is a collection of unique values in JavaScript. It allows you to store
distinct values of any type, whether primitive values or object references. */
const mySet = new Set([1, 2, 3, 4, 5]);
console.log(mySet); // Set {1, 2, 3, 4, 5}

/* Creating a Set
You can create a Set by passing an iterable object (like an array) to the Set constructor. */
mySet.add(6);
console.log(mySet); // Set {1, 2, 3, 4, 5, 6}

/* Adding Values
To add a value to the set, use the .add() method: */
mySet.add(3);
console.log(mySet); // Set {1, 2, 3, 4, 5, 6} (no duplicates)

/* Checking for Existence
You can check if a value is in a Set using the .has() method: */
console.log(mySet.has(4)); // true
console.log(mySet.has(10)); // false

/* Removing Values
Remove specific values using the .delete() method: */
mySet.delete(2);
console.log(mySet); // Set {1, 3, 4, 5, 6}

/* Size of a Set
You can find the number of elements in a Set with the .size property: */
console.log(mySet.size); // 5

/* Clearing the Set
You can remove all elements from the Set using .clear(): */
// mySet.clear();
// console.log(mySet); // Set {}

/* Iterating Over a Set
Sets are iterable and can be iterated over using for...of or the .forEach() method: */
for (let item of mySet) {
  console.log('Item:', item);
}
mySet.forEach((value) => {
  console.log('Value:', value);
});

/* Converting a Set to an Array
Sometimes it's useful to convert a Set back to an Array: */
const arrayFromSet = [...mySet];
console.log(arrayFromSet); // [1, 3, 4, 5, 6]
console.log(Array.from(mySet)); // [1, 3, 4, 5, 6]
console.log(mySet.values()); // SetIterator {1, 3, 4, 5, 6}
// Or
const arrayFromSet2 = Array.from(mySet);

/* Checking Subset
To check if one set is a subset of another, you can create a utility function */
function isSubsetOf(baseSet, subSet) {
  for (let elem of subSet) {
    if (!baseSet.has(elem)) {
      return false;
    }
  }
  return true;
}
const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3]);
console.log(isSubsetOf(setA, setB)); // true
console.log(isSubsetOf(setB, setA)); // false

/* Practical Uses of Sets

    Removing duplicates from an array: Quickly filter out duplicate values from an array.
    Membership checks: Efficiently check for the presence of an item in a collection without having to
    loop through it.
    Set operations: Perform mathematical set operations like unions, intersections, and differences.

Conclusion

The Set object in JavaScript provides a powerful way to handle unique collections of data. By leveraging
Set, you can efficiently manage data with operations that ensure no duplicates, all with built-in, easy-to-
use methods. The additional functionality to check subsets and convert between arrays and sets makes
Set a versatile tool for any JavaScript developer's toolkit. */
