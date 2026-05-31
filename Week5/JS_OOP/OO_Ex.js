/* Exercises

Exercise 1: Creating a Constructor Function

Objective:
Create a constructor function Book that initializes with title, author, and year. Add a method
getSummary that returns a string summarizing the book details.

Requirements:
    Use new to create an instance of Book.
    Call the getSummary method on the instance.

Steps:
    �. Define the Book constructor function.
    �. Assign properties title, author, and year using this.
    �. Add the getSummary method inside the constructor.
    �. Create an instance using new Book.
    �. Invoke getSummary on the instance.


Exercise 2: Utilizing Prototypes

Objective:
Extend the Book constructor function by adding a method getAge to its prototype, which calculates how
many years ago the book was published.

Requirements:
    Add getAge to Book.prototype.
    Create a new Book instance and call getAge.

Steps:

    �. Define the getAge method on Book.prototype.
    �. Implement logic to calculate the age based on the current year.
    �. Create a new instance of Book.
    �. Call getAge on the instance.


Exercise 3: Implementing Classes with Inheritance

Objective:
Create a class Electronic with properties brand and power. Add a method turnOn that logs a message
indicating the electronic device is turned on. Then, create a subclass Laptop that inherits from
Electronic and adds a model property. Add a method openLid specific to Laptop.

Requirements:
    Use ES6 class syntax.
    Utilize extends and super.
    Create an instance of Laptop and demonstrate both inherited and subclass-specific methods.
Steps:
    �. Define the Electronic class with brand and power.
    �. Add the turnOn method.
    �. Define the Laptop class extending Electronic.
    �. Add the model property and openLid method.
    �. Create an instance of Laptop.
    �. Call both turnOn and openLid methods.


Exercise 4: Exploring this in Different Contexts

Objective:
Demonstrate how this behaves differently in various contexts by creating an object with a method that
uses a traditional function and an arrow function inside it. Observe the value of this in both cases.

Requirements:
    Create an object user with a property name and a method display.
    Inside display, define a traditional function and an arrow function that log this.name.
    Call display and observe the outputs.

Steps:
    �. Define the user object with name and display method.
    �. Inside display, implement both traditional and arrow functions.
    �. Invoke the display method.
    �. Analyze the output of both functions. */