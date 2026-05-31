// 1. Define the class
class Person {
  // The constructor runs when you call "new Person(...)"
  constructor(name, age) {
    this.name = name; // instance property
    this.age = age; // instance property
  }

  // 2. Prototype method (shared by all Person objects)
  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }

  // 3. Another prototype method
  haveBirthday() {
    this.age++;
    console.log(`${this.name} is now ${this.age}`);
  }
}

// 4. Create instances using "new"
const alice = new Person("Alice", 25);
const bob = new Person("Bob", 30);

// 5. Use the methods
alice.greet(); // Hi, I'm Alice and I'm 25 years old.
bob.greet(); // Hi, I'm Bob and I'm 30 years old.

alice.haveBirthday(); // Alice is now 26
bob.haveBirthday(); // Bob is now 31

/* What’s happening behind the scenes?
Even though this looks clean and modern, JavaScript still uses:

constructor functions

prototypes

the new keyword

The class syntax simply hides the complexity.

✔ The constructor
This is the function that runs when you create an object:

js
new Person("Alice", 25);
Inside the constructor:

this refers to the new object

You assign properties to it

✔ Methods inside the class
These:

js
greet() { ... }
haveBirthday() { ... }
are not copied into each object.

They are placed on:

Code
Person.prototype
This means:

All Person objects share the same methods

Memory is saved

Behavior is consistent

Exactly like the constructor‑function version — just cleaner.

🆚 How this compares to the constructor‑function version
Concept	Constructor Function	                    ES6 Class
Define properties	Inside the function	            Inside constructor
Define methods	    Person.prototype.method = ...	Write methods directly inside the class
Uses new	        Yes	                            Yes
Uses prototypes	    Yes	                            Yes (hidden)
Beginner‑friendly	Medium                          ✔️ Easier
Modern JS standard  ❌ Old style                    ✔️ Recommended


Classes are simply a nicer way to write the same pattern.

🎯 Summary
An ES6 class:

Uses a constructor to set up instance data

Uses prototype methods automatically

Requires new to create objects

Is the cleanest, most modern way to write object‑oriented JavaScript */
