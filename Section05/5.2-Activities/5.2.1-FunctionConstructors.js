// create an object literal
// include a method that uses "this"
const person = {
    age: 26,
    name: "jeff",

    myName() {
        console.log(`my name is ${this.name}`);
    },

    party() {
      return "Dance, dance, dance!";
    },
  };
  
// create a function in the global scope that prints "this"
function logDefaultContext() {
    console.log("this is: ", this);
}

person.myName();
logDefaultContext();