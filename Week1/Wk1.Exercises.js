/* Exercises
1. Predict the Output:
*/
console.log("5" + 3); // "53"
console.log("5" - 3); // 2
console.log(true + false); // 1
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log("Hello" && "World"); // "World"

/* Answers
console.log("5" + 3); // "53" (String concatenation)
console.log("5" - 3); // 2 (Numeric subtraction)
console.log(true + false); // 1 (true=1, false=0)
console.log(null + 1); // 1 (null is treated as 0)
console.log(undefined + 1); // NaN (undefined is not a number)
console.log("Hello" && "World"); // "World" (Both are truthy, returns 
last)
*/

// 2. Variable Scope:
function scopeTest() { 
    var a = 1; 
    let b = 2; 
    const c = 3; 
    if (true) { 
        var a = 4; 
        let b = 5; 
        const c = 6; 
        console.log(a); // ? 
        console.log(b); // ? 
        console.log(c); // ? 
    } 
    console.log(a); // ? 
    console.log(b); // ? 
    console.log(c); // ? 
} 
scopeTest();

/* Answers

console.log(a); // 4 
console.log(b); // 5 
console.log(c); // 6 
  } 
console.log(a); // 4 (var is function-scoped) 
console.log(b); // 2 (let is block-scoped) 
console.log(c); // 3 (const is block-scoped) 
} 
scopeTest(); 
*/

// 3. Default Parameters:
function multiply(a, b) { 
    b = b ?? 1; 
    return a * b; 
} 
console.log(multiply(5, 2)); // ?
console.log(multiply(5)); // ?
console.log(multiply(5, 0)); // ?

/* Answers

console.log(multiply(5, 2)); // 10
console.log(multiply(5)); // 5 (b is undefined, defaults to 1)
console.log(multiply(5, 0)); // 0 (0 is not nullish, b remains 0)
*/
