/*a class serves as a blueprint for creating objects, while a constructor is a special method
 within a class used to initialize the properties of a new object instance.
*/


class Person {
  // The constructor method initializes properties when a new object is created.
  constructor(name, age) {
    this.name = name; // 'this' refers to the new object instance
    this.age = age;
  }

  // A regular method 
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating an instance of the Person class
const Tarun = new Person("Tarun", 20);

// Accessing properties and methods of the object
console.log(Tarun.name); // Output: John
Tarun.sayHello();        // Output: Hello, my name is Tarun and I am 20 years old.
