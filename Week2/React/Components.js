// Components
// Definition: Reusable building blocks in React that return JSX to define what appears on the screen.
// Types:
//     Functional Components: Defined as JavaScript functions.
//     Class Components: Defined using ES6 classes (less common in modern React).

// Example (Functional Component):
function Greeting() {
  return <h1>Hello, World!</h1>;
}

// Example (Class Component):
class Greeting extends React.Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}
