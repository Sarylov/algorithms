class Solution {

    topKFrequent(nums, k) {
        const count = {};
        for (const num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        const heap = new MinPriorityQueue(x => x[1]);
        for (const [num, cnt] of Object.entries(count)) {
            heap.enqueue([num, cnt]);
            if (heap.size() > k) heap.dequeue();
        }

        const res = [];
        for (let i = 0; i < k; i++) {
            const [num, cnt] = heap.dequeue();
            res.push(num)
        }
        return res;
    }
}

const test = new Solution()
test.topKFrequent([1, 2, 2, 3, 3, 3], 2)