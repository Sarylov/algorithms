/*
Условие задачи:
Необходимо реализовать функцию throttle, которая принимает целевую функцию func и интервал времени limit (в миллисекундах). Функция throttle должна возвращать новую функцию, которая ограничивает частоту вызовов func так, чтобы она выполнялась не чаще, чем раз в limit миллисекунд.

Входные данные:
func — функция, которую нужно вызывать с ограничением по частоте.

limit — интервал времени в миллисекундах, определяющий минимальный промежуток между вызовами func.

Выходные данные:
Функция, которая:
При первом вызове немедленно вызывает func.
Игнорирует все последующие вызовы в течение интервала limit.
После истечения интервала limit снова позволяет вызвать func.
Требования:
Функция throttle должна корректно работать с контекстом вызова (this) и аргументами, передаваемыми в func.
Если limit равен 0, функция func должна вызываться на каждый вызов.
Если func не является функцией или limit не является неотрицательным числом, функция throttle должна выбросить ошибку.
*/

function throttle(func, limit) {
    let timeoutId;
    let lastRan;

    return function (...args) {
        const context = this;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// function throttle(func, ms) {

//     let isThrottled = false,
//         savedArgs,
//         savedThis;

//     function wrapper() {

//         if (isThrottled) { // (2)
//             savedArgs = arguments;
//             savedThis = this;
//             return;
//         }

//         func.apply(this, arguments); // (1)

//         isThrottled = true;

//         setTimeout(function () {
//             isThrottled = false; // (3)
//             if (savedArgs) {
//                 wrapper.apply(savedThis, savedArgs);
//                 savedArgs = savedThis = null;
//             }
//         }, ms);
//     }

//     return wrapper;
// }

function logMessage(message) {
    console.log(message);
}

const throttledLog = throttle(logMessage, 500);

throttledLog('Hello'); // Выполнится сразу
throttledLog('World'); // Проигнорируется
setTimeout(() => throttledLog('Again'), 600); // Выполнится через 600 мс

