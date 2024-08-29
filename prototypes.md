# What is a Prototype?
In JavaScript, every object has an internal property called [[Prototype]], which can be another object or null. 
This [[Prototype]] property is what allows objects to inherit properties and methods from other objects. In simpler terms, a prototype is an object from which other objects inherit properties.

When you try to access a property or method on an object, JavaScript will first look for it on the object itself. If it doesn't find it, it will then look up the prototype chain, starting from the object's [[Prototype]] and moving up until it either finds the property/method or reaches null.

# Prototypes and Inheritance
JavaScript is often described as a "prototype-based" language because it doesn't have classical inheritance (like in Java or C#). Instead, it uses prototypes for inheritance.

# Creating Prototypes
There are a few ways to work with prototypes in JavaScript:

## Using Constructor Functions:

When you create an object using a constructor function, the object's prototype is set to the constructor's prototype property.

```js	
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const alice = new Person('Alice', 30);
alice.greet(); // Output: Hello, my name is Alice and I am 30 years old.
```
Here, Person.prototype is the prototype of all instances created by the Person constructor. The greet method is added to the prototype, meaning all Person objects can access it.

## Using Object.create:
```Object.create``` allows you to create a new object with a specified prototype`:

```js
const personPrototype = {
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

const bob = Object.create(personPrototype);
bob.name = 'Bob';
bob.age = 25;
bob.greet(); // Output: Hello, my name is Bob and I am 25 years old.
```

## Class Syntax in ES6 (and TypeScript):
In modern JavaScript, you can also use the class syntax, which is syntactic sugar over the existing prototype-based system.

```js
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const charlie = new Person('Charlie', 28);
charlie.greet(); // Output: Hello, my name is Charlie and I am 28 years old.
```

# Prototype Chain
The prototype chain is the mechanism by which properties and methods are inherited. If an object tries to access a property or method and it doesn't exist on the object itself, JavaScript will look up the chain, searching through the object's prototype, then the prototype's prototype, and so on, until it finds the property or reaches the end of the chain (null).

Example:
```js
console.log(alice.toString()); 
```
```toString()``` is not defined on alice, but JavaScript finds it on Object.prototype, which is part of the prototype chain for all objects created from the Person constructor.

# Important Points

Every function in JavaScript has a prototype property that is used to build the **[[Prototype]]** of instances created using that function as a constructor.

The prototype itself is an object and can have its own **[[Prototype]]**, creating a chain of inheritance.

You can modify the prototype at runtime, which will affect all instances that inherit from that prototype.