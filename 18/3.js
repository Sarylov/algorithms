async function get(url) {
    let res
    const arr = new Array(5).fill((url) => { return fetch(url) })

    for (f of arr) {
        console.log("start: " + new Date())
        try {
            res = await f(url)
            if (res.status === 200) break

        } catch (error) {
            res = new Error(error)
        }
        console.log("end: " + new Date())
    }

    return res
}

const url = "https://jsonplaceholder.typicode.com/todo"

console.log(get(url).then(res => console.log(res)).catch(err => console.error(err)))