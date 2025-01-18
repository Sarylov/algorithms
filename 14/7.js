// console.log('apple'); 

// setTimeout(() => console.log("pear"), 0) 

// Promise.resolve("lemon").then(res => console.log(res)) 

// new Promise((res) => {
//     console.log("orange") 
//     res("pineapple")
// }).then(res => console.log(res))

// console.log("lime")

// apple orange lime lemon pineapple pear


// console.log("Start");

// setTimeout(() => console.log("Timeout"), 0);

// Promise.resolve().then(() => {
//     console.log("Promise 1");
//     queueMicrotask(() => console.log("Microtask in Promise 1"));
// });

// Promise.resolve().then(() => {
//     console.log("Promise 2");
// });

// console.log("End");

// start end promise1 promise2 Microtask in Promise 1 timeout 

// console.log("Start"); 

// setTimeout(() => console.log("Timeout 1"), 0);

// Promise.resolve().then(() => {
//     console.log("Promise 1");
//     setTimeout(() => console.log("Timeout 2"), 0);
// });

// Promise.resolve().then(() => {
//     console.log("Promise 2");
// });

// console.log("End");

// отвте start end promise 1 promise 2 timeout 1 timeout 2 

// console.log("Start"); //1

// setTimeout(() => console.log("Timeout"), 0); //7

// Promise.resolve().then(() => {
//     console.log("Promise 1"); // 3
//     queueMicrotask(() => console.log("Microtask in Promise 1")); //6
// });

// queueMicrotask(() => console.log("Microtask 1")); //4

// Promise.resolve().then(() => {
//     console.log("Promise 2"); //5
// });

// console.log("End"); //2

// отвте start end promise1 Microtask1 Promise 2 Microtask in Promise 1 Timeout
