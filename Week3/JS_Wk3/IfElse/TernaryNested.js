// Nested Ternary Operator:
// You can nest ternary operators for multiple conditions, but it's recommended to use if...else for better
// readability when dealing with complex conditions.
// Example:

const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(`Grade: ${grade}`);
// Output: Grade: B
