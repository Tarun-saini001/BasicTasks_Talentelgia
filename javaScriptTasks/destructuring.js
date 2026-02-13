// Arrays Destructuring---------------------------------------------------------------------------------

// const colors = ["red", "green", "blue"];
// const [first, second, third] = colors;
// console.log(first);  // Output: "red"

//Use commas to skip elements you don't need
// const numbers = [1, 2, 3, 4];
// const [first, , third] = numbers;
// console.log(first, third); // Output: 1 3


// Objects Destructuring -------------------------------------------------------------------------------


//Variable names must match the object's property names

// const person = { Name: "Tarun", Age: 20 };
// const { Name, Age } = person;
// console.log(Name); // Output: "Tarun"
// console.log(Age);  // Output: 2
// 0

// Use a colon : to assign a property to a new variable name.

// const user = { Name: "Tarun", Age: 20 };
// const { Name: userName, Age: userAge } = user;
// console.log(userName); // Output: "Tarun"

// Collect the remaining properties into a new object.

const person = { name: "Tarun", address: "Haryana", job: "Mernstack" };
const { name, ...others } = person;
console.log(name);    // Output: Tarun
console.log(others);  // Output: {  address: "Haryana", job: "Mernstack" }


