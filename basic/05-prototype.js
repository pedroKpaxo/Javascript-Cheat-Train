// Creating prototype object using constructor function

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const alice = new Person('Alice', 30);
alice.greet(); // Output: Hello, my name is Alice and I am 30 years old.

// Using Object.create to create prototype object

const personPrototype = {
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

const bob = Object.create(personPrototype);
bob.name = 'Bob';
bob.age = 25;
bob.greet(); // Output: Hello, my name is Bob and I am 25 years old.

// Using ES6 class syntax

class Person {
    name
    age

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const charlie = new Person('Charlie', 28);
charlie.greet(); // Output: Hello, my name is Charlie and I am 28 years old.
