// Двоичный поиск
// Вам дан массив различных целых чисел nums, отсортированный в порядке возрастания, и целое число target.

// Реализуйте функцию для поиска targetв nums. Если она существует, то верните ее индекс, в противном случае верните -1.

// Пример 1:
// Input: nums = [-1,0,2,4,6,8], target = 4
// Output: 3

// Пример 2:
// Input: nums = [-1,0,2,4,6,8], target = 3
// Output: -1

function binarySearch(n, target) {
    let left = 0
    let right = n.length - 1

    while (left <= right) {
        const mid = Math.floor((right + left) / 2)

        if (target === n[mid]) {
            return mid
        } else if (target > n[mid]) {
            left = mid + 1
        } else if (target < n[mid]) {
            right = mid - 1
        }
    }

    return -1
}

console.log(binarySearch([-1, 0, 2, 4, 6, 8], 4)) // 3
console.log(binarySearch([-1, 0, 2, 4, 6, 8], 3)) // -1