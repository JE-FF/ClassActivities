// create an Array using an Array literal
const arrExample = [15, 22, 10, 18];
let arrExample2 = [1, 2, 3, 4];
// access the 1st item in the Array
arrExample[0];
// access the last item in the Array
arrExample[3];
// print the length of the Array
console.log(arrExample.length);
// use the length property to access the last item in the Array
arrExample[arrExample.length - 1];
// with for...of, loop over the Array, modify the value and add to a different Array
for (let i of arrExample2) {
    arrExample2[i - 1] = arrExample[i - 1] + 1;
    console.log(arrExample2[i - 1]);
}