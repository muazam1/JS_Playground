// Date
let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());

//type of myDate
console.log(typeof (myDate));//object

//for decalaring specific date we have different sytax given below 
// let myCreatedDate = new Date(2025,0,23);//month starts from 0 in js
// let myCreatedDate = new Date("2023-01-23");
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toString());
console.log(myCreatedDate.toLocaleDateString());

// Time Stamp 

let myTimeStamp  = Date.now()
console.log(myTimeStamp);//millisecond
//again call myCreatedDate
console.log(myCreatedDate.getTime());
// now changing it to the seconds
console.log(Math.floor(Date.now()/1000));


//
let newDates = new Date()
console.log(newDates);
//if we just want day or month or year we can simply add dot(.) and then get
console.log(newDates.getDay());
console.log(newDates.getMonth()+1);// month start from zero so we can add 1. 

//customizing the locale string 
newDates.toLocaleString('defaul', {
    weekday : 'long',
})





