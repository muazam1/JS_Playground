// truthy value and falsy value 

const userEmail = "muazam@google.com"
// here we didn't use any condition 
// we just assume the value to be true
// this is known as truthy values 
// empty would have been considered false 
// empty array will be true
if (userEmail){
    console.log("Got user Email");
    
}else {
    console.log("Don't have user email");
    
}

// Falsy value

// false , 0 , -0 ,BigInt 0n , "" , null , undefined , NaN
//other than that will be considered as truthy values


// truthy values 

// "0" , "false", " ", [], {}, function(){}

usersEmail = []
if (usersEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nulllish Coalescing Operater (??): null undefined 

let val1;
// val1 = 5 ?? 10 
// console.log(val1);// 5 

// val1 = null ?? 10 
// console.log(val1);// 10

// val1 = undefined ?? 15
// console.log(val1);// 15

val1 = null ?? 10 ?? 20
console.log(val1); //10 


// Terniary Operater 

//condition ? true : false

const iceTeaPrice  = 100 
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");

