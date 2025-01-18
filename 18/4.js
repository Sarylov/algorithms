function isMOnotonic(numbers) {
    const isUp = numbers[0] <= numbers[numbers.length - 1]

    for (let i = 0; i < numbers.length; i++) {
        if (isUp) {
            if (numbers[i] > numbers[i + 1]) return false
        } else {
            if (numbers[i] < numbers[i + 1]) return false
        }
    }

    return true
}

console.log(isMOnotonic([1, 2, 3, 6]))//true
console.log(isMOnotonic([6, 3, 3, 2, 1]))//true
console.log(isMOnotonic([1, 1, 1]))//true
console.log(isMOnotonic([1, 10, 6]))//false
console.log(isMOnotonic([10, 11, 6]))//false