//either true or false
// console.log(2 > 3);//ouput will be in boolean
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//problem
//Always avoid these type of comparion because it is more confusing and difficult
console.log("2" > 1);//true it automatically convert the string to number
console.log("02" < 1);//false

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true
console.log(null <= 0);//true
//and undefined gives false with all

// Strict check  (===)
console.log("2" == 2);//true
console.log("2"=== 2); //false it === check datatype as well











