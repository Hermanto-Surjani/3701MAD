// Basic Object Operations for Beginners

// 1. Creating an object
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// 2. Accessing properties
console.log(person.name); // "John"
console.log(person["age"]); // 30

// 3. Adding properties
person.email = "john@example.com";
person["phone"] = "555-1234";

// 4. Modifying properties
person.age = 31;
person["city"] = "Boston";

// 5. Deleting properties
delete person.phone;

// 6. Checking if property exists
console.log("name" in person); // true
console.log("phone" in person); // false

// 7. Getting all keys
console.log(Object.keys(person)); // ["name", "age", "city", "email"]

// 8. Getting all values
console.log(Object.values(person)); // ["John", 31, "Boston", "john@example.com"]

// 9. Getting key-value pairs
console.log(Object.entries(person)); // [["name", "John"], ["age", 31], ...]

// 10. Looping through object
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// 11. Copying an object (shallow copy)
const personCopy = { ...person };

// 12. Merging objects
const address = { street: "123 Main St", zip: "10001" };
const fullPerson = { ...person, ...address };
console.log(fullPerson); // { name: "John", age: 31, city: "Boston", email: "john@example.com", street: "123 Main St", zip: "10001" }