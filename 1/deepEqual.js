// function deepEqualDFS(obj1, obj2) {
//     let res = true

//     function traverse(obj1, obj2) {
//         for (let key in obj1) {
//             if (typeof obj1[key] === "object") {
//                 traverse(obj1[key], obj2[key])
//             } else {
//                 if (obj1[key] !== obj2[key]) {
//                     res = false
//                     break
//                 }
//             }

//         }
//     }

//     traverse(obj1, obj2)
//     return res
// }

function deepEqualDFS(obj1, obj2) {
    // Проверка на одинаковый тип
    if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
        return obj1 === obj2;
    }

    // Проверка на массивы
    // if (Array.isArray(obj1) !== Array.isArray(obj2)) {
    //     return false;
    // }

    // Получаем ключи из обоих объектов
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Если количество ключей разное, объекты не равны
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Рекурсивная проверка каждого ключа
    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqualDFS(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

console.log(deepEqualDFS({ a: 1, b: [1, 2, 3] }, { a: 1, b: [1, 2, 3] })) //true
console.log(deepEqualDFS({ a: 1, b: [1, 2, { f: 50 }] }, { a: 1, b: [1, 2, { f: 51 }] })) //false