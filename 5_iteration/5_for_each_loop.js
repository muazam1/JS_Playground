// for each loop

const coding = ["js", "ruby", "pyhton", "python", "cpp"]

//basic structure
coding.forEach( function (item) {
    console.log(item);
    
} )

//another variation

const lng = ["js","python","ruby","swift"]

lng.forEach( (val) => {
    console.log(val);
    
} )

function printMe(item){
    console.log(item);
}
lng.forEach(printMe)//direct func 

lng.forEach((val,index,arr)=>{//here we have access of index and array and also values
    console.log(val,index,arr);
    
})

// ["","",""]
// [{},{},{}]


const mycoding = [
    {
        languageName : "javascript",
        languagefilename : "js"
    },
    {
        languageName : "C++",
        languagefilename :"cpp"
    },
    {
        languageName : "python",
        languagefilename : "py"
    }
]
//lets do  iteration here
mycoding.forEach((item)=>{
    //here we have the acess of obj as item
    console.log(item.languageName);
})
