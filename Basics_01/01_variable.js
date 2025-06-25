// Now first we learn type of variable then we use 

// const declares block-scoped, read-only variables. It must be initialized and cannot be updated or re-declared.
const acc = 52

// let is used to declare block-scoped variables that can be updated but not re-declared within the same scope.
let accEmail = "himanshubaretha@gmail.com"

// var is the oldest way to declare variables in JavaScript. It is function-scoped and can be re-declared or updated.
var accPwd = "12345"
accCity = "jaipur"

// we try for change
accEmail = "hb@gmai.com"
accPwd = "89595987"
accCity = "Indore"

console.table([acc,accEmail,accPwd,accCity])