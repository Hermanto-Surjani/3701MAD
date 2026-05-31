/* Examples of JavaScript One-Liners

1. Swapping Variables
Swap the values of two variables without using a temporary variable. */

let a = 5,
  b = 10;
[a, b] = [b, a];
console.log(`a: ${a}, b: ${b}`); // a: 10, b: 5

/* 2. Cloning Arrays
Create a shallow clone of an array. */

const clone = (arr) => [...arr];

/* 3. Generating Random Hex Color
Generate a random hex color code. */

const randomColor = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`;

console.log(randomColor()); // e.g., #3e2f1b

/* 4. Filtering Falsy Values
Remove all falsy values (false, null, 0, "", undefined, and NaN) from an array. */

const compact = (arr) => arr.filter(Boolean);

console.log(compact([0, 1, false, 2, '', 3])); // [1, 2, 3]

/* 5. Capitalizing a String
Capitalize the first letter of a string. */

const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

/* 6. Checking Palindrome
Check if a string is a palindrome. */

const isPalindrome = (str) => str === str.split('').reverse().join('');
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false

/* 7. Flattening an Array
Flatten a nested array with one level of nesting. */

const flatten = (arr) => [].concat(...arr);

console.log(flatten([1, [2, [3, 4], 5], 6])); // [1, 2, [3, 4], 5, 6]

/* 8. Summing an Array
Calculate the sum of the numbers in an array. */

const sum = (arr) => arr.reduce((total, num) => total + num, 0);

console.log(sum([1, 2, 3, 4, 5])); // 15

/* Tips for Writing One-Liners

    Understand the feature: Make sure you understand how the language feature works before using it
    in a one-liner.
    Test thoroughly: One-liners can sometimes have unexpected edge cases. Always test them
    extensively.
    Comment generously: When using a one-liner, consider adding a comment to explain what it does,
    for the sake of clarity.
    Prioritize clarity: If a one-liner makes the code significantly harder to read, consider writing it out in
    a more verbose way.

Conclusion

While one-liners can be an efficient way to write JavaScript, they should be used judiciously. It's important
to maintain a balance between writing clever, concise code and ensuring that it's readable, maintainable,
and debuggable. One-liners can be a powerful tool in your coding toolkit, but they should be wielded with
care, keeping the readability and maintainability of your code in mind. */
