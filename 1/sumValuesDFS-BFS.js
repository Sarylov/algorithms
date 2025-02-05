// найти сумму все элементов объекта

// поиск в глубину
function sumValuesDFS(obj) {
    if (typeof obj !== "object") return 0

    let sum = 0

    for (let key in obj) {
        if (typeof obj[key] === "number") {
            sum += obj[key]
        }
        else if (typeof obj[key] === "object") {
            sum += sumValuesDFS(obj[key])
        }
    }

    return sum
}

// поиск в глубину
function sumValuesBFS(obj) {
    if (typeof obj !== "object") return 0

    let queue = [obj]
    let sum = 0

    while (queue.length) {
        let current = queue.shift()

        for (let key in current) {
            if (typeof current[key] === "number") {
                sum += current[key]
            }
            else if (typeof current[key] === "object") {
                queue.push(current[key])
            }
        }
    }

    return sum
}

console.log(
    sumValuesDFS({ key1: 4, key2: { key3: 10, key4: -1, key5: { key6: 5 } }, key7: 1 })
)
console.log(
    sumValuesBFS({ key1: 4, key2: { key3: 10, key4: -1, key5: { key6: 5 } }, key7: 1 })
)
// 19