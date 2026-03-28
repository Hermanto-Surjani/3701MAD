//Using || vs. ?? to set default values

function getGreeting(name) { 
// Using || 
let greetName = name || "Guest"; 
console.log(`Hello, ${greetName}!`); 
} 
getGreeting("Alice"); // Output: Hello, Alice! 
getGreeting(""); // Output: Hello, Guest! 
getGreeting(null); // Output: Hello, Guest! 
function getGreetingNullish(name) { 
// Using ?? 
let greetName = name ?? "Guest"; 
console.log(`Hello, ${greetName}!`); 
} 
getGreetingNullish("Alice"); // Output: Hello, Alice! 
getGreetingNullish(""); // Output: Hello, ! 
getGreetingNullish(null); // Output: Hello, Guest!

