/* Prototypes in JavaScript

JavaScript's prototype-based inheritance allows objects to inherit properties and methods from other
objects. Understanding prototypes is fundamental to mastering OOP in JavaScript.

Understanding Prototypes

    Prototype Property: Every function in JavaScript has a prototype property. This property is an
    object that contains properties and methods that should be shared among all instances created by
    the constructor function. */

function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
};
const lion = new Animal("Lion");
lion.speak(); // Output: Lion makes a noise.

/* Prototype Object: The prototype object is shared among all instances. Modifying it affects all
objects created via the constructor. */

/* Prototype Chain

The prototype chain is the mechanism by which JavaScript objects inherit features from one another.

Visualization:

lion --> Animal.prototype --> Object.prototype --> null

Explanation:

    �. lion: An instance of Animal.
    �. Animal.prototype: Contains the speak method.
    �. Object.prototype: Base prototype containing fundamental methods like toString.
    �. null: End of the prototype chain.

Property Lookup:

When accessing a property or method on an object, JavaScript first looks for it on the object itself. If not
found, it traverses up the prototype chain until it finds the property or reaches null.

Example: */

console.log(lion.toString()); // Inherited from Object.prototype

/* Adding Methods to Prototypes

Attaching methods to the prototype ensures they are shared across all instances, enhancing memory
efficiency. */

function Person(name) {
  this.name = name;
}
// Adding method to prototype
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};
const dave = new Person("Dave");
const eve = new Person("Eve");
dave.sayHello(); // Output: Hello, my name is Dave
eve.sayHello(); // Output: Hello, my name is Eve

/* Benefits:

    Memory Efficiency: Only one copy of the method exists, regardless of the number of instances.
    Dynamic Updates: Adding or modifying methods on the prototype affects all existing instances.

Inheritance with Prototypes

Prototypal inheritance allows one constructor function to inherit properties and methods from another.

Example: */

function Mammal(name) {
  this.name = name;
}

Mammal.prototype.walk = function () {
  console.log(`${this.name} is walking.`);
};

function Dog(name, breed) {
  Mammal.call(this, name); // Inherit properties
  this.breed = breed;
}

// Inherit methods
Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.constructor = Dog;

// Add Dog-specific method
Dog.prototype.bark = function () {
  console.log(`${this.name} barks.`);
};

Dog.prototype.getBreed = function () {
  console.log(`${this.name} is a ${this.breed}.`);
};

const rex = new Dog("Rex", "German Shepherd");
rex.walk();     // Output: Rex is walking.
rex.bark();     // Output: Rex barks.
rex.getBreed(); // Output: Rex is a German Shepherd.

/* Explanation:

    �. Property Inheritance: Mammal.call(this, name) invokes the Mammal constructor, assigning
    name to the Dog instance.
    �. Method Inheritance: Dog.prototype = Object.create(Mammal.prototype) sets up the
    prototype chain, allowing Dog instances to access Mammal methods.
    �. Constructor Correction: Dog.prototype.constructor = Dog ensures the constructor
    property points to Dog.
    �. Method Extension: Dog can have its own methods (bark) in addition to inherited ones (walk).
    
Note: ES6 classes provide a more intuitive syntax for inheritance, which we'll explore later. */
