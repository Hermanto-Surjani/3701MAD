/* test():

    Checks if a pattern exists within a string.
    Returns true if the pattern matches and false otherwise.

Example: */

const regex = /\d+/; // checks for one or more digits
console.log(regex.test("123")); // Output: true
console.log(regex.test("abc")); // Output: false
