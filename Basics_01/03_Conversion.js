let score = 33

console.log(typeof score)
console.log(typeof(score))

let valueIn = Number(score)
console.log(typeof valueIn)
console.log(valueIn);


let a = 1
let b = 0
let c = Boolean(a)
let d = Boolean(b)
console.log(a,b,c,d);

// "33" => 33
//  "33hello" => NaN
// true =>1; false=>0;


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn,isLoggedIn)

// 1 => true; 0 => false;
// "hello" => true

let number = 33

let string = String(number)

console.log(number,string)




// ###################################### Operations ######################################

let value = 3
for(let i=0;i<value;i++){
    console.log(value)
}
 