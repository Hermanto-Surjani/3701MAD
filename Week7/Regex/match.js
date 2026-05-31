/* match():

    Searches a string for an occurrence of a pattern.
    Returns an array of information or null if no match is found. 

Example: */

const text = "hello world";
const pattern = /\w+/g; // global match for all words
console.log(text.match(pattern)); // Output: ['hello', 'world']
