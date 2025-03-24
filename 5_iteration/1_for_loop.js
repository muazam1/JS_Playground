// for loop

for (let i = 0; i <= 10; i++) { // first one is variable and then condition if condition is true code will be
//  executed and then index ++ increment  the value of variable
    const element = i;
    console.log(element);
  
}
//console.log(element);// no access outside the scope // error

// lets use condition as well in the loop
for (j = 0; j<=10; j++){
    const element = j;
    if (element == 5){
        console.log("5 is best number");
        
    }
    console.log(element);
    
}

// using loop in loop 

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value ${i}`);
    
    for (let j = 0; j <= 10; j++) {
       // console.log(`Inner loop value ${j} and inner loop ${i}`); 
       console.log(i + "*" + j + "=" + i*j );// for printing the tables from 0 to 10
       
        
    }
    
}

// let use array in the loop now
let myArray = ["Flash", "batman", "Superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// additional keywords 
// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log("Detected 5");
        break  // will break the loop after 5
    }
     console.log(`value of i is ${index}`);
     
    
}

// continue

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log("Detected 5");
        continue  // Dectected 5 // skip 5 and then will continue the execution
    }
     console.log(`value of i is ${index}`);
     
}