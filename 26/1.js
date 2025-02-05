// мое решение и не плохо находит палиндром но не учитывает цифры а только символы

function isPalindrome(s) {
    const regex = /[^A-Za-zА-Яа-я0-9]/g
    const cleanStr = s.replace(regex, "").toLowerCase()

    let start = 0
    let end = cleanStr.length - 1


    while (start < end) {
        if (cleanStr[start] !== cleanStr[end])
            return false
        start++
        end--
    }

    return true
}

console.log(isPalindrome("Was it a car or a cat I saw?"))//true
console.log(isPalindrome("tab a cat"))//false
console.log(isPalindrome("No lemon, no melon"))//true
console.log(isPalindrome("0P"))//false

// function isPalindrome(s) {
//     let lowerS = s.toLowerCase()
//     let start = 0
//     let end = lowerS.length - 1

//     if (lowerS.length === 2) return lowerS[0] === lowerS[1]

//     while (start < end) {
//         console.log(lowerS)
//         // console.log(end)
//         if (lowerS[start].toUpperCase() === lowerS[start]) {
//             start += 1
//             continue
//         }

//         if (lowerS[end].toUpperCase() === lowerS[end]) {
//             end -= 1
//             continue
//         }

//         if (lowerS[start].toUpperCase() !== lowerS[end].toUpperCase()) {
//             return false
//         }

//         start += 1
//         end -= 1
//     }

//     return true
// }
