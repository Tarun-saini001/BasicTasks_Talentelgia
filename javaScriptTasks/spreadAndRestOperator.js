// The spread operator expands an iterable (like an array or object) into individual elements.

// The rest operator collects multiple elements or properties into a single array or object. 


//   Spread Operator (...) ----------------------------------------------------

//Combining Arrays:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);
// Output: [1, 2, 3, 4, 5, 6] 


//  Rest Operator (...) -----------------------------------------------------------------

function myValues(...args) {
    console.log(args);
}
myValues(1, 2, 3, 4);



