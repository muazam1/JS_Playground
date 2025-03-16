// functions 

// console.log("m");
// console.log("u");
// console.log("a");
// console.log("z");
// console.log("a");
// console.log("m");
// we make it simple by using functions 
function sayMyName(){
    console.log("m");
    console.log("u");
    console.log("a");
    console.log("z");
    console.log("a");
    console.log("m");
}

// now the refrence of funtion is its name 
//sayMyName // => refrence only  
//sayMyName() // bracket is used to execute the function 

// addition function 
function addTwoNumber (number1 , number2){//number1 and number2 here is parameter  
    console.log( number1 + number2)
}
//addTwoNumber() // not a number
addTwoNumber(3, 4) // 7 // 3 and 4 here are arguments 

//we can store in variable as well
const result = addTwoNumber(3, 5)
console.log('Result: ',result);//will throw undefined


function addTwoNumber (number1 , number2){//number1 and number2 here is parameter  
    // let result = number1 + number2
    // return result // we can use direct method as well
    return number1 + number2

    console.log("muazam");// after return nothing got executed
    
}
const resuult = addTwoNumber(3, 5)
console.log('Result: ',resuult);//8


// different methods for parameters and arguments 

function loginUserMessage (username/* = "sam" we can use default value as well for not going into false*/){
    // we can use condition for this if the result is true then execute the function 
    // if can be used as
    // if (!username){ or below
    if (username === undefined){
        console.log("Please enter username");
        return 
 
    }
    return `${username} just logged in`
}
loginUserMessage("Muazam") // nothing print out 
console.log(loginUserMessage("Muazam")) // now we have output
// suppose
console.log(loginUserMessage())//if nothing passed we get undefined // after if we will please enter name


