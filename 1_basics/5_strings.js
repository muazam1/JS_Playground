// Declaration of String
const name = "Muazam"
const age = 20
// Simple concatination
// This syntax works fine but it is oudated in modren date
//console.log(name + age + "Value");//Muazam20Value
//Use backticks instead because we can inject varible into the string with the help of it.
//it is known as string interpolation
console.log(`My name is ${name} and i am ${age} years old.`)

// 2nd way of decalaration
const gameName = new String("FreeFire");

console.log(gameName[0]);// F // By accessing the key value pair.
console.log(gameName.__proto__);// After adding the dot (.) we can acess the prototype
// All prototype are Functions. 
//same goes for length after applying dot we can acesss its prototype.
console.log(gameName.length);// 8 // length = 8
//accessing the prototype section 
console.log(gameName.toLocaleUpperCase());//FREEFIRE // uses a function 
console.log(gameName.toLowerCase());//freefire

console.log(gameName.charAt(2));//pass the index number // e
console.log(gameName.indexOf("e"));//we will the index // 2

// now for making the substring 
const newString = gameName.substring(0,4);//end value itself not count 
console.log(newString);// ouput => Free 

// now for slicing the string 
const part1 = gameName.slice(-3);  // "ire" (last 3 characters)
console.log(part1);
const part2 = gameName.slice(-6, -3); // "eFi" (middle part)
console.log(part2);
const part3 = gameName.slice(0, -5); // "Fre" (first 3 characters)
console.log(part3);

// now using trim 
// sometimes we get a string with a lot spaces 
const newStringOne = "        Muazam       ";
console.log(newStringOne.trim());// it will ouput without spaces //Muazam

// now using of replace in string 
 
const url = "https://muazam.com/muazam%20qayyum"//we want to replace %20 
console.log(url.replace("%20","-"));//https://muazam.com/muazam-qayyum
// we can search in string as well
console.log(url.includes("muazam"));//true

//using of Split to split the string as Array on the basis of certain spaces or dashes or any other.
const newerString = "Muazam-qayyum-khan"//we want arrays of the string on the basis of (-) dash between them 
console.log(newerString.split("-"));//['Muazam', 'qayyum', 'khan']

// note
const a = new String("Hello world"); // a === "Hello world" is false
const b = String("Hello world"); // b === "Hello world" is true
a instanceof String; // is true
b instanceof String; // is false
typeof a; // "object"
typeof b; // "string"


// For more : https://developer.mozilla.org/en-US/







