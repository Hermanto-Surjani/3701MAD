// Props (Properties)
// Definition: Inputs to components, passed from parent to child.
// Purpose: To pass data and event handlers to child components.

// Example:
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Welcome name="Alice" />;

// Output:
// Hello, Alice!
