// нужно проверить строку на полиндром учитывая только символы A-Я и не учитывать регистр 
// O(n)
function isPalindrome1(str) {
    const cleanStr = str.replace(/[^A-Za-zА-��]/g, '').toLowerCase();
    const reversedStr = cleanStr.split("").reverse().join("")
    return cleanStr === reversedStr
}



// нужно проверить строку на полиндром c помощью 2 указателей 
// O(n)
function isPalindrome(str) {
    const cleanStr = str.replace(/[^A-Za-zА-��]/g, '').toLowerCase();
    let start = 0
    let end = cleanStr.length - 1
    while (start < end) {
        if (cleanStr[start] !== cleanStr[end]) {
            return false
        }
        start++
        end--
    }
    return true
}

console.log(isPalindrome("Казак"))
console.log(isPalindrome("Ка3 зак12"))
console.log(isPalindrome("мама"))
console.log(isPalindrome("Madam, i`m Adam"))