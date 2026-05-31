// VALUE TYPES vs REFERENCE TYPES in JavaScript

// ===== VALUE TYPES (Primitives) =====
// Value types store the actual value and are copied by value
// Types: number, string, boolean, undefined, null, symbol, bigint

// Example 1: Number (value type)
let num1 = 10;
let num2 = num1; // Copies the value
num2 = 20;
console.log(num1); // 10 (unchanged)
console.log(num2); // 20

// Example 2: String (value type)
let str1 = "hello";
let str2 = str1; // Copies the value
str2 = "world";
console.log(str1); // "hello" (unchanged)
console.log(str2); // "world"

// Example 3: Boolean (value type)
let bool1 = true;
let bool2 = bool1; // Copies the value
bool2 = false;
console.log(bool1); // true (unchanged)
console.log(bool2); // false


// ===== REFERENCE TYPES =====
// Reference types store a reference to the object in memory
// Types: Object, Array, Function, Date, RegExp, etc.

// Example 4: Object (reference type)
let obj1 = { name: "Alice", age: 25 };
let obj2 = obj1; // Copies the reference, NOT the object
obj2.age = 30;
console.log(obj1.age); // 30 (changed! both point to same object)
console.log(obj2.age); // 30

// Example 5: Array (reference type)
let arr1 = [1, 2, 3];
let arr2 = arr1; // Copies the reference
arr2[0] = 99;
console.log(arr1[0]); // 99 (changed! both point to same array)
console.log(arr2[0]); // 99

// Example 6: Creating independent copies
let obj3 = { color: "blue" };
let obj4 = { ...obj3 }; // Shallow copy (independent)
obj4.color = "red";
console.log(obj3.color); // "blue" (unchanged)
console.log(obj4.color); // "red"

// Example 7: Array independent copy
let arr3 = [1, 2, 3];
let arr4 = [...arr3]; // Shallow copy (independent)
arr4[0] = 99;
console.log(arr3[0]); // 1 (unchanged)
console.log(arr4[0]); // 99