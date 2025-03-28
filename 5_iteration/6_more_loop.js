const coding = ["js", "ruby", "pyhton", "python", "cpp"]

//what if i want to store it in the variable 
// coding.forEach( (item) =>{
//     console.log(item);   
// } )


// const values = coding.forEach( (item) =>{
//     console.log(item); 
// } )
// console.log(values);//undefined if not used return in the scope


// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (nums) => nums > 5 )//callback
// console.log(newNums);
// using filter we get the call back func and it return the values in variable for each loop doesn't.

//another way of doing

const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter( (nums) => {
    return nums > 5 //here we get empty array if we not use the return keyword
} )//callback
console.log(newNums);

//lets use for each here

const newnums = []
myNums.forEach((num)=>{
    if (num>4){
        newnums.push(num)
    }// same result 
})
console.log(newNums);


// examples for filters
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')//get the book with genre is history

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"//giving the another condition as well 
})
  console.log(userBooks);