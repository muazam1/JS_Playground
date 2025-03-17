// // functions 

// // console.log("m");
// // console.log("u");
// // console.log("a");
// // console.log("z");
// // console.log("a");
// // console.log("m");
// // we make it simple by using functions 
// function sayMyName(){
//     console.log("m");
//     console.log("u");
//     console.log("a");
//     console.log("z");
//     console.log("a");
//     console.log("m");
// }

// // now the refrence of funtion is its name 
// //sayMyName // => refrence only  
// //sayMyName() // bracket is used to execute the function 

// // addition function 
// function addTwoNumber (number1 , number2){//number1 and number2 here is parameter  
//     console.log( number1 + number2)
// }
// //addTwoNumber() // not a number
// addTwoNumber(3, 4) // 7 // 3 and 4 here are arguments 

// //we can store in variable as well
// const result = addTwoNumber(3, 5)
// console.log('Result: ',result);//will throw undefined


// function addTwoNumber (number1 , number2){//number1 and number2 here is parameter  
//     // let result = number1 + number2
//     // return result // we can use direct method as well
//     return number1 + number2

//     console.log("muazam");// after return nothing got executed
    
// }
// const resuult = addTwoNumber(3, 5)
// console.log('Result: ',resuult);//8


// // different methods for parameters and arguments 

// function loginUserMessage (username/* = "sam" we can use default value as well for not going into false*/){
//     // we can use condition for this if the result is true then execute the function 
//     // if can be used as
//     // if (!username){ or below
//     if (username === undefined){
//         console.log("Please enter username");
//         return 
 
//     }
//     return `${username} just logged in`
// }
// loginUserMessage("Muazam") // nothing print out 
// console.log(loginUserMessage("Muazam")) // now we have output
// // suppose
// console.log(loginUserMessage())//if nothing passed we get undefined // after if we will please enter name



// in shopping cart user add the products you don't know how much he will add 
function calculateCartPrice (num1){
    //we want to return the parameters
    return num1
}
console.log(calculateCartPrice(2))//2
// Now if user add two or three item 
console.log(calculateCartPrice(200, 300, 400));// you only get first item details

// to solve the above problem we use rest operater here 
function calculateCartsPrice (...num1){// (...) is know as rest and spread depend on its use case 
    return num1
    }
console.log(calculateCartsPrice(200, 300, 400));// now we get array here and accept every number

// now we have another case 
function calculateCartssPrice (val1, val2, ...num1){// (...) is know as rest and spread depend on its use case 
    return num1
    }
console.log(calculateCartssPrice(200, 300, 400,3000));// now we get only 400 and 3000 bc first two is different value here


// how to pass objects in function

const user = {
    username : "Muazam",
    price : 199
}
function handleObjects(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObjects(user)// pass object here
// we can object like that as well
handleObjects({
    username : "Muazam",
    price : 399
})

// now how to pass arrays in functions 
const myNewArray = [200,400,500,499]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
// we can do this by 
console.log(returnSecondValue([200,400, 500, 600]));

