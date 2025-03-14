const marvelHeros = ["thor", "ironman", "spiderman"]
const dcheros = ["superman", "flash", "batman"]

marvelHeros.push(dcheros);//push does merging 

console.log(marvelHeros);
console.log(marvelHeros[3][1]);//3 itself is a array of mheros so do this instead //flash

//we can use concate 
//concate combines two or more arrays and return new array 
const allheros = marvelHeros.concat(dcheros)
console.log(allheros);

//we can use spread as well 
const all_new_heros = [...marvelHeros, ...dcheros]
console.log(all_new_heros);

const anotherArr = [1,2,3,[4,5,6],7,[6,7[4,5]],]
const real_another_array = anotherArr.flat(Infinity);//MAKING ALL THE ARRAY FLAT
console.log(real_another_array);


//using array in scraping
console.log(Array.isArray("Muazam"));
console.log(Array.from("Muazam"));
console.log(Array.from({name : "Muazam"}));//intersting case in array // will give empty array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
