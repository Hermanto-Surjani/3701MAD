/* Understanding setTimeout

Basic Usage of setTimeout

The setTimeout function schedules a function to be executed after a specified delay (in milliseconds). It's
a fundamental tool for handling delayed or scheduled tasks.

Syntax:

setTimeout(callback, delay, [arg1, arg2, ...]);

    callback: Function to execute after the delay.
    delay: Time in milliseconds to wait before executing the callback.
    arg1, arg2, ... (Optional): Arguments to pass to the callback function.

Example: */

console.log("Start");
setTimeout(() => {
  console.log("This message is delayed by 2 seconds");
}, 2000);
console.log("End");

/* Output:

Start
End
This message is delayed by 2 seconds

Explanation:
    �. console.log('Start'): Executes immediately.
    �. setTimeout: Schedules the callback to run after 2000ms (2 seconds).
    �. console.log('End'): Executes immediately.
    �. After 2 seconds: The callback logs the delayed message. */
