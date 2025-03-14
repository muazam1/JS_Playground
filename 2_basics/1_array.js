// arrays

//declaration of array
const myArr = [1,3,4,5,2,6]//elements can be different as well
const heros = ["superman", "batman"]
const myArr2 = new Array(1,2,3,4,5,6);
console.log(myArr[2]);//accessing values by index starts from zero

//methods in arrays
myArr.push(7);//adding new element 
myArr.push(8);
myArr.push(9);
myArr.pop(); // it will always remove the last element in the array

myArr.unshift(9); // will insert it in the start. but we have to shift all the 
// values of array for it. hence it is not useful 
myArr.shift()//removes the unshift value

console.log(myArr.includes(9));//true or false
console.log(myArr.indexOf(10));//-1 means no index

const newArr = myArr.join()//binds the array and also change it to string as well
console.log(newArr);
console.log(typeof (newArr));//string
console.log(myArr);


// slice, splice
console.log("A ",myArr);
const myn1 = myArr.slice(1,3)//here start from 1 index and 3 will not include. 
console.log(myn1);
console.log("B ", myArr);

// in splice the portion is get separated from array and array gets changed
const myn2 = myArr.splice(1,3)//here start from 1 index and 3 will be included here
console.log("C ", myArr);

console.log(myn2);



