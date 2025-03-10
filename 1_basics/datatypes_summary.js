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

//******************************************************* */
// Here we have two types of memory 
// Stack used in all(Primitive datatypes), Heap used in all (Non-Premitive datatypes)
// Whenever Stack memory is used it means you get a copy of the variable you have declare.
// Whenever the Heap memory is used it means you get the refrence to the orignal values. 

// Example of stack 
let myName = "Muazam Qayyum Khan"//stores in stack
let anotherName = myName // we get the copy of (myName) here 
myName = "Muazam Qayyum"// Now we have done change in copy so the orignal value remain same. 

console.log(myName);// Muazam Qayyum Khan 
console.log(anotherName); // Muazam Qayyum


// Example of Heap
let userOne = {
    useremail: "user@google.com",
    userId : "23423"
} // Here userOne variable giving the refrence to the value of object in heap 
let userTwo = userOne; // we will the same refrence not the copy like premitive
// lets change the value in user two 
userTwo.useremail = "user@outlook" 
console.log(userOne.useremail);//user@oulook 
console.log(userTwo.useremail);//user@outlook // it is same as userOne because changes in the heap means change in the orignal value... 



