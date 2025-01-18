// В супермаркете есть очередь к кассам самообслуживания. Ваша задача — написать функцию для расчета общего времени, необходимого всем покупателям для оплаты!

// вход
// клиенты: массив положительных целых чисел, представляющих очередь. Каждое целое число представляет клиента, а его значение — это количество времени, которое требуется им для оформления заказа.
// n: положительное целое число, количество касс.
// выход
// Функция должна возвращать целое число — общее требуемое время.


// function queueTime(customers, n) {
//     const reversedCustomers = customers.reverse()
//     const k = new Array(n).fill(0)

//     while (reversedCustomers.length) {
//         const customer = reversedCustomers.pop()
//         const min = Math.min(...k)
//         const index = k.findIndex((el) => el === min)
//         k[index] += customer
//     }

//     return Math.max(...k)
// }
function queueTime(customers, n) {
    const k = new Array(n).fill(0)

    for (customer of customers) {
        const kIndex = k.indexOf(Math.min(...k))
        if (kIndex !== -1) k[kIndex] += customer
    }

    return Math.max(...k)
}

console.log(queueTime([5, 3, 4], 1))
// should return 12
// because when there is 1 till, the total time is just the sum of the times

console.log(queueTime([10, 2, 3, 3], 2))
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

console.log(queueTime([2, 3, 10], 2))
// should return 12

// indexOf есть метод надо запомнить