// что выведется в консоли 

let i = 10;
let array = []

while (i--) {
    
    array.push(function () {
        return i + i
    })
}

console.log([
    array[0](), //18
    array[1]() //16
])

// let functions = [];

// for (var i = 0; i < 3; i++) {
//     functions.push(function () {
//         return i;
//     });
// }

// console.log([
//     functions[0](),
//     functions[1](),
//     functions[2]()
// ]); // 3 3 3 

// function outer() {
//     let x = 10;

//     function inner() {
//         console.log(x); // inner "запоминает" x из outer
//     }

//     return inner;
// }

// const closureFunc = outer();
// console.log(closureFunc); // 10

// function createIncrementer(start) {

//     return function () {
//         let start1 = start
//         return start1++;
//     };
// }

// const incrementer = createIncrementer(5);
// console.log(incrementer());
// console.log(incrementer());
// console.log(incrementer());

// function createCounter() {
//     var count = 0;
//     return {
//         increment: function () {
//             count++;
//         },
//         getCount: function () {
//             return count;
//         }
//     };
// }

// const counter = createCounter();
// counter.increment();
// counter.increment();
// console.log(counter.getCount());

// const a = 5

// function createAdder() {
//     return function (b) {
//         return a + b;
//     };
// }

// const addFive = createAdder();
// console.log(addFive(3));
// console.log(addFive(10));

// z`