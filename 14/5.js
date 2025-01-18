function checkBrackets(str) {
    let counter = 0

    for (let char of str) {
        if (counter === -1) return false
        if (char === "(") counter += 1
        if (char === ")") counter -= 1
    }

    return counter === 0
}


console.log(checkBrackets("((()))"))//true
console.log(checkBrackets("((())"))//false
console.log(checkBrackets(")))("))//false
console.log(checkBrackets("()))("))//false
console.log(checkBrackets(")("))//false