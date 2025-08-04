//  Premative

// =>String : ""
// =>Number : 2
// =>Boolean : true & False
// =>Null
// =>undefined
// =>Symbol
// =>BigInt

const score = 100

const scoreValue = 100.2

const isLogged = false
const temp = null
let Email

const id = Symbol('123')
const other = Symbol('123')

console.log(id === other)


// Non-Primitive

// =>Array : [22,55,55]
const hero = ["Shaktiman","naagraj","doga"]
// =>Objects
let myobj = {
    name : "himanshu",
    age : 23,
}
// =>Functions
const myFunc = function(){
    console.log("Hello World") 
}

let hello = [score,scoreValue,isLogged,temp,Email,id,other]

// for (let i=0;i<hello.length;i++){
//     console.log(typeof i)
// }

console.log(typeof myFunc)
console.log(typeof scoreValue)
console.log(typeof isLogged)
console.log(typeof temp)
console.log(typeof id)



// Stack (Primitive) & Heap (non-Primitive)

