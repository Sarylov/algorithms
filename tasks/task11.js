
// first
// function fun(N, staff, K) {
//     let ans = 0
//     const sortedStaff = staff.sort((a, b) => a - b)

//     for (let i = 0; i < K; i++) {
//         const max = sortedStaff.pop()
//         if (max) ans += max
//     }

//     return { ans }
// }
// second
function fun (N, staff, K) {
    // Используем алгоритм Quickselect для нахождения K наибольших элементов
    function quickselect(arr, k) {
        if (arr.length === 1) return arr[0];

        const pivot = arr[Math.floor(Math.random() * arr.length)];
        const lows = arr.filter(x => x < pivot);
        const highs = arr.filter(x => x > pivot);
        const pivots = arr.filter(x => x === pivot);

        if (k < highs.length) {
            return quickselect(highs, k);
        } else if (k < highs.length + pivots.length) {
            return pivots[0];
        } else {
            return quickselect(lows, k - highs.length - pivots.length);
        }
    }

    // Находим K-й наибольший элемент
    const kthLargest = quickselect(staff, K - 1);

    // Суммируем все элементы, которые больше или равны K-му наибольшему элементу
    let sum = 0;
    let count = 0;
    for (let i = 0; i < staff.length; i++) {
        if (staff[i] > kthLargest) {
            sum += staff[i];
            count++;
        }
    }

    // Добавляем оставшиеся элементы, если их количество меньше K
    sum += (K - count) * kthLargest;

    return sum;
}

console.log(fun(8, [5, 13, 8, 4, 4, 15, 1, 9], 8))