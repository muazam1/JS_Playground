// keyword This 
// this give the detail of current context
const user = {
    username : "Muazam",
    price : 999,

    welcomeMessage : function (){
        //this used here for current context of object
        console.log(`${this.username}, Welcome to websit`);
        //console.log(this); will give current context detail
    }

}

user.welcomeMessage()// defaul name printed
//now if someone change the name 
// and change the context
user.username = "Khan"
user.welcomeMessage() // Khan printed as name

//console.log(this); // now it will refer to an empty object bc we have no 
// context in the global here
// in browse we have the window object so we well not get empty in browser

// arrow Function 

function one (){
    let username = "Muazam"
    console.log(this);
    
   // console.log(this.username);//undefined 
    
}
one() // we will lot of values here

const chai = function(){
    let username = "Muazam"
    //console.log(this.username);//undefined 
    
}
chai()


// Arrow function declaration
const chaii = () => {
    let username = "Muazam"  
    //console.log(this.username);//undefined
    //console.log(this);//empty object
}
chaii()

//Arrow function 
const addTwo = (num1,num2) =>{
    return num1 + num2
}
console.log(addTwo(3,4));// 7

// now in implicit return 
const addtwo = (num1,num2) => (num1 + num2)// if we used parantesis then no need of return
//  but in curly braces we must write return
console.log(addtwo(3,4)); //7

// if we have to return object 
const addttwo = (num1,num2) => ({username : "Muazam"}) 
console.log(addttwo(3, 4));// value of object Muazam


// const myArr = [2,5,6,4,3,5]
// myArr.forEach(function(){})