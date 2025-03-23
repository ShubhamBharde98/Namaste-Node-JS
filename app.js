require("./sum") // the module will execute but we can't access private variables & functions, we have to explicitly export & import them .


const {sumOfTwoNumbers} =  require("./sum")
// Node.js caches modules after the first require(), preventing re-execution unless cleared.

console.log(sumOfTwoNumbers(12,6))