/* Arrow functions in JavaScript provide a concise syntax for writing function expressions using 
 the => notation. They were introduced in ES6 and are a popular alternative to traditional 
 functions, particularly for short, anonymous functions and callbacks. */

 // Difference :  arrow function dont have there own "this" the inherit "this" from surroundings

//  const square = x => x * x; // single parameter can be used without parantheses
// console.log(square(5)); // Output: 25

const add = (a, b) => a + b; // parantheses required
console.log(add(2, 5)); // Output: 7

