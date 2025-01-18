// Напишите функцию throttle, которая принимает функцию f и интервал времени interval(в миллисекундах).Функция throttle должна возвращать новую функцию, которая:

// Вызывает оригинальную функцию f не чаще, чем раз в interval миллисекунд.

// Если новая функция вызывается чаще, чем раз в interval, то вызовы игнорируются до истечения интервала.

function onScroll() {
    console.log("Скролл!");
}

function throttle(f, time) {
    let lastStart = 0
    let intervalId = 0

    return ((...args) => {
        const now = Date.now()
        if (lastStart - now >= time) {
            const res = f(...args)
            lastStart = now
            return res
        } else {
            if (intervalId) clearInterval(intervalId)
            intervalId = setTimeout(() => f(...args), time)
        }
    })

}

const throttledScroll = throttle(onScroll, 1000);

throttledScroll()
throttledScroll() // будет проигнорирован 
setTimeout(throttledScroll, 1200);
