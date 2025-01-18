function rle(str) {
    let res = ""
    let counter = 1

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            counter++
        } else {
            res += str[i] + (counter !== 1 ? counter : "")
            counter = 1
        }
    }

    return res
}

console.log(rle("A"))// A
console.log(rle("AAAB"))// A3B
console.log(rle("ABCCC"))// ABC3
console.log(rle("ABBCCCBBB"))//AB2C3B3