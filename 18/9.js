function createCodeGenerator() {
    const codes = new Set()
    let targetSize = 0

    function generateRandomCode() {
        let res = ""
        const min = 0
        const max = 9999
        const random = Math.floor(Math.random() * (max - min) + min).toString()
        if (random.length === 4) res = random
        else {
            res = random
            const diff = 4 - random.length
            for (let i = 0; i < diff; i++) {
                res = "0" + res
            }
        }

        return res
    }

    return () => {
        if (targetSize > 9999) return "все коды заняты"
        targetSize += 1
        while (codes.size < targetSize) {
            const code = generateRandomCode()
            codes.add(code)
            return code
        }
    }
}

const codeGenerator = createCodeGenerator()

for (let i = 0; i < 10002; i++) {
    console.log(codeGenerator())
}

