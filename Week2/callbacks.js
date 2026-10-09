function adder(num1,num2){
    return num1+num2
}
function substract(num1,num2){
    return num1-num2
}
function promptUser(){
    let num1 = Number(prompt("Enter First Number"))
    let num2 = Number(promptUser("Enter Second Number"))
    let operation = prompt("Add or subtract")
     if (operation == "Add"){
        return fun1(num1,num2)
     }
     else{
        return fun2(num1,num2)
     }
     console.log(promptUser(adder,substract))
    }

function treatMalaria(){
    return "Malaria treated"
}
function treatHoma(){
    return "Homa Treated"
}
function runTests(){
    return "Test Run"
}
function consultation(){
    //get symptoms
    // run blood tests
    // Diagnose and treat

    if(runTests()== "Test"{

    })
}
consultation(treatMalaria,treatHoma)