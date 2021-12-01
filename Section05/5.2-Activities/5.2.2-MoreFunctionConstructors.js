// create a function constructor that works as a template for an Animal
// include properties for name, type, weight, etc.
function Animal(name, type, weight, sound) {
    this.name = name;
    this.type = type;
    this.weight = weight;
    this.sound = sound;
}
// create a new instance on an Animal
const cat = new Animal("fluffy", "cat", "lightweight", "meow");
const cow = new Animal("Bessy", "cow", "Heavy", "Moo");
// add methods to the Animal prototype
Animal.prototype.greet = function () {
    return `${this.sound} ${this.sound} ${this.sound}`;
}
// attach a method directly to the Animal instance that "overwrites" a prototype method
cat.greet = function() {
    return `Hissssss`;
}

console.log(cat.greet());
console.log(cow.greet());