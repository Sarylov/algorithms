// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // tagtet 10
// // 1*3 = 3
// // 3*3 = 9
// // 9+1 = 10
// // ответ 3

// // 1) цикл уманожения на 3 пока не станет больше target 
// // 1.5) цикл уманожения на 2 пока не станет больше target 
// // 2) прибалвение не достающих единиц одно прибалвение + 1 шаг

// // rl.on('line', line => {
// //     const [a, b] = line.split(' ').map(Number);
// //     console.log(a + b);
// //     rl.close();
// // });

// rl.on('line', line => {
//     const target = Number(line)

//     let first = 1
//     let second = 1

//     let stop1 = false
//     let stop2 = false

//     let counter1 = 0
//     let counter2 = 0

//     while (!stop1 || !stop2) {
//         if (first * 3 <= target) {
//             first *= 3;
//             counter1 += 1
//         } else stop1 = true;
//         if (second * 2 <= target) {
//             second *= 2;
//             counter2 += 1
//         } else stop2 = true;
//     }

//     counter1 += target - first
//     counter2 += target - second

//     console.log(Math.min(counter1, counter2))
//     rl.close();
// });

function minOperations(N) {
    // Инициализация массива dp
    const dp = new Array(N + 1).fill(Infinity);
    dp[1] = 0; // Для числа 1 требуется 0 операций

    // Заполнение массива dp
    for (let i = 2; i <= N; i++) {
        if (i % 2 === 0) {
            dp[i] = Math.min(dp[i], dp[i / 2] + 1);
        }
        if (i % 3 === 0) {
            dp[i] = Math.min(dp[i], dp[i / 3] + 1);
        }
        dp[i] = Math.min(dp[i], dp[i - 1] + 1);
    }

    // Восстановление последовательности
    const sequence = [];
    let current = N;
    while (current >= 1) {
        sequence.push(current);
        if (current % 2 === 0 && dp[current] === dp[current / 2] + 1) {
            current = current / 2;
        } else if (current % 3 === 0 && dp[current] === dp[current / 3] + 1) {
            current = current / 3;
        } else {
            current = current - 1;
        }
    }

    sequence.reverse(); // Переворачиваем массив, чтобы получить последовательность от 1 до N
    return { operations: dp[N], sequence };
}

// Ввод числа N
const N = 50;

// Получение результата
const result = minOperations(N);

// Вывод результата
console.log(result.operations); // Минимальное количество операций
console.log(result.sequence.join(" ")); // Последовательность чисел