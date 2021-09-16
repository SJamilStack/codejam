function log(s) {
    console.log(s);
}

function stringReverse(str) {
    return [...str].reverse().join("");
}

function stringReverse1(str) {
    return [...str].reduce((acc, curr) => {
        return curr + acc;
    }, "");
}


log(stringReverse1("done"));