// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function add(param1, param2) {
    console.log(param1);
    console.log(param2);
    return param1 + param2;
}
// invoke the function and pass in two numbers
add(1, 2);
// invoke the function and pass in more than two numbers
add(1, 2, 3);
// invoke the function and pass in only one number
add(1);
// change the function to set default values for the parameters
function addDefault(param1 = 10, param2 = 2) {
    console.log(param1);
    console.log(param2);
    return param1 + param2;
}
// again, invoke the function and pass in only one number
addDefault(1);
// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function addRest(param1, ...param2) {
    console.log(param1);
    console.log(param2);
    return param1 + param2;
}
// again, invoke the function and pass in more than two numbers
addRest(1, 2, 3);
