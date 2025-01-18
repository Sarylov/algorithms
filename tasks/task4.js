// сгруппировать массив строк в массив анаграмм

// 1) заводим хеш таблицу в ней ключом будет массив где каждой букве будет соответствовать свой индекс, значение индекса количество использования в слове
// 2) группируем в еще одну хеш таблицу слова где ключом будет набор значении слова 
// 3) вывод хеш таблицы в качестве массива

function groupAnagram(strs) {
    const groups = {}

    for (let str of strs) {
        const hash = new Array(26).fill(0)
        for (let char of str) {
            hash[char.charCodeAt(0) - "a".charCodeAt(0)] += 1
        }
        const hashString = hash.join(",")
        if (groups[hashString]) groups[hashString].push(str)
        else groups[hashString] = [str]
    }

    return Object.values(groups)
}

console.log(groupAnagram(["act", "pots", "tops", "cat", "stop", "hat"]))