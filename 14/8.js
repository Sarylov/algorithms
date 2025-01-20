// написать функцию spy которая принимает в себя функцию 

function _sum(a, b) {
    return a + b
}

function spy(f) {
    // здесь код

    let data = {
        calls: 0,
        args: [],
        results: []
    }

    function spyWrapper(...props) {
        data.calls += 1
        data.args.push(props)
        const res = f(...props)
        data.results.push(res)
        return res
    }

    spyWrapper.data = data
    return spyWrapper
}

const sum = spy(_sum)

console.log(sum(2, 1)) // 4
console.log(sum(21, 21)) // 42

// кол-во вызовов функции суммы 
console.log(sum.data.calls)
// аргументы вызовов 
console.log(sum.data.args)
// результаты вызовов
console.log(sum.data.results)