// bracket and dot notation
const key = "1";
const obj = {
  key: console.log("the key is 'key'"),
  1: console.log("the key is 1")
};

// what will the following lines print?
obj[key]; // the key is 'key'
obj.key; // "1"
obj["key"]; // the key is 'key'

// Create an object with at least four properties, each with a different data type.
// Name one of the four properties "collection" and set its value to an Array or Object.
const myObj = {
  name: "Cory Taylor",
  age: 31,
  isDiabetic: true,
  collection: ["Fallout 4", "OpenRCT2", "Car Mechanic Simulator 2021"]
};
// Access a value in the "collection" property
myObj[3];
// Practice with nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"];

// Add a method to an Object
obj.method = function() {
  return "the key is 'method' and its call refers to a function";
};

// Fill in your favorite movie, number and color below
obj["favorites"] = {
  movie: "Sausage Party",
  number: 8,
  color: "green"
};

// Add a list (a.k.a array) to an Object
obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];

// Using the 'for...in' loop to iterate over 'obj' object ...
// how many lines will the following statement print?
// what do you expect to see on each line?
for (let key in keys) {
  console.log(`Key is: ${key} and value is: ${obj[0]}`);
}

// Use a template literal to print a sentence about your favorite things
console.log(
  `I laugh out loud anytime I watch ${obj[3][0]}, my favorite number is ${obj[3][1]}, and I always loved the color ${obj[3][2]}.`
);
// Access the values "b", 4, and 6 from obj.list
obj.list[1][(4)[1]][(6)[1]];
