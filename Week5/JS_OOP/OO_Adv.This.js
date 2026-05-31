/* Advanced this Scenarios

Understanding this in various contexts is crucial for writing effective JavaScript code. This section
explores complex scenarios involving this.

this in Callbacks

When passing object methods as callbacks, the context (this) can be lost, leading to unexpected
behaviors.

Problematic Example: */

// const user = {
//   name: "Frank",
//   greet: function () {
//     console.log(`Hello, I'm ${this.name}`);
//   },
// };
// setTimeout(user.greet, 1000); // Output after 1s: Hello, I'm undefined (or global name)

/* Explanation:

    Issue: user.greet loses its context when passed as a callback to setTimeout.
    Result: Inside greet, this refers to the global object, not user. */

/* Binding this with bind, call, and apply

To preserve the intended this context in callbacks, JavaScript provides methods like bind, call, and
apply.

Using bind: */

// const user2 = {
//   name: "Frank",
//   greet: function () {
//     console.log(`Hello, I'm ${this.name}`);
//   },
// };
// setTimeout(user2.greet.bind(user2), 1000); // Output after 1s: Hello, I'm Frank

/* Explanation:

bind(user): Returns a new function with this permanently set to user.

Using call and apply: */

// function greet() {
//   console.log(`Hello, I'm ${this.name}`);
// }
// const user3 = { name: "Grace" };
// greet.call(user3); // Output: Hello, I'm Grace
// greet.apply(user3); // Output: Hello, I'm Grace

/* Explanation:

    call(user): Invokes greet with this set to user.
    apply(user): Similar to call but accepts arguments as an array. */

/* this in Event Handlers

In event handlers, especially in frameworks like React, this can be a source of bugs if not handled
correctly.

Example in React Class Component: */

// class Clicker extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//     // Binding `this`
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState({ count: this.state.count + 1 });
//   }
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         Clicked {this.state.count} times
//       </button>
//     );
//   }
// }

/* Explanation:

    Binding: this.handleClick = this.handleClick.bind(this); ensures this refers to the
    component instance inside handleClick.
    
Alternative with Arrow Functions:*/

class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <button onClick={this.handleClick}>
        Clicked {this.state.count} times
      </button>
    );
  }
}

/* Explanation:

    Arrow Function: handleClick is defined as an arrow function, inheriting this from the class
    context. */
