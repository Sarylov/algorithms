function throttle(func, limit, context) {
    let inThrottle;
    return function () {
        const args = arguments;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function debounce(func, delay, context) {
    let timeoutId;
    return function () {
        const args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(context, args), delay);
    };
}

function testThrottle() {
    const start = Date.now()

    function log(text) {
        const msPassed = Date.now() - start
        console.log(`${msPassed}: ${this.name} logged ${text}`)
    }

    const throttled = throttle(log, 100, { name: "me" })

    setTimeout(() => throttled("m"), 0)
    setTimeout(() => throttled("mo"), 22)
    setTimeout(() => throttled("mos"), 33)
    setTimeout(() => throttled("mosc"), 150)
    setTimeout(() => throttled("moscow"), 400)

}

function testDebounce() {
    const start = Date.now()

    function log(text) {
        const msPassed = Date.now() - start
        console.log(`${msPassed}: ${this.name} logged ${text}`)
    }

    const debounced = debounce(log, 100, { name: "me" })

    debounced("m")
    setTimeout(() => debounced("mo"), 22)
    setTimeout(() => debounced("mos"), 33)
    setTimeout(() => debounced("mosc"), 150)
    setTimeout(() => debounced("moscow"), 400)

}

testThrottle()
// 0: me logged m
// 158: me logged mosc
// 408: me logged moscow



// testDebounce()
// 35: me logged mos
// 252: me logged mosc
// 502: me logged moscow