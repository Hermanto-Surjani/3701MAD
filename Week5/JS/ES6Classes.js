/* ES6 Classes

ES6 classes offer a modern and clean syntax for object creation and inheritance. Although classes are
syntactic sugar over JavaScriptʼs existing prototype-based inheritance, they provide a more familiar
structure for developers coming from classical OOP languages.

Creating an Object with an ES6 Class */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introSelf() {
    return `My name is ${this.name}, I am ${this.age} years old.`;
  }

  get fullname() {
    return this.name;
  }
}

const person1 = new Person("Bob", 25);
console.log(person1.introSelf()); // "My name is Bob, I am 25 years old."
console.log(person1.fullname); // "Bob"

/* Key Points:

    Class Declaration: The class is declared using the class keyword, followed by the class name.
    Constructor Method: The constructor method is a special method for creating and initializing objects.
    Methods: Methods defined in the class body are added to the prototype of the class.
    Getters: Getters can be defined using the get keyword, allowing properties to be accessed like regular
    properties.
    Instantiation: Objects are created using the new keyword, which calls the constructor method. */

/*  Simplicity and Readability: ES6 classes provide a clear, concise syntax for defining constructors,
    methods, and getters.
    Inheritance: Classes support inheritance using the extends keyword.
    Prototype-Based: Despite the syntax, methods and getters are defined on the prototype, ensuring
    memory efficiency. */
