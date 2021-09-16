function log(s) {
    console.log(s);
}

function numberReverse(num) {
    return parseInt([...num.toString()].reverse().join("")) * Math.sign(num);
}

log(numberReverse(-123853));