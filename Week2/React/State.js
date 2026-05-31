// State
//     Definition: A built-in object used to contain data or information about the component.
//     Purpose: To manage data that can change over time, triggering re-renders.

// Example (Using Hooks in Functional Components):
import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

// Behavior: Each click on the button increments the count state, updating the displayed number.
