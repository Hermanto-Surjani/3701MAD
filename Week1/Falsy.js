console.log("false:");
if (false) { 
    console.log("false:","This won't run."); 
} 

console.log("0:");
if (0) { 
    console.log("This won't run."); 
} 

console.log("Empty String:");
if ("") { 
console.log( "This won't run."); 
} 

console.log("null:");
if (null) {
console.log("This won't run."); 
} 

console.log("undefined:");
if (undefined) { 
    console.log("This won't run."); 
} 

console.log("NaN:");
if (NaN) { 
    console.log("This won't run."); 
} 

console.log("Hello:");
if ("Hello") { 
    console.log("This will run."); // Output: This will run. 
} 

console.log("42:");
if (42) { 
    console.log("This will also run."); // Output: This will also run. 
}