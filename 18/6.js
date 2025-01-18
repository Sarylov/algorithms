function retry(f, config) {
    const { count, delay } = config
    let countTry = 0

    return new Promise((resolve, reject) => {
        function tryF() {
            f()
                .then((res) => resolve(res))
                .catch((err) => {
                    countTry += 1
                    if (count === countTry)
                        reject("попытки изчерпаны")
                    else {
                        setTimeout(() => { tryF() }, delay(countTry))
                    }
                })
        }
        tryF()
    })

}

function test() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("hello world Error"), 1000)
    })
}

retry(test, { count: 5, delay: (retryCount) => { console.log(retryCount); return retryCount * 1000 } })
    .then(res => console.log("res ", res))
    .catch(err => console.log("error ", err))