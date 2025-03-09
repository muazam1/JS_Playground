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






