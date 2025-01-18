function retry(f, config) {
    const { count, delay } = config
    const functions = new Array(count).fill(f)

    return new Promise((resolve, reject) => {

        for (let i = 0; i < functions.length; i++) {
            functions[i].then((localRes) => {
                resolve(localRes)
            }).catch((err) => {
                
             }).finally()
        }
    })
}

function test() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("hello world Error"), 1000)
    })
}

retry(test, { count: 5, delay: (retryCount) => retryCount * 1000 })
    .then(res => console.log("res ", res))
    .catch(err => console.log("error ", err))