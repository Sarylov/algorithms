function promiseRace(arr) {
    return new Promise((res, rej) => {
        arr.forEach(fun => {
            Promise.resolve(fun()).then((localRes) => { res(localRes); }).catch((err) => { return rej(err); })
        });
    })
}