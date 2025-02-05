/*
    написать функцию throttle(fn, delay, ctx)
    вызывающую fn не чаще чем раз в delay миллисекунд
    в качестве контекста выполнения используется контекст
    первый вызов fn всегда должен быть синхронным 
    если игнорируемый вызов оказался последним, то он должен выполниться 
*/

// function throttle(fn, delay, ctx) {
//     let timeoutId = null;
//     let lastArgs = null;
//     let lastCall = 0

//     return function (...args) {
//         lastArgs = args
//         const now = Date.now()

//         if (now - lastCall > delay) {
//             if (timeoutId) {
//                 clearTimeout(timeoutId)
//                 timeoutId = null
//             }
//             lastCall = now
//             fn.apply(ctx, lastArgs)
//         } else if (!timeoutId) {
//             timeoutId = setTimeout(() => {
//                 fn.apply(ctx, lastArgs)
//                 lastCall = Date.now()
//                 timeoutId = null
//             }, delay - (now - lastCall))
//         }
//     }
// }

function throttle(fn, delay, ctx) {
    let timerId = null
    let lastArgs = null
    let lastInit = 0

    return function (...args) {
        lastArgs = args
        let now = Date.now()
        let isNowStart = now - lastInit > delay
        let isCreateNewTimer = !timerId

        if (isNowStart) {
            lastInit = now
            fn.apply(ctx, lastArgs)
        } else if (isCreateNewTimer) {
            timerId = setTimeout(() => {
                lastInit = Date.now()
                fn.apply(ctx, lastArgs)
                timerId = null
            }, delay - (now - lastInit))
        }
    }
}



// !  !    !       !
// .       .       .
//  100    200     300

function test() {
    const start = Date.now()

    function log(text) {
        const msPassed = Date.now() - start
        console.log(`${msPassed}: ${this.name} logged ${text}`)
    }

    const throttled = throttle(log, 100, { name: "me" })

    throttled("m")
    setTimeout(() => throttled("mo"), 22)
    setTimeout(() => throttled("mos"), 33)
    setTimeout(() => throttled("mosc"), 150)
    setTimeout(() => throttled("moscow"), 400)
}

test()