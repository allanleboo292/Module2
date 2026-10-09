// Array are a collection/composite data ttype which help us to store a list of items
// To create arrays we enclose the items inside squeare bracket [], then separate the items inside using comas
// These items could belong to any data types

// let myVarr = ["Random String",4578,true,undefined,null]

let studentsLists = ['simon','allan','Peace']

console.log(studentsLists[0])

let studentsListsMercy = ['simon','peter','Zahra','peace']
let studentsListsSimanta = ['Ibrahim','Siamanta']

let allPartTimeStudent = studentsListsMercy.concat(studentsListsSimanta)

console.log(allPartTimeStudent)

// pop remove the last value
// push add the value

// name, age, email, course

// object is a composite 
let student1 = {
    name:'Allan',
    age: '90',
    email:'student@gmail',
    course: 'SD'
}
let student2 = {
    name:'siamanta',
    age: '30',
    email:'student@gmail',
    course: 'SD'
}
let detailedStudentLists = [student1,student2]

// to access items inside the objects , we can use bracket notation[''], dot notation

console.log(student1['age'])
console.log(student2.email)



let productPrice = 100;
let discountPercentage = 15;
let finalPrice = calculateFinalPrice(productPrice,discountPercentage)

console.log("Original Price:",productPrice);
console.log("Discount:",discountPercentage +"%")
console.log("Final Price:".finalPrice)