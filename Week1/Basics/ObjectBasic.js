const o = {name: 'Tom', age: 3};
console.log("Section 0: o:",o)

const nm= o.name, age = o['age'];
console.log("Section 1:","nm:",nm,"age:",age)

const hobby = o.hobby;
console.log("Section 2:","hobby:",hobby)

o.friend = 'Jerry'
o.age = 5
console.log("Section 3:","o:",o)

console.log("Section 4:","Object.keys(o):",Object.keys(o))

console.log("Section 5:","Object.values(o):",Object.values(o))

console.log("Section 6:","Object.entries(o):",Object.entries(o))

const ob = {name:'Jerry', age: 5};
console.log("Section 7: ob.toString():",ob.toString);

console.log("Section 8: ob.hasOwnProperty('name'):",ob.hasOwnProperty('name'))

console.log("Section 9: ob.hasOwnProperty('hobby'):",ob.hasOwnProperty('hobby'))

console.log("Section 10: ob.hasOwnProperty('toString'):",ob.hasOwnProperty('toString'))

console.log("Section 11: name in ob:",'name' in ob)
console.log("Section 12: toString in ob:",'toString' in ob)
console.log("Section 13: hobby in ob:",'hobby' in ob)
console.log("Section 14: ob.name!==undefined:",ob.name !== undefined)
console.log("Section 15: ob.toString!==undefined:",ob.toString !== undefined)
console.log("Section 16: ob.hobby!==undefined:",ob.hobby !== undefined)