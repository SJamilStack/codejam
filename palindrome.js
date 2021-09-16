function log(s) {
    console.log(s);
}

function isPalindrome(str) {
    return str === [...str].reverse().join("");
}

log(isPalindrome("abba"));