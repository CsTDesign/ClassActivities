// create a constant variable (const)
const name = "Cory Taylor";

// create a variable that can be reassigned (let)
let numberVar = 20;

// create three variables and assign them values of different data types (=)
let variable = 1;
let secondVar = "Hello World";
let thirdVar = true;

// print the types of two variables that reference two different data types (typeof)
// TIP: console.log() prints a value in the console/terminal
console.log(typeof variable);
console.log(typeof secondVar);

// change the value referenced by a variable (dynamic typing)
numberVar = "20";

// print the type of the variable you just changed (typeof)
console.log(typeof numberVar);

// create variables and give them values to complete the sentences that will print  below.
// Which variables need to be created?
// What type of data needs to go in each variable?
let myName = "Cory Taylor";
let lang = "JavaScript";
let numWeeks = 4;
let myBoolean = false;
console.log(
  "Hello, my name is " +
    myName +
    ", and I am learning " +
    lang +
    ". I have been practicing for only " +
    numWeeks +
    " weeks, so my status as a master is: " +
    myBoolean +
    "."
);
