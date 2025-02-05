//посчитать глубину объекта

function maxDepth(obj) {
    function getDepth(obj) {
        let res = 1
        for (let el of Object.values(obj)) {
            if (typeof el === "object") {
                res += getDepth(el)
            }
        }
        return res
    }

    let res = 0

    for (let el of Object.values(obj)) {
        if (typeof el === "object") {
            let deep = getDepth(el) + 1
            if (res < deep) res = deep
        }
    }

    return res
}

const obj = {
    a: { b: { c: 1 } },
    d: { e: { f: { g: 1 } } },
    h: { i: 1 }
};
// const obj = {
//     1: { 2: { 3: 3 } },
//     2: { 2: { 3: { 4: 4 } } },
//     3: 3, 4: 4
// }

console.log(maxDepth(obj)) //4

// function maxDepth(obj) {
//     if (typeof obj !== "object" || obj === null) {
//         return 0; // Если это не объект, глубина 0
//     }

//     let max = 0;
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             const depth = maxDepth(obj[key]); // Рекурсивно вычисляем глубину
//             if (depth > max) {
//                 max = depth; // Обновляем максимальную глубину
//             }
//         }
//     }

//     return max + 1; // Добавляем текущий уровень
// }

