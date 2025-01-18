// Есть массив с некоторыми числами.Все числа равны, кроме одного.Попробуйте найти его!

// findUniq([1, 1, 1, 2, 1, 1]) === 2
// findUniq([0, 0, 0.55, 0, 0]) === 0.55
// Гарантируется, что массив содержит не менее 3 чисел.



function findUniq(arr) {
    const hash = {}
    let res = "не имеет уникальных"

    for (el of arr) {
        hash[el] = (hash[el] || 0) + 1
    }

    for (el in hash) {
        if (hash[el] === 1) res = Number(el)
    }

    return res
}



console.log(findUniq([1, 1, 1, 1, 1, 2, 3, 3]) === 2)
console.log(findUniq([0, 0, 0.55, 0, 0]) === 0.55)