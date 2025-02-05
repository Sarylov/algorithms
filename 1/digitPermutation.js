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
    let groupMap = {}

    for (let i = 0; i < arr.length; i++) {
        let hash = new Array(9).fill(0)
        const str = arr[i].toString()

        for (let char of str) {
            if (char !== "0") {
                hash[char] += 1
            }
        }

        let strHash = hash.join(",")
        if (groupMap[strHash]) groupMap[strHash].push(arr[i])
        else groupMap[strHash] = [arr[i]]
    }

    return Object.values(groupMap)
}

console.log(digitPermutation([1230, 99, 23001, 123, 111, 300021, 101010, 9000009, 9]))
// [
//     [ 9 ],
//     [ 99, 9000009 ],
//     [ 111, 101010 ],
//     [ 1230, 23001, 123, 300021 ]
//   ]
console.log(digitPermutation([11, 22]))//[[11],[22]]
console.log(digitPermutation([111111112, 122222222]))//[ [ 111111112 ], [ 122222222 ] ]