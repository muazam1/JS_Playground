// map 
const myNumber = [1,2,3,4,5,6,7,8,9,10]
//suppose we want to add 10 to each the number in the array 
const newNums = myNumber.map((num)=>{return num + 10})
//if you use curly braces then you must use the return keyword  
console.log(newNums);

// chaining

// first do the mutiplication with 10 and then add 1 to all
// by using chaining of map here
const numbers = myNumber
                .map((no)=>no * 10)
                .map((no)=>no +1)
                // this no is now diffrent from the above 
                //it will get the values of another map here
                // after that we can use other different chaining as well
                .filter((num)=>num>=40)

console.log(numbers);
