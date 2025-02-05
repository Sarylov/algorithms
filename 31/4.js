function longestSubarray(nums) {
    if (new Set(nums).size === 1) return nums.lenght - 1
    let arrs = nums.toString().replace(/,/g, "").split("0")
    let maxSum = 0
    let targetNull = 0

    arrs.forEach((arr, i) => {
        if (arrs[i + 1]) {
            let curLen = arr.length // 0
            let nextLen = arrs[i + 1].length //3
            let sum = curLen + nextLen
            if (sum > maxSum) {
                maxSum = sum
                targetNull = i + 1
            }
        }
    })

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            targetNull--
            if (targetNull <= 0) {
                return i
            }
        }
    }
}

console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])) // 4