function vowelsCounter(str) {
    vowels = {'a':1, 'e':1, 'o':1, 'i':1, 'u':1};
    count = 0;
    for(let char of str.toLowerCase()) {
        if(char in vowels) count++;
    }
    console.log(count);
    return count;
}

vowelsCounter('shihabjAmil');