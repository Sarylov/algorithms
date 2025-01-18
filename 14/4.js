// ## Условие

// Дан массив целых чисел `nums` и целое число `target`. Необходимо вернуть индексы двух чисел из массива `nums`, сумма которых равна `target`.

// Вы можете предположить, что каждый входной массив имеет только одно решение, и вы не можете использовать один и тот же элемент дважды.

// Вы можете вернуть ответ в любом порядке.

function twoSum(arr, target) {
    const hash = {}

    for (i in arr) {
        hash[arr[i]] = i
    }

    for (num in arr) {
        const diff = target - hash[num]
        if (hash[diff] && hash[diff] !== num) return [hash[diff], hash[num]]
    }
}

console.log(twoSum([3, 2, 4], 6)) // [1,2]
// console.log(twoSum([2, 7, 11, 15], 9)) //[0, 1]
// console.log(twoSum([3, 3], 6)) //[0, 1]
