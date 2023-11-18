// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let name = "Cory Taylor";
let number = 8;
let youngestChild = false;
let undefinedVar;
let nullVar = null;
// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(name);
console.log(number);
console.log(youngestChild);
console.log(undefinedVar);
console.log(nullVar);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
// eslint-disable-next-line no-unused-vars
let tempLit = "My name is ${name}, and my favorite number is ${number}.";
// reassign the value of the variable that references "null"
nullVar = "not null";
// print the value and its type
console.log(nullVar);
// print a variable that causes a ReferenceError
referenceError;
// alter the previous line to no longer cause a ReferenceError
let referenceError;
