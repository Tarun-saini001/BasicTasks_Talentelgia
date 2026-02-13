/* Async/Await in JavaScript allows you to write asynchronous code in a clean,
  synchronous-like manner, making it easier to read, understand, and 
 maintain while working with promises.*/

 // if async function returns a non-promise value, JavaScript automatically wraps it in a resolved promise.

 
function getPromise(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("promise resolved")
    },2000)
  })
}

async function print() {
  console.log("wait for result")
  let res = await getPromise();
  console.log('res: ', res);
  console.log("result received")
}
print();
