/* 
    набор билетов по типу 
    [
        { from: "London", to: "Moscow"},
        { from: "NY", to: "London"},
        { from: "Moscow", to: "SPb"},
    ]

    из этих билетов можно построить единственный, неразрывный маршрут.
    Петель и повторов в маршруте нет.

    Нужно написать программу которая возвращает эти же объекты билетов в порядке следования маршруту.
    */
/*
    fromTo = {
        London: { from: 'London', to: 'Moscow' }
        Moscow: { from: 'Moscow', to: 'SPb' },
        Ny: { from: 'NY', to: 'London' },
    }
    toFrom = {
        London: { from: 'NY', to: 'London' }
        Moscow: { from: 'London', to: 'Moscow' },
        SPb: { from: 'Moscow', to: 'SPb' }
    }
*/

// O(n) по памяти
// O(n) по процессору

function getRoute(tickets) {
    const fromMap = {}
    const toMap = {}

    for (let ticket of tickets) {
        fromMap[ticket.from] = ticket
        toMap[ticket.to] = ticket
    }

    let nextCity = Object.keys(fromMap).find((city) => !toMap[city]) //NY
    let res = []

    while (fromMap[nextCity]) {
        res.push(fromMap[nextCity])
        nextCity = fromMap[nextCity].to
    }

    return res
}

console.log(getRoute([
    { from: 'London', to: 'Moscow' },
    { from: 'NY', to: 'London' },
    { from: 'Moscow', to: 'SPb' },
]))

/*[
{ from: 'NY', to: 'London' },
{ from: 'London', to: 'Moscow' },
{ from: 'Moscow', to: 'SPb' }
] */