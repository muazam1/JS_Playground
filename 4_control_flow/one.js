// sometime we don't want the whole code to execute 
// for that we use control flow 


// if 

// if (condition){ //if the condition is true then we will execute the code otherwise not
// }
const isuserLoggedIn = true

// if (isuserLoggedIn){
//     console.log("user logged in");
// }

const temp = 41
if (temp < 50){
    console.log("Less than 50");
}else{
    console.log("Greater than 50");
}//less than 50 will got executed 

// const score = 200 
// if (score >100 ){
//     let power = "fly"
//     console.log(`user power is ${power}`);
// }
//console.log(`user power is ${power}`);//will throw error because it is outside scope


// another way of if statment
// known as implicit scope and not the recommended way
// const balance = 1000
// if (balance > 500) console.log("balance is enough");


// Nesting if control flow

const balance = 1000

// if (balance<500 ){
//     console.log("Less than");
// }else if (balance<750){
//     console.log("Less than 750");
// }else if (balance<900){
//     console.log("less than 900");
// }else {
//     console.log("Less than 1200");
//     // this one got executed according to the condition    
// }


//another example 

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInfromEmail = true
// && is used for using multiple condition in the statment and both must be true 
if (userLoggedIn && debitCard){
    console.log("Allowed to buy products");
}
// || is used for using multiple condition in the statment and one of must be true  
if (loggedInFromGoogle || loggedInfromEmail){
    console.log("User logged In.");
    
}


