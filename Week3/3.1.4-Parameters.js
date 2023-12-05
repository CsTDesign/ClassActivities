// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function twoParams(param1, param2) {
  console.log(param1, param2);
  return param1 + param2;
}
// invoke the function and pass in two numbers
twoParams(1, 2);
// invoke the function and pass in more than two numbers
twoParams(1, 2, 3, 4);
// invoke the function and pass in only one number
twoParams(1);
// change the function to set default values for the parameters
function twoDefaultParams(param1 = "b", param2 = "a") {
  console.log(param1, param2);
  return param1 + param2;
}
// again, invoke the function and pass in only one number
console.log("Without arguments: " + twoDefaultParams());
console.log("With arguments: " + twoDefaultParams(1, 2));
// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function restParams(param1, ...restParam) {
  console.log(param1, restParam);
  return param1 + restParam;
}
// again, invoke the function and pass in more than two numbers
restParams(1, 2, 3);
