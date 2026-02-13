/* A JavaScript Promise is an object representing the eventual completion or failure 
 of an asynchronous operation*/

// Why promises? :  prevent callback hells 

let checkEven = new Promise((resolve, reject) => {
    let number = 4;
    if (number % 2 === 0) resolve("The number is even!");
    else reject("The number is odd!");
});
checkEven
    .then((message) => console.log(message)) // On success
    .catch((error) => console.error(error)) // On failure
    .finally(()=>console.log("Calculation finished"))