function rle(str) {
    let res = ""

    let counter = 1

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            counter += 1
        } else {
            res = res + str[i] + (counter === 1 ? "" : counter)
            counter = 1
        }
    }

    return res
}

console.log(rle("AAAABBBBCCCC"))
console.log(rle("AAAABBDDBBCCC"))
console.log(rle("ABBDDBBCCC"))