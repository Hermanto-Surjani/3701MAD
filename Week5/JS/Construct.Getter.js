/* Adding a Getter with Function Constructors

There are two common approaches for adding getters when using function constructors:

a. Defining the Getter on the Prototype

Using Object.defineProperty on the prototype ensures the getter is shared across all instances,
saving memory. */

function PersonFun(name, age) {
  this.name = name;
  this.age = age;
  this.introSelf = function () {
    return `My name is ${this.name}, I am ${this.age} years old.`;
  };
}

Object.defineProperty(PersonFun.prototype, "fullname", {
  get: function () {
    return this.name;
  },
  enumerable: true,
  configurable: true,
});

const person1 = new PersonFun("Bob", 25);
console.log(person1.introSelf()); // "My name is Bob, I am 25 years old."
console.log(person1.fullname); // "Bob"

/* b. Defining the Getter on Each Instance

Alternatively, you can define the getter inside the constructor so that each instance gets its own getter. This
method is less memory-efficient but might be useful for instance-specific behaviors. */

function PersonFunInstance(name, age) {
  this.name = name;
  this.age = age;
  this.introSelf = function () {
    return `My name is ${this.name}, I am ${this.age} years old.`;
  };
  Object.defineProperty(this, "fullname", {
    get: function () {
      return this.name;
    },
    enumerable: true,
  });
}
const person2 = new PersonFunInstance("Carol", 28);
console.log(person2.introSelf()); // "My name is Carol, I am 28 years old."
console.log(person2.fullname); // "Carol"

/* Key Points:

    Prototype vs. Instance: Defining on the prototype is more efficient because the getter is shared;
    defining on the instance creates a unique getter per object.
    Flexibility: Function constructors provide flexibility in how properties and methods are assigned. */
