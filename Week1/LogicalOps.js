let isActive = true; 
console.log(!isActive); // Output: false 
let isAdmin = false; 
console.log(!isAdmin); // Output: true

// Both conditions must be true
let isLoggedIn = true; 
let hasPermission = true; 
if (isLoggedIn && hasPermission) { 
console.log("Access granted."); // Output: Access granted. 
} 
hasPermission = false; 
if (isLoggedIn && hasPermission) { 
console.log("Access granted.");
} else { 
console.log("Access denied."); // Output: Access denied. 
} 

// Short-circuit evaluation
let user = { name: "Charlie" }; 
console.log(user && user.name); // Output: Charlie 
user = null; 
console.log(user && user.name); // Output: null

let username = "Dave"; 
console.log(username || "Guest"); // Output: Dave 
username = ""; 
console.log(username || "Guest"); // Output: Guest 
username = null; 
console.log(username || "Guest"); // Output: Guest 

// Short-circuit evaluation
let config = { debug: true }; 
console.log(config || { debug: false }); // Output: { debug: true } 
config = 0; 
console.log(config || { debug: false }); // Output: { debug: false }

// Nullish coalescing operator
let score = 0; 
console.log(score ?? 10); // Output: 0 (since 0 is not nullish)
let user2 = null; 
console.log(user2 ?? "Anonymous"); // Output: Anonymous 
user2 = "Eve"; 
console.log(user2 ?? "Anonymous"); // Output: Eve 
let value = undefined; 
console.log(value ?? "Default"); // Output: Default