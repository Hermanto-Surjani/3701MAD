// 1. Constructor function
function Person(name, age) {
  // These are instance properties
  this.name = name;
  this.age = age;
}

// 2. Prototype method (shared by all Person objects)
Person.prototype.greet = function () {
  console.log("Hi, I'm " + this.name + " and I'm " + this.age + " years old.");
};

// 3. Another prototype method
Person.prototype.haveBirthday = function () {
  this.age++;
  console.log(this.name + " is now " + this.age);
};

// 4. Creating instances using `new`
const alice = new Person("Alice", 25);
const bob = new Person("Bob", 30);

alice.greet(); // Hi, I'm Alice and I'm 25 years old.
bob.greet(); // Hi, I'm Bob and I'm 30 years old.

alice.haveBirthday(); // Alice is now 26

/* What’s happening here?
1. The constructor function
js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
This is just a normal function.

When you call it with new, JavaScript:

creates a new empty object

binds this to that object

attaches name and age to it

returns the object automatically

So:

js
const alice = new Person("Alice", 25);
creates:

js
{
  name: "Alice",
  age: 25,
  __proto__: Person.prototype
}
2. Prototype methods
js
Person.prototype.greet = function () { ... }
These methods are not copied into each object.

Instead:

They live in Person.prototype

All Person instances share them

This saves memory and keeps behavior consistent

When you call:

js
alice.greet();
JavaScript looks for greet:

In alice → not found

In alice.__proto__ → found in Person.prototype

This is prototype inheritance.

🧩 Why not put methods inside the constructor?
You could do this:

js
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function () {
    console.log("Hi, I'm " + this.name);
  };
}
But this creates a new copy of greet for every instance.

With prototypes:

One shared method

Less memory usage

Faster creation

Cleaner structure

This is why prototypes exist.

🎯 Summary
A full constructor + prototype setup has:

Constructor function → sets up instance data

Prototype methods → shared behavior

Instances created with new → objects linked to the prototype

This is the classic JavaScript object‑creation pattern. */
