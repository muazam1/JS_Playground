let score = "22abs"
let score2 = "33"

console.log(typeof score);
console.log(typeof (score));

console.log(typeof score2);
console.log(typeof (score2));

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber);//NaN not a number

let valueInNumber2 = Number(score2)
console.log(typeof(valueInNumber2));
console.log(valueInNumber2);

// "33" => 33 
// "33abc" => NaN (not a number)
// true => 1 and false => 0
// null => 0
// undefined => NaN

// lets change boolean

let isloggedIn = 1

let booleanisloggedIn = Boolean(isloggedIn)
console.log(typeof(booleanisloggedIn));
console.log(booleanisloggedIn);

// 1 => true and 0 => false 
// "" => false and "some" => true

// number to string
let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof(stringNumber));
console.log(stringNumber);

//*************Operations ******************* */

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2); plus
// console.log(2-2);minus
// console.log(2*2);mutiply
// console.log(2**2);power
// console.log(2/2);divide
// console.log(2%3);remainder

let str1 = "hello muazam"
let str2 = "how are you"
//simple string concatenation
let str3 = str1 + str2
console.log(str3);

//string plus number 
// console.log("1" + 2);//output 12
// console.log(1 + "2");//output 12
// console.log("1" + 2 + 2);//ouput 122
// console.log(1 + 2 + "2");//ouput 32

//For boolean 
console.log(+true); // ouput 1
console.log(+"");  //output 0


//not a preferred way
let num1, num2, num3
num1 = num2 = num3 = 2 + 2

// 
let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

// x++ and ++x prefix and postfix difference 
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
















