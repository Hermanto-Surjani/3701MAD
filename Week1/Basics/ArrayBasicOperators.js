const a = [1,2,3]
console.log("Section 0: a:",a)

a.push(4)
console.log("Section 1:","a.push(4):",a)

const v = a.pop()
console.log("Section 2:","a.pop:",a,v)

const v2 = a.shift()
console.log("Section 3:","a.shift():",v2,a)

a.unshift(0)
console.log("Section 4:","Unshift(0):", "A:",a,"a.length:",a.length)

const b = a.slice(2)
const i = a.indexOf(2)
console.log("Section 5:","A:",a,"a.slice(2):",b,"a.indexOf(2):",i)

const has3 = a.includes(3)
console.log("Section 6:","a.includes(3):",a,has3)