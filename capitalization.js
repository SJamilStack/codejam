function capitalize(str) {
    let words = [];
    [...str.split(" ")].forEach(word => {
        words.push(word[0].toUpperCase() + word.slice(1));
    });
    return words.join(" ");
}

console.log(capitalize("I am from bangladesh."));