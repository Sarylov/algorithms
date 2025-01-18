// реализуй на ts функцию map

function myMap(f) {
    const res = []
    for (let i = 0; i <= this.length - 1; i++) {
        res.push(f(this[i], i, this))
    }
    return res
}



const myArray = Array
myArray.prototype.myMap = myMap

const arr = new myArray(9).fill(1)


console.log(arr.map((num) => num))
console.log(arr.myMap((num) => num))



