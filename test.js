console.log("Node JS runtime global object:-", global)

console.log("Browser runtime global object:-", window)

console.log("Standard global object in any environment:-", globalThis)


console.log("this object:-", this) // o/p:- {} empty object

console.log(globalThis === global) // o/p:- true