// Условие:
// Дан массив пар городов, представляющих билеты на поезд.Каждая пара[from, to] указывает направление движения.Необходимо восстановить полный маршрут, начиная с начальной точки.

function getRoute(tickets) {
    const fromMap = {}
    const toMap = {}

    for (let ticket of tickets) {
        fromMap[ticket[0]] = ticket
        toMap[ticket[1]] = ticket
    }

    let nextCity = Object.keys(fromMap).find((city) => !toMap[city])

    let res = []
    while (nextCity) {
        res.push(nextCity)
        if (fromMap[nextCity])
            nextCity = fromMap[nextCity][1]
        else nextCity = null
    }

    return res
}

const tickets = [
    ['London', 'Moscow'],
    ['NY', 'London'],
    ['Moscow', 'SPb'],
];

console.log(getRoute(tickets))

// Ожидаемый результат: ['NY', 'London', 'Moscow', 'SPb']