// Example of assignment operator (=)
let a = 5;
console.log("Using assignment operator (=): a is assigned the value", a);

// Example of loose equality (==)
let b = '5';
if (a == b) {
    console.log("Using loose equality (==): a is loosely equal to b");
} else {
    console.log("Using loose equality (==): a is not equal to b");
}

// Example of strict equality (===)
if (a === b) {
    console.log("Using strict equality (===): a is strictly equal to b");
} else {
    console.log("Using strict equality (===): a is not equal to b");
}
// Example of undefined
let c;
if (c === undefined) {
    console.log("c is undefined");
} else {
    console.log("c is defined");
}

// Example of number comparison
let d = 10;
if (d > a) {
    console.log("d is greater than a");
} else {
    console.log("d is not greater than a");
}

// Example of object comparison
let obj1 = { key: 'value' };
let obj2 = { key: 'value' };
if (obj1 === obj2) {
    console.log("obj1 is strictly equal to obj2");
} else {
    console.log("obj1 is not strictly equal to obj2");
}