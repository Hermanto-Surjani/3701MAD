let todoList = ["Buy groceries", "Call mom", "Finish project"]; 
// Add a new task 
todoList.push("Read a book"); 
console.log(todoList); 
// Output: ["Buy groceries", "Call mom", "Finish project", "Read a book"] 
// Remove the last task
let completedTask = todoList.pop(); 
console.log(completedTask); // Output: Read a book
console.log(todoList); 
// Output: ["Buy groceries", "Call mom", "Finish project"] 
// Add a task to the beginning 
todoList.unshift("Exercise"); 
console.log(todoList); 
// Output: ["Exercise", "Buy groceries", "Call mom", "Finish project"] 
// Remove the first task
let firstTask = todoList.shift(); 
console.log(firstTask); // Output: Exercise
console.log(todoList); 
// Output: ["Buy groceries", "Call mom", "Finish project"] 
// Find index of a task
let index = todoList.indexOf("Call mom"); 
console.log(index); // Output: 1 
// Replace a task 
todoList.splice(1, 1, "Call dad"); 
console.log(todoList); 
// Output: ["Buy groceries", "Call dad", "Finish project"]