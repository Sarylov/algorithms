
function allSettled(promises) {
    let res = new Array(promises.length)
    let count = 0

    return new Promise((resolve) => {
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((localRes) => res[index] = ({
                    status: "fulfilled",
                    value: localRes
                }))
                .catch((err) => res[index] = ({
                    status: "rejected",
                    reason: err
                }))
                .finally(() => {
                    count++;
                    if (count === promises.length) resolve(res)
                })
        })
    })
}

function all(promises) {
    const res = new Array(promises.length)
    let counter = 0

    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((localRes) => {
                    counter++
                    res[index] = { status: "fulfilled", value: localRes }
                })
                .catch((err) => { reject(err) })
                .finally(() => {
                    if (counter === promises.length) resolve(res)
                })
        })
    })
}

allSettled([
    Promise.resolve(1), Promise.reject(2), 3, new Promise((resolve) => setTimeout(() => resolve(4), 1000))
]).then(res => console.log("__RES1__", res))

// {status:"fulfilled", value: 1}
// {status:"rejected", reason: 2}
// {status:"fulfilled", value: 3}
// {status:"fulfilled", value: 4}

all([
    Promise.resolve(1), Promise.reject(2), 3, new Promise((resolve) => setTimeout(() => resolve(4), 1000))
]).then(res => console.log("__RES2__", res)).catch(error => console.log("__RES2__", error))

// error reason 2

all([
    Promise.resolve(1), Promise.resolve(2), 3, new Promise((resolve) => setTimeout(() => resolve(4), 1000))
]).then(res => console.log("__RES2__", res))

// {status:"fulfilled", value: 1}
// {status:"fulfilled", value: 2}
// {status:"fulfilled", value: 3}
// {status:"fulfilled", value: 4}
