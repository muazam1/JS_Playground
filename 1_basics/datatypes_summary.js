//usually divides in two categories premitive and non premitive 

//1. Primitive data types..
// primitive data types is always call by value 

/* 7 types :
            String 
            Number 
            Boolean
            null
            undefined
            Symbol => To make a value unique
            Bigint
            */
const score = 100 //number
const scores = 100.3 // number no specific float or double
const isloggedIn = false // boolean
const outsideTemp = null // null
let userEmail;//undefined
let usersEmail = undefined //undefined adding manually
const id = Symbol("123") // symbol
const anotherId = Symbol("123") //Value will be different from above 
//lets verify 
console.log(id === anotherId); // output false

const bigNumber = 345352352543523443n //bigint
// verification //console.log(typeof (bigNumber));

/* Important note:
const score = 100 // we didn't declare that it is number 
JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly.
*/

//2. Refrence Type (Non primitive)
// alocated the refrence of memory

/*   Arrays 
     Objects
     Functions
     */

const heros = ["Superman","Ironman","Thor","Batman"]; // Arrays
//verification
//typeof of non primitive always comes as objects array = objects and objects = objects and function = object functions 
console.log(Array.isArray(heros));//True

let myObj = {
    name: "Muazam",
    age: 20,
}
//verification
console.log(typeof(myObj));//output objects

//Function by variables
const myFunction = function(){
    console.log("Hello World");   
}
//verification
console.log(typeof(myFunction));//function

myFunction() // ouput Hello World
