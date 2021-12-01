// refactor your Animal function constructor and methods to use the class keyword
class Animal {
    constructor(name, type, weight, sound) {
        this.name = name;
        this.type = type;
        this.weight = weight;
        this.sound = sound;
    }
    greet = () => {
        return `I am ${this.name}, ${this.sound} ${this.sound} ${this.sound}.`;
    }
}

const cat = new Animal("Fluffy", "cat", "lightweight", "meow");

// extend the Animal class with a type of animal
// add some unique methods and properties to the class extension
class Predator extends Animal {
    constructor(name, type, weight, sound, diet) {
        super(name, type, weight, sound);
        this.diet = diet;
    }
    greet = () => {
        return `I am ${this.name}, I eat ${this.diet}. Chomp chomp.`;
    }
}

// create an instance of the class extension and call one of its methods
const bigCat = new Predator("Puma", "cat", "heavy", "growl", "all creatures great and small");

console.log(cat.greet());
console.log(bigCat.greet());