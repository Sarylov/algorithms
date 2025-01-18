// из массива nums найти индексы значении которые в сумме дают target

// 1) заводим хеш таблицу для быстрого обращения к индексу по значению
// 2) находим не достающее число для каждого из массива в цикле 
// 3) проверяем есть ли подходящее значение в hash таблице

function twoSum(nums, target) {
    if (nums.length < 2) return []
    const res = []

    const hash = {}

    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = i
    }

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (hash[diff] && hash[diff] !== i) return ([i, hash[diff]])
    }

    return res
}

console.log(twoSum([3, 4, 5, 6], 7))
console.log(twoSum([4, 5, 6], 10))
console.log(twoSum([3,3], 6))