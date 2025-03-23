console.log("sum module starting execute.")
const sumOfTwoNumbers = (a,b) =>{
    return a + b;
} // variables & functions are private in a module until you explicitly exported.

module.exports = {sumOfTwoNumbers}
console.log("sum module executed.")
