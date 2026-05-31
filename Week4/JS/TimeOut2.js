// Example: Delayed Message

function showMessage(message) {
  console.log(message);
}
console.log("Loading...");
setTimeout(showMessage, 3000, "Data loaded successfully!");
// Waits for 3 seconds before executing showMessage
console.log("Please wait while we load your data.");

/* Output:

Loading...
Please wait while we load your data.
Data loaded successfully!

Explanation:
    Before Delay:
        Logs "Loading..." and "Please wait while we load your data."
    After 3 Seconds:
        Executes showMessage and logs "Data loaded successfully!" */
