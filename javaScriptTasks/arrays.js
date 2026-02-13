 let array = ["hi", "hello", "HRU", "tarun", 1];

// // FOR-EACH FUNCTION.
// array.forEach((n) => {
//   console.log(n);
// });
// console.log();

// //PUSH METHOD
// array.push(2);
// console.log(array);
// console.log();

// //POP METHOD
// array.pop();
// console.log(array);
// console.log();

// // UNSHIFT METHOD
// array.unshift(0);
// console.log(array);
// console.log();

// //indexOf METHOD
// console.log("INDEX OF hi :" + array.indexOf("hi"));
// console.log();

//MAP METHOD
// let newArray = array.map((n) => {
//   return n;
// })
// console.log(newArray);
// console.log();


// //REVERSE METHOD
// console.log(array.reverse());
// console.log();

// //JOIN METHOD
// let arr = array.join("-");
// console.log(arr);
// console.log(array)
// console.log();

// //CONCAT METHOD
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);
// console.log();


// //FLAT METHOD
// let eg = [1, 2, [3, 4, 5]];
// console.log(eg.flat());
// console.log();


// //FLATMAP METHOD
// let a = [1, 2, 3, 4];
// let a1 = a.flatMap((a) => [a, a * 2]);
// console.log(a1);


// //slice  AND splice METHOD
// let x = [1, 2, 3, 4, 5, 6];
// let x1 = x.slice(0, 2);
// console.log(x);
// console.log(x1);

// console.log();

// let y = [1, 2, 3, 4, 5, 6];
// let y1 = y.splice(0, 2);
// console.log(y);
// console.log(y1);

// // FILTER METHOD
// let s = [1, 2, 3, 4, 5, 6];
// let s1 = s.filter((n) => n % 2 == 0);
// console.log(s1);


// let ab  =[1,0];
// console.log(ab.join("."));


// //remove
// let t =[1,2,3,4,5,6,7];
// t.splice(0,3);
// console.log(t);

//add
// let t1 =[1,2,3,4,5,6,7];
// t1.splice(0  , 0 , 0 );
// console.log(t1);
// console.log();


// //replace
let t2 =[1,2,3,4,5,6,7]
t2.splice(0,2 , 100 ,200 ,300);
console.log(t2);
console.log();


// reduce method
// let h = [1,2,3,4,5];
// let h1=h.reduce((acc , curr)=>{
//   return acc+curr;
// })
// console.log(h1);