/* Async/Await

What are Async/Await?

Async/Await are syntactic sugar built on top of Promises, introduced in ECMAScript 2017 (ES8). They allow
writing asynchronous code that looks and behaves like synchronous code, enhancing readability and
maintainability.

Key Concepts:
    async Keyword: Declares an asynchronous function that returns a Promise.
    await Keyword: Pauses the execution of an async function until the awaited Promise resolves or
    rejects.

Basic Syntax: */

// async function fetchData() {
//   try {
//     const response = await someAsyncOperation();
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

/* Using fetch with Async/Await

The fetch API is commonly used for making network requests. Combining it with Async/Await simplifies
handling asynchronous HTTP requests.

Example: Fetching Data from an API */

async function getUserData(userId) {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const user = await response.json();
    console.log("User Data:", user);
  } catch (error) {
    console.log("Error fetching user data:", error);
  }
}
getUserData(2);

/* Explanation:

    async function getUserData(userId): Declares an asynchronous function.
    await fetch(url): Waits for the fetch Promise to resolve.
    await response.json(): Waits for the response to be parsed as JSON.
    try...catch: Handles any errors that occur during the fetch or parsing process.

Output: */

// User Data: {
// id: 1,
// name: "Leanne Graham",
// username: "Bret",
// email: "Sincere@april.biz",
// ...
// }
