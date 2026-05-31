/* JSON: A Quick Introduction

What is JSON?

JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read
and write and easy for machines to parse and generate. JSON is built on two structures:

    A collection of name/value pairs. In various languages, this is realized as an object, record, struct,
    dictionary, hash table, keyed list, or associative array.
    An ordered list of values. In most languages, this is realized as an array, vector, list, or sequence.

Why Use JSON?

    Interoperability: JSON is language-independent. Though it originated from JavaScript, many
    programming languages have libraries to handle JSON-formatted data, making it an ideal format for
    data interchange across different platforms.
    Simplicity: JSON's structure is straightforward, making it easy to understand and write by humans
    and systematically parse and generate by computers.
    Lightweight: JSON is less verbose than XML, which means it can represent the same information in
    fewer bytes, beneficial for network transmissions.

JSON Syntax

1. Objects: Enclosed in curly braces {} and consist of key/value pairs separated by commas. Keys are
strings, and values can be strings, numbers, objects, arrays, true, false, or null. */

// {
// "name": "John Doe",
// "age": 30,
// "isEmployed": true
// }

/* *. Arrays: Enclosed in square brackets [] and consist of an ordered list of values (which can be of any
type, including another array or object). */

["Apple", "Banana", "Cherry"];

/* +. Values: Can be strings (in double quotes), numbers, objects, arrays, true, false, or null.

Working with JSON in JavaScript

Stringify: Convert an object to a JSON string. */

const person = { name: "Alice", age: 25, hobbies: ["reading", "cycling"] };
const json = JSON.stringify(person);
console.log(json); // '{"name":"Alice","age":25,"hobbies":["reading","cycling"]}'

/* Parse: Convert a JSON string to an object */

const jsonString = '{"name":"Alice","age":25,"hobbies":["reading","cycling"]}';
const obj = JSON.parse(jsonString);
console.log(obj); // { name: 'Alice', age: 25, hobbies: [ 'reading','cycling' ] }

/* Best Practices

    Use double quotes for keys and string values.
    Avoid comments in JSON as they are not part of the standard.
    Be mindful of trailing commas; they are not allowed in JSON.

Conclusion

JSON's ubiquity as a data interchange format stems from its simplicity, readability, and wide support across
programming environments. Mastering JSON enables you to work efficiently with data in web applications,
APIs, configuration files, and beyond. */
