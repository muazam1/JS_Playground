// reducer
// here we got an accumulator it is used as variable 
// in the accumulator the intial value is the 0 
// then after the itration it got the intial value from arr 
// lets see in the example

const myNums =  [1,2,3]

const myTotal = myNums.reduce(
    (accumulator,currentValue) => {
        console.log(`accumulator ${accumulator}, current value ${currentValue}`);
        // just to see the what is stored here
        // we get
        // accumulator 0, current value 1
        // accumulator 1, current value 2
        // accumulator 3, current value 3
        return accumulator + currentValue
    }, 0
)
console.log(myTotal);

// another eg
const shoppingCart = [
    {
        itemName : "Js course",
        price : 999
    },
    {
        itemName : "Js course",
        price : 999
    },
    {
        itemName : "Js course",
        price : 999
    },
    {
        itemName : "flutter course",
        price : 459
    },
    {
        itemName : "web course",
        price : 9999
    },
    {
        itemName : "app dev course",
        price : 5999
    }  
]
const wholePrice = shoppingCart.reduce((accumulator,item)=>accumulator + item.price,0)
console.log(wholePrice);//full bill of the courses to pay
