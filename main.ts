function calcPi (n: number) {
    for (let k = 0; k <= n - 1; k++) {
        sum += calcExp(k)
    }
    return sum
}
function calcExp (k: number) {
    let v1 = 1 / 16 ** k
    let v2 = 4 / (8 * k + 1)
    let v3 = 2 / (8 * k + 4)
    let v4 = 1 / (8 * k + 5)
    let v5 = 1 / (8 * k + 6)
    return v1 * (v2 - v3 - v4 - v5)
}
let sum = 0;
let pi = calcPi(100);
basic.showString("" + (pi));
