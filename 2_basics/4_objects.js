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

