let userInput = "   JavaScript is Awesome!   "; 
// Trim whitespace and convert to uppercase
let formattedInput = userInput.trim().toUpperCase(); 
console.log(formattedInput); // Output: JAVASCRIPT IS AWESOME! 
// Split into words
let words = formattedInput.split(" "); 
console.log(words); // Output: ["JAVASCRIPT", "IS", "AWESOME!"] 
// Find position of a substring
let position = formattedInput.indexOf("IS"); 
console.log(position); // Output: 13 
// Slice a part of the string
let sliced = formattedInput.slice(0, 10); 
console.log(sliced); // Output: JAVASCRIPT 
// Concatenate strings
let greeting = "Hello, "; 
let name = "Alice"; 
let completeGreeting = greeting.concat(name); 
console.log(completeGreeting); // Output: Hello, Alice