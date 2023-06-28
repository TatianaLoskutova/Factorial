function factorial(n){
    if (n === 1 || n === 0) {
        return 1
    }
    if (n < 2) {
        throw RangeError
    }
    if (n > 12) {
        throw RangeError
    }
    let res = 1

    for (let i = 1; i <= n ; i++) {
        res *= i
    }
    return res
}