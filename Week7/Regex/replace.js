/* replace():

    Replaces substrings in a string that match a search pattern.
    Returns a new string with one or all matches replaced.

Example: */

const str = "foo 123";
const newStr = str.replace(/\d+/g, "456"); // replace digits with ("456");
console.log(newStr); // Output: 'foo 456'
