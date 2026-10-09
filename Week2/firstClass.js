const myVar = function(){}
    function a(){
        return "Function A called"
    }
function b(){
    return "Function B called"
}
function c(){
    return b
}
console.log(c())