function get(obj, path) {
    let res = { ...obj }

    const pathArr = path.split('.')
    for (let i of pathArr) {
        if (res[i] === undefined) return
        res = res[i]
    }

    return res
}

console.log(get({ a: { b: "c" } }, "a.b"))
console.log(get({ a: { b: "c" } }, "a.b.x"))