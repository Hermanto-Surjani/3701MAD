let userProfile = {
  username: "johndoe",
  email: "johndoe@example.com",
  age: 28,
  isVerified: true,
};
// Accessing properties
console.log(userProfile.username); // Output: johndoe
console.log(userProfile["email"]); // Output: johndoe@example.com
// Adding a new property
userProfile.location = "New York";
console.log(userProfile.location); // Output: New York
// Modifying a property
userProfile.age = 29;
console.log(userProfile.age); // Output: 29
// Deleting a property
delete userProfile.isVerified;
console.log(userProfile.isVerified); // Output: undefined
// Getting keys, values, and entries
console.log(Object.keys(userProfile));
// Output: ["username", "email", "age", "location"]
console.log(Object.values(userProfile));
// Output: ["johndoe", "johndoe@example.com", 29, "New York"]
console.log(Object.entries(userProfile));
/* 
  Output: 
  [ 
    ["username", "johndoe"], 
    ["email", "johndoe@example.com"], 
    ["age", 29], 
    ["location", "New York"] 
  ] 
*/
// Checking if a property exists
console.log(userProfile.hasOwnProperty("email")); // Output: true
console.log(userProfile.hasOwnProperty("isVerified")); // Output: false
