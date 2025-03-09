const accountId = 123334
let accountEmail = "muazam@google.com"
var accountPassword = "12323"
accountCity = "Karak"

//lets print those values 

// console.log(accountId);
// console.log(accountCity);

//now lets try to change the values of constant
//accountId = 223 not allowed 


//we can change 'let', 'var' and normal assignment value easily
accountEmail = "Muazamkhan@google.com"
//Prefer not to use var while working in js because of issues in block and fuctional scope
accountPassword = "343"
// 
accountCity = "Kohat"
// 
console.log( accountEmail, accountPassword, accountCity);

// //IF you want data in table form
// console.table( accountId,accountEmail, accountPassword, accountCity);