// Задача 3: Удаление дубликатов из строки
// Условие:
// Дана строка. Удалите соседние дубликаты символов, пока это возможно. Верните итоговую строку.

function removeDuplicates(s) {
    const stack = []

    for (let char of s) {
        if (stack.length === 0) stack.push(char)
        else if (stack[stack.length - 1] === char)
            stack.pop()
        else stack.push(char)
    }

    return stack.join("")
}

console.log(removeDuplicates("abbaca")) //→ "ca"
console.log(removeDuplicates("azxxzy")) //→ "ay"