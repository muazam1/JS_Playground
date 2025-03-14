// objects

// singleton  // creates while using constructors  

//Object.create      // Constructor method in which singleton create

//using symbol and then adding as a key in objects
const mySym = Symbol("Key1");


// objects litrals
const JsUser = {
    name : "Muazam",
    "full Name": "Muazam Qayyum",
    [mySym] : "mykey1",//syntax of symbol in objects
    age : 20,
    loction : "Karak",
    email : "muazam@google.com",
    isloggedIn : false,
    lastLoginDays : ["Monday","Friday"],
}
// Accessing the objects 
console.log(JsUser.email);
console.log(JsUser["email"]);
// both are necessary to understand

//now we cannot acess full name by adding dot(.)
console.log(JsUser["full Name"]);
//console.log(JsUser.full name);//will throw an error

console.log(JsUser [mySym]);//syntax of symbol is different 

// changing objects values
JsUser.email = "muazam@oulook"
//we can freeze as value as well that no one can change
//Object.freeze(JsUser) // no values can change after that

JsUser.greeting = function(){
    console.log("Hello js user");
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`my name is ${this.name}`);
}
console.log(JsUser.greeting2());
