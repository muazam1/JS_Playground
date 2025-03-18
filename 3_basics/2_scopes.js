// let a = 10
// const b = 20
// var c = 30 
// reason for using different 
// {} curly braces is the scope 

//suppose another programmer writes
var c = 300// anything outside is the global scope
//global value is available in the scope
// but the value in scope is not available in the global

if (true){// the scope of if is between the curly braces only
    //scope
    let a = 10
    const b = 20
    var c = 30 
}//anything in the if is the block scope 
// console.log(a);
// console.log(b);
console.log(c);
// now it will not return values in the a and b it because it is in the if statments. 
// but in c it will give the give the value 30
// their is problem.


// explanation
let a = 300 
if (true){
    let a = 10
    const b = 20
    console.log("Inner : ", a);// 10 // bc it is in the blockscope 
}
console.log(a); // 300 because it is in global scope


// Nested Scope

function one(){
    const username  = "Muazam"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
   // console.log(website);// error
    two()//two can acess one bc for two one is like global 
}
one()//one cannot acess from two bc it is in blockscope for one

// we can do this in if else 
if (true){
    const username = "Muazam"
    if (username === "Muazam"){
        const website = "Youtube"
        console.log(username + website);
    }
   // console.log(website);//error 
   }
//console.log(username);//error

//+++++++++++++++++++++interesting+++++++
console.log(addone(5));//6
function addone(num){
    return num + 1
}
addone(5) //no error here 

//console.log(addTwo());// error bc it is expresion 
const addTwo = function(num){//same as function but sometime it is known as expresion
    return num + 2
}
addTwo(5)//no error