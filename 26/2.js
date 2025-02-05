//через hash map O(n) по памяти и процу
function twoSum(numbers, target) {
    const hash = new Map()
    for (let i = 0; i < numbers.length; i++) {
        const dif = target - numbers[i]
        if (hash.has(dif))
            return [hash.get(dif), i]
        hash.set(numbers[i], i)
    }
    return []
}

console.log(twoSum([4, 3, 2, 1], 3))
console.log(twoSum([1, 2, 3, 4], 6))


//через 2 указателя массив отсортирован O(n) по процу и O(1) по памяти
// function twoSum(numbers, target) {
//     let start = 0
//     let end = numbers.length - 1

//     while (start < end) {
//         const sum = numbers[start] + numbers[end]

//         if (sum > target) {
//             end--
//         } else if (sum < target) {
//             start++
//         } else if (sum === target) {
//             return [start, end]
//         }
//     }

//     return []
// }