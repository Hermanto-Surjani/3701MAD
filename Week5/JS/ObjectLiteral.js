/* Object Literals

Object literals provide a simple, direct way to create objects. They are great for creating single objects or
configuration objects without the overhead of constructors or classes.

Creating an Object Literal */

const person = {
  name: "Alice",
  age: 30,
  introSelf() {
    return `my name is ${this.name}, I am ${this.age} years old.`;
  },
  get fullname() {
    return this.name;
  },
};
console.log(person.introSelf()); // "my name is Alice, I am 30 years old."
console.log(person.fullname); // "Alice"

/* Key Points:

    Simplicity: Object literals are concise and easy to create.
    Getter: The getter for fullname is defined inline using the get keyword.
    Usage: Ideal for creating single objects or simple data structures. */
