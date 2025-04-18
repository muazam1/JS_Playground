//  singleton // declare with the help of constructor

//const user = new Object()
const user = {}
user.id = "123abs"
user.name = "Muazam"
user.isLoggedIN = false

console.log(user);
console.log(Object.keys(user));// prints all the keys 
console.log(Object.values(user)); // print all the values 
console.log(Object.entries(user)); // make separate entry in array
console.log(user.hasOwnProperty('isLoggedIN'));// true


const regularUser = {
    email : "muazam@google.com",
    fullname : {
        userfullname : {
            firstname : "Muazam",
            lastname : "Qayyum"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);//Muazam


//combining two objects
const obj1 = {
    1:  "a",
    2 : "b"
}
const obj2 = {
    3:  "a",
    4 : "b"
}
// Different methods like array combination 
// const obj3 = {obj1, obj2}
// console.log(obj3);
// const obj3 = Object.assign({}, obj1, obj2)
obj3 = {...obj1, ...obj2}//spreading method
console.log(obj3);



// array of an object 
const users = [
    {
        id : 1 , 
        email : "m@gmail.com"
  }
]
//users[1].email

// Nearly all objects in JavaScript are instances of Object; a typical object inherits properties (including methods) from Object.prototype, although these properties may be shadowed (a.k.a. overridden). The only objects that don't inherit from Object.prototype are those with null prototype, or descended from other null prototype objects.


// Destructuring of an object 
const course = {
    coursename : "js in detail",
    price : "999",
    courseinstructor : "Muazam"
}
//course.courseinstructor // not a preferred way 

const {courseinstructor: instructor} = course // here we use destructure the object here
console.log(instructor);//muazam

// API concepts 
// {
//     "name" : "muazam",
//     "coursename" : "js in detail",
//     "price" : "freee"
// }

//Api mainly formated in object format  
// when we call api from json what happens
// it returns json file with the key value pairs 

// sometime you may encountered api in array format 
// [
//     {},
//     {},
//     {}
// ]