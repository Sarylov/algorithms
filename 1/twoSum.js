function twoSum(nums, target) {
    let map = {}

    for (let i = 0; i < nums.length; i++) {
        let dif = target - nums[i]

        if (map[dif] !== undefined) {
            return [map[dif], i]
        }

        map[nums[i]] = i
    }


    return -1
}

console.log(twoSum([2, 7, 11, 15], 9)) //[0, 1]