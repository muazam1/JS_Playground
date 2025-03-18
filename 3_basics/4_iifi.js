// Imediately Invoked Function Expression (IIFI)

// sometime we get polluted data from global scope 
// we used iifi to remove that global space pollutions 

// suppose we need to invoke this function imediately
// wrap the funtion in the paranthesis
(function one (){
    // this is named iifi 
console.log("DB Connected"); 
})();// imediate execution done now to stop it you must use semicolon

( (name) => {
    // unnamed iifi
    console.log(`DB Connected Two ${name}`);
    
} )("Muazam");

