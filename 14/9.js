// Напишите функцию memoize, которая принимает функцию f и возвращает 
// новую функцию, которая кэширует результаты вызовов f.Если функция f 
// вызывается с теми же аргументами повторно, то результат должен браться из кэша, а не вычисляться заново.

function expensiveCalculation(a, b) {
    console.log("Выполняю вычисления...");
    return a + b;
}

function memoize(f) {
    let memory = {}

    function memWrapper(...args) {
        if (memory[args.toString()]) return memory[args.toString()] + " (результат взят из кэша)"
        const result = f(...args)
        memory[args.toString()] = result
        return result
    }

    memWrapper.clearMemory = () => {
        memory = {}
    }

    return memWrapper
}

const memoizedCalculation = memoize(expensiveCalculation);

console.log(memoizedCalculation(2, 3)); // Выполняю вычисления... 5
console.log(memoizedCalculation(2, 3)); // 5 (результат взят из кэша)
memoizedCalculation.clearMemory(); console.log("отчиска кэша")
console.log(memoizedCalculation(2, 3)); // 5 (результат взят из кэша)
console.log(memoizedCalculation(4, 5)); // Выполняю вычисления... 9
console.log(memoizedCalculation(4, 5)); // 9 (результат взят из кэша)