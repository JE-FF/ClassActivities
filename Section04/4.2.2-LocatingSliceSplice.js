const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
console.log(`First index of a = ${arr.indexOf("a")}.`);
console.log(`First index of b = ${arr.indexOf("b")}.`);
console.log(`First index of c = ${arr.indexOf("c")}.\n`);

// find the last index of "a", "b", and "c"
console.log(`Last index of a = ${arr.lastIndexOf("a")}.`);
console.log(`Last index of b = ${arr.lastIndexOf("b")}.`);
console.log(`Last index of c = ${arr.lastIndexOf("c")}.\n`);

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
while (arr.indexOf("a") !== arr.lastIndexOf("a")) {
    arr.splice(arr.lastIndexOf("a"), 1);
}

console.log(arr);