// разбить на диопозоны

function range(arr) {
    // 0, 1, 2, 3, 4, 5, 8, 9, 11
    // 1, 2, 3, 4
    const sorted = [...arr].sort((a, b) => a - b)
    let res = String(arr[0])
    let last = arr[0]


    for (let i = 1; i < sorted.length; i++) {
        const next = sorted[i + 1]
        const cur = sorted[i]
        const dif = next - cur

        if (dif !== 1) {
            if (next)
                res += `-${cur},${next || ""}`
            else {
                if (last !== cur)
                    res += `-${cur}`
            }
            last = cur
        }
    }

    return res
}

const arr = [1, 4, 5, 2, 3, 9, 8, 11, 0] // 0-5,8-9,11
const arr2 = [1, 4, 3, 2] // 1-4
console.log(range(arr))
console.log(range(arr2))
