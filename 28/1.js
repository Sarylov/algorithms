
// первая прогон [1, 3, 2, 0.5, 1, 3]
// второй прогон [1, 0, 2, 0.5, 1, 0] 4.5

function getPrices(prices, couponPrice, couponAmount) {
    let couponCounter = couponAmount

    let newPrices = []

    for (let i = 0; i < prices.length; i++) {
        let num = prices[i]
        if (num >= couponPrice) {
            num -= couponPrice
            couponCounter--
        }
        newPrices.push(num)
    }

    if (couponCounter !== 0) {
        for (let i = 0; i < couponCounter; i++) {
            const max = Math.max(...newPrices)
            const indexMax = newPrices.indexOf(max)
            const dif = newPrices[indexMax] - couponPrice
            let newPrice = 0
            if (dif > 0) newPrice = dif
            newPrices[indexMax] = newPrice
        }
    }

    return newPrices
}



// если не важен порядок
// первая прогон [1, 3, 2, 0.5, 1, 3]
// sort [3, 3, 2, 1, 1, 0.5]
// второй прогон [0, 0, 2, 1, 1, 0.5 ] 4.5


// function getPrices(prices, couponPrice, couponAmount) {
//     let couponCounter = couponAmount

//     let newPrices = []

//     for (let i = 0; i < prices.length; i++) {
//         let num = prices[i]
//         if (num >= couponPrice) {
//             num -= couponPrice
//             couponCounter--
//         }
//         newPrices.push(num)
//     }

//     if (couponCounter !== 0) {
//         newPrices.sort((a, b) => b - a)

//         for(let i = 0; i < couponCounter; i++){
//             const dif = newPrices[i] - couponPrice
//             let num = 0
//             if (dif > 0) num = dif
//             newPrices[i] = num
//         }
//     }

//     return newPrices
// }

console.log(getPrices([8, 10, 2, 0.5, 1, 3], 7, 4))