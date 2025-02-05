/*


*/
// o(n) но подходит лишь для английских букв
// function getAnagram(strs) {
//     const groups = {}

//     for (let str of strs) {
//         const hash = new Array(26).fill(0)
//         for (let char of str) {
//             hash[char.charCodeAt(0) - "a".charCodeAt(0)] += 1
//         }

//         console.log(hash)
//         const hashString = hash.join(",")
//         if (groups[hashString]) groups[hashString].push(str)
//         else groups[hashString] = [str]
//     }

//     return Object.values(groups)

// }

// const groupMap = {
//     key: отсортированная строка
//     value: [eat, tea ...]    
// } 

// цп O(n * k * log k)

function getAnagram(words) {
    const groupMap = {}

    for (let word of words) {
        let sorted = word.split("").sort().join("")
        if (groupMap[sorted]) groupMap[sorted].push(word)
        else groupMap[sorted] = [word]
    }

    return Object.values(groupMap)

}

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(getAnagram(words))
// Ожидаемый результат:
// [
//     ["eat", "tea", "ate"],
//     ["tan", "nat"],
//     ["bat"]
// ]