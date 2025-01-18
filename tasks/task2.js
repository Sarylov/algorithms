// написать функцию возвращающую true если 2 строки анаграммы
// решение через hash таблицу 

// 1) заводим 2 таблицы и счиатем количество символов в строках
// 2) сравниваем эти 2 таблицы

function isAnagram(s, t) {
    if (s.length !== t.length)
        return false;

    const hashS = {}
    const hashT = {}

    for (let i = 0; i < s.length; i++) {
        hashS[s[i]] = (hashS[s[i]] || 0) + 1
        hashT[t[i]] = (hashT[t[i]] || 0) + 1
    }

    for (let i = 0; i < s.length; i++) {
        if (hashS[s[i]] !== hashT[s[i]])
            return false;
    }

    return true
}

console.log(isAnagram("bbcc", "ccbc"))
console.log(isAnagram("bbcc", "ccbb"))