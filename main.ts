function calcPi (n: number) {
    for (let k = 0; k <= n - 1; k++) {
        sum += calcExp(k)
    }
    return sum
}
function calcExp (k: number) {
    v1 = 1 / 16 ** k
    v2 = 4 / (8 * k + 1)
    v3 = 2 / (8 * k + 4)
    v4 = 1 / (8 * k + 5)
    v5 = 1 / (8 * k + 6)
    return v1 * (v2 - v3 - v4 - v5)
}
let v5 = 0
let v4 = 0
let v3 = 0
let v2 = 0
let v1 = 0
let sum = 0
let pi = calcPi(100)
basic.showString("" + (pi))
