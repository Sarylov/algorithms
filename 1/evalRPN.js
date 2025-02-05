function evalRPN(tokens) {
    let stack = []

    for (let token of tokens) {
        if (!isNaN(parseInt(token))) {
            stack.push(parseInt(token))
        } else {
            let num2 = stack.pop()
            let num1 = stack.pop()

            if (token === "+")
                stack.push(num1 + num2)
            if (token === "-")
                stack.push(num1 - num2)
            if (token === "/")
                stack.push(Math.trunc(num1 / num2))
            if (token === "*")
                stack.push(Math.trunc(num1 / num2))
        }
    }

    if (stack.length > 1) return -1

    return stack[0]
}


const tokens = ["4", "13", "5", "/", "+"];

console.log(evalRPN(tokens)); //6