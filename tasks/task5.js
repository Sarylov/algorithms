function topKFrequent(nums, k) {
    const res = []
    const hash = {}
    for (const num of nums) {
        hash[num] = hash[num] || 0 + 1
    }
    const hash2 = {}
    for (const hashKey of hash) {
        hash2[hash[hashKey]] = hash2[hash[hashKey]].toString() || "" + "," + hashKey
    }

    for (let i = k; i !== 0; i--) {

    }
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))