const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
pop1 = nums.pop();
pop2 = nums.pop();
// remove each of the first two items with shift(), saving each item to a variable
shift1 = nums.shift();
shift2 = nums.shift();
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.unshift(pop1, pop2);
nums.push(shift1, shift2);

console.log(nums);
