// switch Statement
// The switch statement evaluates an expression and executes code blocks based on matching case values.
// It's an alternative to multiple if...else statements and can make the code cleaner and more readable.
// Syntax:
// switch (expression) {
// case value1:
// // Code to execute if expression === value1
// break;
// case value2:
// // Code to execute if expression === value2
// break;
// default:
// // Code to execute if no case matches
// }

const day = "Tuesday";
switch (day) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Tuesday":
    console.log("Second day of the work week.");
    break;
  case "Wednesday":
    console.log("Midweek day.");
    break;
  case "Friday":
    console.log("End of the work week.");
    break;
  default:
    console.log("It's the weekend!");
}
// Output: Second day of the work week.

// Explanation:
//  The switch statement compares the day variable against each case.
//  When a match is found, the corresponding code block is executed.
//  The break statement exits the switch after executing the matched case.
//  The default case is executed if no matching case is found.
