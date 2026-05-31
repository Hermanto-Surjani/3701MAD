/* Error Handling with Async/Await

Proper error handling is crucial when working with asynchronous operations to prevent unhandled Promise
rejections and ensure the application can gracefully handle failures.

Example: Handling Errors in Async Function */

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      // Handle HTTP errors
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle network or parsing errors
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error for further handling if needed
  }
}
async function displayData() {
  try {
    const data = await fetchData(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    console.log("Data:", data);
  } catch (error) {
    console.log("Failed to display data.");
  }
}
displayData();

/* Explanation:

    fetchData: Fetches data and throws errors for non-OK HTTP responses or network issues.
    displayData: Calls fetchData and handles any errors that propagate up.
    Error Flow:
        If fetchData encounters an error, it logs the error and re-throws it.
        displayData catches the re-thrown error and logs a failure message.
Benefits:
    Clear Separation of Concerns: fetchData handles fetching and error throwing, while
    displayData handles display logic and error messaging.
    Avoids Silent Failures: Errors are explicitly caught and handled, preventing unhandled rejections. */
