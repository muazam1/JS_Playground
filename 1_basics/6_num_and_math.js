const score = 400
console.log(typeof(score));//autmatically detect as number

const balance = new Number(100);
console.log(balance);//[Number: 100]
// now we can acess the prototype of the number by adding dot(.) at the end of variable as well same like string 
// now using tostring function
console.log(balance.toString());//100//after its converstion to string we get all prototype of string as well.Using dot(.)after tostring().<=.
console.log(balance.toString().length);//3 
//
//using tofixed 
//usually used for precision value like the digits after the decimal point.
console.log(balance.toFixed(2));//100.00

const otherNumber = 234.2322323423
console.log(otherNumber.toFixed(2));//234.23

//using toprecision 
//used for values as a whole.
const nums = 32.3424
console.log(nums.toPrecision(3));//32.3
console.log(nums.toPrecision(2));//32
console.log(nums.toPrecision(4));//32.34

//using of tolocalString in js
//it will give commas in between the the zeros
const numberss = 2000000000
console.log(numberss.toLocaleString());//2,000,000,000


//++++++++++++++++ Maths +++++++++++++++++++++++++
//Maths in js comes in default 
console.log(Math); // object 
//absolute value abs
//all negative will be positive.And positive remains positive
console.log(Math.abs(-4));//4

//simple round 
// for roundof the decimal numbers
console.log(Math.round(4.66));//5

//ceiling 
//means if its greater in decimal it will choose the next num
console.log(Math.ceil(4.2));//5

//floor
//mean it will it will choose the floor value.
console.log(Math.floor(4.9));//4

//using min
//check the min value in array 
console.log(Math.min(43,44,22,55,77,12));//12

//using max
//check the max value in array 
console.log(Math.max(43,44,22,55,77,12));//77

// using random 
// its value will always comes in between 0 and 1.
// and will be a random values all the time.
console.log(Math.random());//betwee 0 and 1
console.log((Math.random()*10)+1);//must be greater than one


const max = 20
const min = 10

console.log(Math.floor(Math.random()*(max-min +1)+min));//values will be always between 10 to 20











