/* The new Keyword

The new keyword is pivotal in JavaScript for creating instances from constructor functions. It orchestrates several steps to ensure objects are properly instantiated.

What Happens When You Use new

When the new keyword is used with a constructor function, the following steps occur:
    �. Creation of a New Object: A fresh, empty object is created.
    �. Prototype Linking: The new object's internal [[Prototype]] property is set to the constructor
    function's prototype property.
    �. Binding this: The constructor function is invoked with this bound to the new object.
    �. Returning the Object: The new object is returned automatically unless the constructor explicitly
    returns a different object.

Example: */

function Person(name) {
  this.name = name;
}
const charlie = new Person("Charlie");
console.log(charlie.name); // Output: Charlie
console.log(charlie instanceof Person); // Output: true

/* Explanation:

    �. New Object: An empty object {} is created.
    �. Prototype Linking: charlie.__proto__ points to Person.prototype.
    �. Binding: Inside Person, this refers to charlie, assigning charlie.name = 'Charlie'.
    �. Return: charlie is returned.

Advantages of Using new

    Object Creation Simplification: Streamlines the process of creating multiple similar objects.
    Prototypal Inheritance: Facilitates inheritance by linking instances to constructor prototypes.
    Encapsulation: Encapsulates object creation logic within constructor functions, promoting organized
    code. */
