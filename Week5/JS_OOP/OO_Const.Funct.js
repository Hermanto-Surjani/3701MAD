/* Constructor Functions

Before ES6 introduced classes, constructor functions were the primary means to implement OOP in
JavaScript. They allow the creation of multiple objects with shared properties and methods.

Defining Constructor Functions

A constructor function is a regular function, but by convention, its name starts with a capital letter. It
initializes new objects. */

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.getCarInfo = function () {
//     return `${this.make} ${this.model} (${this.year})`;
//   };
// }

// Car("Toyota", "Corolla", 2020); // This will not create a new object, and this will refer to the global object (window in browsers).

/* Explanation:
When Car is called without new, this inside the function refers to the global object, which is not
intended. This can lead to unintended consequences, such as polluting the global namespace. */
// console.log(make); // Output: Toyota
// console.log(model); // Output: Corolla
// console.log(year); // Output: 2020
// console.log(getCarInfo()); // Output: Toyota Corolla (2020)

/* Explanation:

    this.make, this.model, this.year: Assign properties to the new object.
    this.getCarInfo: Assign a method to the new object.

Note: Defining methods inside the constructor creates a new copy of the method for each instance, which
is memory-inefficient. */

/* Creating Instances with new

Using the new keyword with a constructor function creates a new object instance. */

// const myCar = new Car("Toyota", "Corolla", 2020);
// console.log(myCar.getCarInfo()); // Output: Toyota Corolla (2020)

/* Explanation:

    �. Creation: new Car('Toyota', 'Corolla', 2020) creates a new object.
    �. Binding: Inside Car, this refers to the new object.
    �. Return: The new object is returned, unless the constructor explicitly returns another object. */

/* Properties and Methods in Constructors

Properties are typically assigned using this, while methods can be assigned directly or via prototypes.

Direct Assignment (Memory Inefficient): */

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(`Hello, I'm ${this.name}`);
  };
}
const alice1 = new Person("Alice", 30);
const bob1 = new Person("Bob", 25);
alice1.sayHello(); // Output: Hello, I'm Alice
bob1.sayHello(); // Output: Hello, I'm Bob

// Using Prototypes (Memory Efficient):

function PersonPro(name, age) {
  this.name = name;
  this.age = age;
}
PersonPro.prototype.sayHello = function () {
  console.log(`Hello, I'm ${this.name}`);
};

/* Explanation:

Prototype Methods: Defined once and shared across all instances, conserving memory. */

/**
 * Get currently used JS heap memory in bytes.
 * Node.js: process.memoryUsage().heapUsed
 * Browser (Chromium): performance.memory.usedJSHeapSize
 */
function getUsedMemoryBytes() {
  if (typeof process !== "undefined" && process.memoryUsage) {
    return process.memoryUsage().heapUsed;
  }
  if (
    typeof performance !== "undefined" &&
    performance.memory &&
    typeof performance.memory.usedJSHeapSize === "number"
  ) {
    return performance.memory.usedJSHeapSize;
  }
  return null; // memory API not available
}

/**
 * Simple benchmark for synchronous functions.
 * @param {Function} fn - Function to benchmark
 * @param {Object} options
 * @param {number} [options.iterations=100000]
 * @param {Array} [options.args=[]]
 * @param {number} [options.warmup=1000]
 */
function benchmarkFunction(
  fn,
  { iterations = 100000, args = [], warmup = 1000 } = {},
) {
  if (typeof fn !== "function") {
    throw new TypeError("benchmarkFunction: fn must be a function");
  }

  // Optional warmup
  for (let i = 0; i < warmup; i++) fn(...args);

  const startMem = getUsedMemoryBytes();
  const startTime =
    typeof performance !== "undefined" && performance.now
      ? performance.now()
      : Date.now();

  for (let i = 0; i < iterations; i++) fn(...args);

  const endTime =
    typeof performance !== "undefined" && performance.now
      ? performance.now()
      : Date.now();
  const endMem = getUsedMemoryBytes();

  const totalTimeMs = endTime - startTime;
  const avgTimeMs = totalTimeMs / iterations;
  const memoryDeltaBytes =
    startMem !== null && endMem !== null ? endMem - startMem : null;

  return {
    iterations,
    totalTimeMs,
    avgTimeMs,
    memoryStartBytes: startMem,
    memoryEndBytes: endMem,
    memoryDeltaBytes,
  };
}

function formatBytes(bytes) {
  if (bytes === null) return "N/A";
  const units = ["B", "KB", "MB", "GB"];
  let value = Math.abs(bytes);
  let unitIndex = 0;
  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex++;
  }
  const sign = bytes < 0 ? "-" : "";
  return `${sign}${value.toFixed(2)} ${units[unitIndex]}`;
}

// Example function to benchmark
function add(a, b) {
  return a + b;
}

// const bench = benchmarkFunction(add, {
//   iterations: 1000000,
//   args: [5, 10],
//   warmup: 10000,
// });

// console.log("Benchmark result:", {
//   iterations: bench.iterations,
//   totalTimeMs: bench.totalTimeMs.toFixed(3),
//   avgTimeMs: bench.avgTimeMs.toFixed(8),
//   memoryDeltaBytes: bench.memoryDeltaBytes,
//   memoryDeltaFormatted: formatBytes(bench.memoryDeltaBytes),
// });

benchmarkFunction(PersonPro); // Benchmark the PersonPro constructor function

// Benchmark PersonPro constructor (must use `new`)
const personProBench = benchmarkFunction(() => new PersonPro("Alice", 30), {
  iterations: 500000,
  warmup: 10000,
});

console.log("PersonPro benchmark result:", {
  iterations: personProBench.iterations,
  totalTimeMs: personProBench.totalTimeMs.toFixed(3),
  avgTimeMs: personProBench.avgTimeMs.toFixed(8),
  memoryDeltaBytes: personProBench.memoryDeltaBytes,
  memoryDeltaFormatted: formatBytes(personProBench.memoryDeltaBytes),
});

const personProBench1 = benchmarkFunction(() => new Person("Alice", 30), {
  iterations: 500000,
  warmup: 10000,
});

console.log("Person benchmark result:", {
  iterations: personProBench1.iterations,
  totalTimeMs: personProBench1.totalTimeMs.toFixed(3),
  avgTimeMs: personProBench1.avgTimeMs.toFixed(8),
  memoryDeltaBytes: personProBench1.memoryDeltaBytes,
  memoryDeltaFormatted: formatBytes(personProBench1.memoryDeltaBytes),
});
