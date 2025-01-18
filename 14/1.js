function digitalRoot(n) {
    let res = n
    while (res.toString().length !== 1) {
        res = res.toString().split("").reduce((acc, char) => acc + Number(char), 0)
    }
    return res
}

console.log(digitalRoot(15))//6
console.log(digitalRoot(456))//6