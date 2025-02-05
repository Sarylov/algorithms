// Обратная польская запись (RPN)
// Условие:
// Дано выражение в обратной польской записи (постфиксной записи). Вычислите его значение.

function evalRPN(arr) {
    const stack = []

    for (let el of arr) {
        if (!isNaN(Number(el))) {
            //записываются числа
            stack.push(parseInt(el))
        } else {
            if (stack.length >= 2) {
                //реагирум на опиратор
                let num2 = stack.pop()
                let num1 = stack.pop()
                let calc = 0

                if (el === "+") calc = num1 + num2
                if (el === "-") calc = num1 - num2
                if (el === "*") calc = num1 * num2
                if (el === "/") calc = Math.trunc(num1 / num2)

                stack.push(calc)
            } else {
                return []
            }
        }
    }

    if (stack.length === 1) return stack[0]
    else return []
}

console.log(evalRPN(["2", "1", "+", "3", "*"]))//→ 9
console.log(evalRPN(["4", "13", "5", "/", "+"]))//→ 6.6

