function get(obj, path) {
    const pathArr = path.split(",")
    let res = obj

    for (let part of pathArr) {
        if (res[part]) res = res[part]
        else { res = undefined; break }
    }

    return res
}

const obj = {
    a: {
        b: {
            c: "d"
        },
        e: "f"
    }
}

console.log(get(obj, "a,b")) //{c:"d"}
console.log(get(obj, "a,b,c")) //d
console.log(get(obj, "a,b,x")) //{c:"d"}

