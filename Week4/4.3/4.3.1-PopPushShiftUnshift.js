const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let pop1 = nums.pop();
let pop2 = nums.pop();
console.log(nums);
// remove each of the first two items with shift(), saving each item to a variable
let shift1 = nums.shift();
let shift2 = nums.shift();
console.log(nums);
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(shift2, shift1);
nums.unshift(pop1, pop2);
console.log(nums);
