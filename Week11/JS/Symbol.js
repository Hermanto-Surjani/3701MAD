/* Introduction to JavaScript Symbol

A Symbol is a unique and immutable primitive value and may be used as the key of an object property. In
contrast to strings, every symbol value returned from the Symbol() function is unique, which helps to
avoid property name collisions.
Creating a Symbol
You create a symbol using the Symbol() function. Note that Symbol is not a constructor, and you cannot
use new with Symbol. */

let sym1 = Symbol();
let sym2 = Symbol('desc');
let sym3 = Symbol('desc');
console.log('sym2 === sym3:', sym2 === sym3); // false, even though descriptions are the same;

/* Each time you call Symbol(), a new and unique symbol is created. The optional string parameter is a
description of the symbol which can be useful for debugging but doesn't affect the uniqueness.

Symbol Properties

Symbols can be used as property keys. Because symbols are unique, this avoids any property key collisions
that can occur with strings. Here's how you can use symbols as keys in an object: */

const MY_KEY = Symbol();
let obj = {
  [MY_KEY]: 123,
};
console.log('obj[MY_KEY]:', obj[MY_KEY]); // 123

/* In this example, MY_KEY is a symbol that is used as a property key in the object obj.
You can access the value using the symbol as the key. */

/* Symbols are not enumerable in for...in loops, and they do not appear in Object.keys()
or Object.getOwnPropertyNames(). However, you can retrieve them using Object.getOwnPropertySymbols(): */

/* Shared Symbols with Symbol.for() and Symbol.keyFor()

If you need to create a symbol that is shared across different parts of your code, use Symbol.for(). This
method checks the global symbol registry, and if a symbol with the key exists, it returns it; otherwise, it
creates a new symbol and registers it. */

let globalSym = Symbol.for('app.symbol'); // create a new global symbol
let globalSym2 = Symbol.for('app.symbol'); // retrieve the existing symbol
console.log('globalSym === globalSym2:', globalSym === globalSym2); // true

/* To retrieve the key associated with a global symbol, use Symbol.keyFor(): */

let key = Symbol.keyFor(globalSym);
console.log('Symbol.keyFor():', key); // 'app.symbol'

/* System Symbols

JavaScript uses some built-in symbols which have native functionality, accessible via properties on the
Symbol constructor, such as Symbol.iterator, Symbol.asyncIterator, Symbol.match, etc.

For example, Symbol.iterator defines the default iterator for an object. Used by for...of loops: */

let arr = [1, 2, 3];
let iterator = arr[Symbol.iterator]();
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // undefined

/* Using Symbols for Private Object Properties

Since symbols are not included in Object.keys() or for...in loops, they can be used for pseudo-
private properties: */

let secret = Symbol('secret');
let objPrivate = {
  [secret]: "I'm a hidden value",
};
console.log('Object.keys(objPrivate):', Object.keys(objPrivate)); // []
console.log('objPrivate[secret]:', objPrivate[secret]); // "I'm a hidden value"
