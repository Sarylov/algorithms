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
    const cleanStr = str.replace(/[^A-Za-z]/g, '').toLowerCase();
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
console.log(isPalindrome("Was it a car or a cat I saw?"))//true
console.log(isPalindrome("tab a cat"))//false
console.log(isPalindrome("No lemon, no melon"))//true
console.log(isPalindrome("0P"))//false