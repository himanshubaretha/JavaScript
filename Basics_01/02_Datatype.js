// Primitive
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (unchanged)

// Non-Primitive
let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name); // Bob (changed, same reference)
