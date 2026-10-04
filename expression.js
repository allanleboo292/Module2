// function summer(num1,num2){
//     return num1+num2
// }
// // Expression 
// const myadditionFunct = function(num1, num2){
//     return num1+num2
// }
// myadditionFunct(4,5)

// IIFE (Immediately invoke function expression)

(function(num1, num2, num3){
    console.log(num1+num2+ num3)
    return num1 + num2+ num3
})(2,3,4);

// Arrow Function

const myArrowFunct =( num1,num2)=>{
    return num1 + num2
}
console.log(myArrowFunct(2,3))