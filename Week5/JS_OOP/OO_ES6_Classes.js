/* Modern JavaScript Classes

ES6 introduced the class syntax, offering a more familiar and cleaner way to implement OOP concepts in
JavaScript. While classes in JavaScript are syntactical sugar over prototype-based inheritance, they
enhance readability and maintainability.

Class Syntax

Classes encapsulate data and behavior, promoting organized code. */

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  getInfo() {
    return `${this.make} ${this.model}`;
  }
}
const bike = new Vehicle("Yamaha", "YZF-R3");
console.log(bike.getInfo()); // Output: Yamaha YZF-R3

/* Explanation:

    constructor: Special method to initialize new instances.
    Methods: Defined within the class body and automatically added to the prototype.

Inheritance with Classes

Classes can inherit from other classes using the extends keyword and utilize the super keyword to call
parent class constructors and methods. */

class Car extends Vehicle {
  constructor(make, model, doors) {
    super(make, model); // Call parent constructor
    this.doors = doors;
  }
  getCarInfo() {
    return `${this.make} ${this.model} with ${this.doors} doors`;
  }
}
const sedan = new Car("Honda", "Accord", 4);
console.log(sedan.getInfo()); // Output: Honda Accord
console.log(sedan.getCarInfo()); // Output: Honda Accord with 4 doors

/* Explanation:

    extends: Establishes inheritance from Vehicle.
    super: Calls the parent class's constructor to initialize inherited properties.
    Subclass Methods: Car can have its own methods (getCarInfo) in addition to inherited ones
    (getInfo). */

/* Static Methods and Properties

Static methods and properties belong to the class itself rather than instances. They are accessed directly
via the class name. */

class MathUtilities {
  static add(a, b) {
    return a + b;
  }
  static PI = 3.14159;
}
console.log(MathUtilities.add(5, 3)); // Output: 8
console.log(MathUtilities.PI); // Output: 3.14159
const util = new MathUtilities();
// util.add(5, 3); // Error: util.add is not a function

/* Explanation:

    Static Methods: add can be called as MathUtilities.add.
    Static Properties: PI is accessible via MathUtilities.PI.
    Instance Access: Static members are not accessible through instances. */

/* Private Fields and Methods

ES2020 introduced private class fields and methods, denoted by a # prefix. They are inaccessible outside
the class, enhancing encapsulation. */

class BankAccount {
  #balance;
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
    }
  }
  getBalance() {
    return this.#balance;
  }
}
const account = new BankAccount(100);
account.deposit(50); // Output: Deposited $50. New balance: $150
console.log(account.getBalance()); // Output: 150
// console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class

/* Explanation:

    Private Fields: #balance cannot be accessed outside the class.
    Methods: Can interact with private fields internally, ensuring data encapsulation. */
