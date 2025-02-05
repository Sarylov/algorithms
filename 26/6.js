// Задача 4: Минимум в стеке
// Условие:
// Реализуйте стек, который поддерживает операции push, pop, top и getMin (получение минимального элемента) за O(1).

class MinStack {
    constructor() {
        this.minStack = []
        this.stack = []
    }

    push(num) {
        this.stack.push(num)
        if (this.minStack.length > 0) {
            if (this.minStack[this.minStack.length - 1] >= num)
                this.minStack.push(num);
        } else this.minStack.push(num);
    }
    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
    pop() {
        let last = this.stack.pop()
        let lastMin = this.getMin()
        if (last === lastMin)
            this.minStack.pop()
    }
    top() {
        return this.stack[this.stack.length - 1]
    }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());// → -3
minStack.pop();
console.log(minStack.top());// → 0
console.log(minStack.getMin());// → -2