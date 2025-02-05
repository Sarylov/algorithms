/*
Задача
Напишите функцию debounce, которая ограничивает частоту вызова переданной функции. Эта функция должна вызываться не чаще, 
чем через заданный интервал времени. Если функция вызывается повторно в течение этого интервала, предыдущий вызов отменяется, и таймер перезапускается.

Описание параметров
func: Функция, которую необходимо "дебаунсить". Она будет вызываться после того, как пройдет заданный интервал времени.
wait: Время в миллисекундах, в течение которого последующие вызовы функции будут игнорироваться.
immediate (опционально): Булевый параметр, определяющий, следует ли вызывать функцию немедленно при первом вызове (по умолчанию false).
*/

function debounce(func, wait, immediate) {
    let timeoutId

    function wrapper(...args) {
        const context = this

        const isCallNow = !immediate && !timeoutId

        if (timeoutId) {
            clearTimeout(timeoutId)
        }

        timeoutId = setTimeout(() => {
            if (!immediate) func.apply(context, args)
            timeoutId = null
        }, wait)

        if (isCallNow) {
            func.apply(context, args);
        }
    }

    return wrapper
}

// function debounce(func, wait, immediate = false) {
//     let timeout;

//     return function (...args) {
//         const context = this;

//         const later = () => {
//             timeout = null;
//             if (!immediate) func.apply(context, args);
//         };

//         const callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);

//         if (callNow) func.apply(context, args);
//     };
// }


function log(text = "вызов") {
    console.log(text);
    console.log(Date.now())
}

// Пример вызовов

function test() {
    const debouncedLog = debounce(log, 100);
    console.log(Date.now())

    setTimeout(() => debouncedLog("2"), 100);
    setTimeout(() => debouncedLog("3"), 200);
    setTimeout(() => debouncedLog("4"), 250); // Игнорируется
    setTimeout(() => debouncedLog("5"), 400);
    setTimeout(() => debouncedLog("6"), 600); // Выполнится с "6"
}

test()
