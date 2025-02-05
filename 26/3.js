// Допустимые скобки
// Вам дана строка, состоящая sиз следующих символов: '(', ')', '{', и .'}''['']'

// Входная строка sдействительна тогда и только тогда, когда:

// Каждая открывающаяся скобка закрывается закрывающейся скобкой того же типа.
// Открытые скобки закрываются в правильном порядке.
// Каждой закрывающейся скобке соответствует открывающаяся скобка того же типа.
// Верните, trueесли sэто допустимая строка, falseв противном случае.

// Пример 1:

// Input: s = "[]"

// Output: true
// Пример 2:

// Input: s = "([{}])"

// Output: true
// Пример 3:

// Input: s = "[(])"

// Output: false

function isValid(s) {
    const stack = []
    const hash = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    for (let c of s) {
        if (hash[c]) {
            // сюда попадают только закрывающии скобки
            if (stack.length > 0) {
                const lastC = stack[stack.length - 1]
                if (lastC === hash[c]) stack.pop()
                else return false
            } else
                return false
        } else {
            // сюда попадают только открывающие скобки
            stack.push(c)
        }
    }

    return stack.length === 0
}


console.log(isValid("([{}])"))//true
console.log(isValid("[]"))//true
console.log(isValid("[(])"))//false