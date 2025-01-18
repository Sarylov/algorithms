// дано 2 массива и нужно вывести true если там есть совпадаения 

function isAnagram(arr1, arr2) {
    for (let i in arr1) {
        if (arr2.includes(arr1[i])) return true
    }
    return false
}


console.log(isAnagram([3, 4, 5], [1, 2, 3])) //true
console.log(isAnagram([6, 4, 5], [1, 2, 3])) //false
