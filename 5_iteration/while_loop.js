// while loop 

// structure
// while (condition) {
    
// }

let index = 0 
while (index<=10){
    console.log(`value of index is ${index}`);
    index = index +2
    
}

// array in while loop
let myArray = ["Flash", "Superman","Batman"]
let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1 // or arr++
    
}

// now
// do while loop 
let score = 1 
do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);
// now if the score is 11 or greater than 10
let scores = 11 
do {
    console.log(`scores is ${score}`);// now it will print only that and the condition is false so loop will leave it 
    scores++
} while (scores <= 10);
