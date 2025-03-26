// now lets try the object
const myObj = {
    js : "javaScript",
    rb : "ruby",
    cpp : "C++",
    swift : "swift by apple"
}
for (const key in myObj) {
    //console.log(key);// Will print all the keys of obj
    //console.log(myObj[key]); // now we get values and keys 
    console.log(`${key} shortcut for ${myObj}`);
        
}

// lets try with the array 
const programming = ["js","rb","py","java", "cpp"]
for (const key in programming) {
    //console.log(key);//will just give keys numbers not like for of 
    console.log(programming[key]);//will give values
}

// checking can we use for in loop in map 
const map = new Map()
map.set('Pk',"Pakistan")
map.set('Uk',"United Kingdom")
map.set('USA',"United States of America")
//console.log(map);// map used for unique values and same order 
for (const key in map) {
    console.log(key);//nothing will print because map is not iteratable  
}


