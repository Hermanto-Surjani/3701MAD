/* Function Constructors

Function constructors allow you to create multiple instances of similar objects. They work by acting as
blueprints for object creation.

Creating Objects with a Function Constructor */

function PersonFun(name, age) {
  this.name = name;
  this.age = age;
  this.introSelf = function () {
    return `my name is ${this.name}, I am ${this.age} years old.`;
  };
}

console.log(new PersonFun("Alice", 30).introSelf()); // "my name is Alice, I am 30 years old."
