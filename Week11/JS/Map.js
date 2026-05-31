/* JavaScript Map

Map is a collection type introduced in ECMAScript 2015 (ES6) that holds key-value pairs where keys can be
any data type. This is a more powerful alternative to using objects for key-value storage, especially when
you need unique keys that are not strings or symbols.

Creating a Map

To create a Map, you can use the Map constructor. You can optionally initialize the Map with an array of key-
value pairs. */

const myMap = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  [true, 'boolean key'],
  [5, 'number key'],
]);
console.log('myMap after initialization:', myMap);

/* Adding and Updating Values
To add or update a value in a Map, use the .set() method: */
myMap.set('key3', 'value3');
myMap.set('key1', 'newValue1');
myMap.set({}, 'objectKey');
console.log('myMap after adding/updating values:', myMap);

/* Checking for Existence
You can check if a key exists in a Map using the .has() method: */
console.log('myMap has key2:', myMap.has('key2')); // true
console.log('myMap has key4:', myMap.has('key4')); // false

/* Removing Values
Remove specific values using the .delete() method: */
myMap.delete('key2');
console.log('myMap deleted key2:', myMap);

/* Size of a Map
You can find the number of elements in a Map with the .size property: */
console.log('myMap size:', myMap.size); // 5

/* Iterating Over a Map
Maps are iterable and can be iterated over using for...of or the .forEach() method: */
// Iterate over key-value pairs
for (let [key, value] of myMap) {
  console.log(`Iterating over key-value pairs: ${key}: ${value}`);
}
// Iterate over keys
for (let key of myMap.keys()) {
  console.log(`Iterating over keys: ${key}`);
}
// Iterate over values
for (let value of myMap.values()) {
  console.log(`Iterating over values: ${value}`);
}
myMap.forEach((value, key) => {
  console.log(`Iterating with forEach: ${key}: ${value}`);
});

/* Clearing the Map
You can remove all elements from the Map using .clear(): */
myMap.clear();
console.log('myMap after clearing:', myMap); // Map {}

/* Practical Uses of Maps

    Maps vs. Objects: Maps should be used over objects when keys are not strings or when maintaining
    the order of entries is necessary.
    Efficiency: Maps provide efficient insertion, removal, and lookup of elements.
    Flexibility with Key Types: Maps allow keys of any type, whether primitive values or object
    references.

Conclusion

The Map object in JavaScript provides a powerful, efficient, and intuitive way to handle dynamic data
collections. Its ability to use any type for keys and maintain insertion order offers significant advantages
over traditional objects, especially in applications that require frequent additions and deletions of key-value
pairs. */
