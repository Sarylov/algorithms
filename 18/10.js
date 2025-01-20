// Напишите функцию createCounter, которая возвращает объект с методами для управления счетчиком.Счетчик должен поддерживать следующие операции:
// Увеличение значения на заданное число(по умолчанию на 1).
// Уменьшение значения на заданное число(по умолчанию на 1).
// Сброс значения к начальному(по умолчанию 0).
// Получение текущего значения счетчика.
// Функция createCounter должна принимать начальное значение счетчика(по умолчанию 0) и шаг изменения(по умолчанию 1).

// Требования:
// Используйте замыкания для хранения состояния счетчика.
// Методы должны быть возвращены в виде объекта.
// Убедитесь, что начальное значение и шаг могут быть заданы при создании счетчика.

function createCounter(initial = 0, step = 1) {
    return {
        value: initial,
        initial,
        step,

        getValue() {
            return this.value
        },
        increment(num) {
            this.value += num !== undefined ? num : this.step
        },
        decrement(num) {
            this.value -= num !== undefined ? num : this.step
        },
        reset() {
            this.value = this.initial
        }
    }
}

const counter = createCounter(10, 2);

console.log(counter.getValue()); // 10
counter.increment();
console.log(counter.getValue()); // 12
counter.decrement();
console.log(counter.getValue()); // 10
counter.reset();
console.log(counter.getValue()); // 10
counter.increment(5);
console.log(counter.getValue()); // 15