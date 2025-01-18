function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false
    const hash1 = {}
    const hash2 = {}
    for (index in str1) {
        hash1[str1[index]] = (hash1[str1[index]] || 0) + 1
        hash2[str2[index]] = (hash2[str2[index]] || 0) + 1
    }

    for (key of Object.keys(hash1)) {
        if (hash1[key] !== hash2[key]) return false
    }

    return true
}

console.log(isAnagram("кот", "ток"))
console.log(isAnagram("кот2", "ток1"))