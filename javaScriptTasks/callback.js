// A callback function is a function passed as an argument into another function.

// Asynchronous Callbacks : Asynchronous callbacks are executed at a later time, allowing the
//                          main program to continue running without waiting.

// // A function to display the result
// function myDisplayer(some) {
//     console.log("The result is: " + some);
// }

// // performs a calculation and then calls a callback
// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     // Calling the callback function
//     myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer); // Output: The result is: 10



// Synchronous Callbacks : Synchronous Callbacks are executed immediately within the outer 
//                         function, blocking further operations until completion.



console.log("Start");

setTimeout(function () {
    console.log("Inside setTimeout");
}, 2000);

console.log("End");