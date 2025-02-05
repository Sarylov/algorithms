// даны 2 отсортированных списка с интервалами присутствия 
// пользователей онлайн в течении дня Начало интервала строго меньше конца
// нужно вычислить интервалы когда оба пользователя были в сети 

function intersection(user1, user2) {
    let firstIndex = 0
    let secondIndex = 0
    let res = []

    while (user1[firstIndex] && user2[secondIndex]) {
        const [start1, end1] = user1[firstIndex]
        const [start2, end2] = user2[secondIndex]

        const start = Math.max(start1, start2)
        const end = Math.min(end1, end2)

        if (start < end) {
            res.push([start, end])
        }

        if (end1 > end2) {
            secondIndex++
        } else {
            firstIndex++
        }
    }

    return res
}

// Пример использования
const intervals1 = [[8, 12], [17, 22]];
const intervals2 = [[5, 11], [14, 18], [20, 23]];

const commonIntervals = intersection(intervals1, intervals2);
console.log(commonIntervals); // [[8, 11], [17, 18], [20, 22]]