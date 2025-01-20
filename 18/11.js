// Описание:
// Напишите функцию createCachingCalculator, которая возвращает объект с методами для выполнения математических операций (сложение, вычитание, умножение, деление) с кэшированием результатов. 

// Кэширование должно работать так:
// Если операция с такими же аргументами уже выполнялась, возвращать результат из кэша, не вычисляя заново.
// Если операция выполняется впервые, результат должен быть вычислен и сохранен в кэше.

// Требования:
// Используйте замыкания для хранения кэша.
// Кэш должен быть организован так, чтобы для каждой операции (сложение, вычитание, умножение, деление) хранились отдельные результаты.

// Методы калькулятора:
// add(a, b) — сложение.
// subtract(a, b) — вычитание.
// multiply(a, b) — умножение.
// divide(a, b) — деление.

// Кэш должен быть ограничен по размеру. Если количество закэшированных результатов превышает лимит, удаляйте самые старые результаты (LRU — Least Recently Used).

function createCachingCalculator(cashLimit) {
    const caches = {
        add: new Map(),
        subtract: new Map(),
        multiply: new Map(),
        divide: new Map(),
    };

    function clearCache(cache) {
        while (cache.size > cashLimit) {
            const firstKey = cache.keys().next().value;
            cache.delete(firstKey);
        }
    }

    function performOperation(a, b, operation, operator) {
        const cache = caches[operation];
        const key = `${a},${b}`;

        if (cache.has(key)) {
            return `${cache.get(key)} взято из кэша`;
        }

        let result;
        switch (operator) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                if (b === 0) throw new Error("Division by zero is not allowed");
                result = a / b;
                break;
            default:
                throw new Error("Invalid operator");
        }

        cache.set(key, result);
        clearCache(cache);
        return result;
    }

    return {
        add(a, b) {
            return performOperation(a, b, 'add', '+');
        },
        subtract(a, b) {
            return performOperation(a, b, 'subtract', '-');
        },
        multiply(a, b) {
            return performOperation(a, b, 'multiply', '*');
        },
        divide(a, b) {
            return performOperation(a, b, 'divide', '/');
        },
    };
}

// Пример использования
const calculator = createCachingCalculator(3);

console.log(calculator.add(1, 2)); // 3
console.log(calculator.add(1, 2)); // 3 взято из кэша
console.log(calculator.multiply(2, 3)); // 6
console.log(calculator.multiply(2, 3)); // 6 взято из кэша
console.log(calculator.add(2, 3)); // 5
console.log(calculator.add(3, 4)); // 7 (кэш для add теперь содержит (2,3) и (3,4), (1,2) удалено)