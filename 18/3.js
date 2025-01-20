
function randomUrl() {
    const urls = {
        1: "error",
        2: "https://jsonplaceholder.typicode.com/todos/1"
    }

    const urlNumber = Math.floor(Math.random() * 3)
    return urls[urlNumber]
}

async function get() {
    let tryCounter = 0
    let start = 0

    function query() {
        const random = randomUrl()
        return fetch(random)
    }

    return new Promise((res, rej) => {
        function tryFetch() {
            start = new Date().getSeconds()
            query()
                .then((localRes) => res(localRes))
                .catch((err) => {
                    tryCounter += 1
                    if (tryCounter === 5) rej(err)
                    else setTimeout(() => tryFetch(), 1000)
                }).finally(() => {
                    console.log("попытка: ", tryCounter, "начло: ", start, "конец: ", new Date().getSeconds())
                })
        }

        tryFetch()
    })
}




console.log(get().then(res => console.log(res)).catch(err => console.error(err)))