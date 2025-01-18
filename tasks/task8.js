async function get(url) {
    const promises = new Array(5).fill(() => fetch(url))
    let res

    let counter = 0
    for (promise of promises) {
        counter += 1
        const start = new Date().getUTCMilliseconds()
        serverRes = await promise()
        if (serverRes.status === 200) {
            res = serverRes
            break
        }
        else {
            res = new Error(serverRes)
        }
        const end = new Date().getUTCMilliseconds()
        console.log(counter + " старт:" + start + " конец:" + end)
    }

    return res
}

get("https://jsonplaceholder.typicode.com/todos/-1").then(res => console.log(res)).catch(err => console.error(err))