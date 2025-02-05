/* 
дан массив целых неотрицательных чисел, нужно сгруппировать друг с другом числа, 
которые можно получить путем перестановки цифр их составляющих, 
нули при этом игнорируются
решение должно быть максимально эффективных по памяти и времени
*/


/*
    key = сумме кодов числа\
    value = массив группированных чисел
*/

// O(n * k) цп
// O(n) озу

function digitPermutation(arr) {
    let hash = {}

    for (let i = 0; i < arr.length; i++) {
        const regex = /0/g
        const cleanNum = arr[i].toString().replace(regex, '')
        let hashKey = 0
        for (let char of cleanNum) {
            hashKey += char.charCodeAt(0)
        }
        if (hash[hashKey])
            hash[hashKey].push(arr[i])
        else
            hash[hashKey] = [arr[i]]
    }

    return Object.values(hash)
}

console.log(digitPermutation([1230, 99, 23001, 123, 111, 300021, 101010, 9000009, 9]))
console.log(digitPermutation([11, 22]))//[[11],[22]]
console.log(digitPermutation([111111112, 122222222]))//[ [ 111111112 ], [ 122222222 ] ]