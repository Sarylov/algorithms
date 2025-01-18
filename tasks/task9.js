function isMonotonic(arr) {
    let up = false

    if (arr[0] < arr[arr.length - 1])
        up = true


    for (i in arr) {
        const cur = arr[i]
        const next = arr[Number(i) + 1]

        if (up) {
            if (cur > next)
                return false
        } else {
            if (cur < next)
                return false
        }
    }
    
    return true
}

console.log(isMonotonic([1, 2, 3, 4]))
console.log(isMonotonic([1, 2, 4, 3, 4]))
console.log(isMonotonic([3, 2, 1, 1]))
console.log(isMonotonic([3, 2, 3]))