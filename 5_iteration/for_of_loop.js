// mainly array specific loop 

// for of loop

const arr = [1,2,3,4,5]
for (const num of arr) {//not must for objects 
    console.log(num);
    
}
const greeting = "Hello world!"
for (const greet of greeting) {
    console.log(`Each charaters ${greet}`);
    
}

// Maps

const map = new Map()
map.set('Pk',"Pakistan")
map.set('Uk',"United Kingdom")
map.set('USA',"United States of America")
console.log(map);// map used for unique values and same order 
for (const [key,value] of map) {
    //console.log(key);//full values in array 
    console.log(key, ":-" , value);
    
}
// const myObj = {
//     "Game1" : "NFS",
//     "Game2" : "GTA"
// }
// for (const [key, value] of myObj) {//myObj is not iteratable
//     console.log(key, ":-", value);
    
// }

