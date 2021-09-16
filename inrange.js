function makeInputVerifier(minimum, maximum) {
  // write your code here
  const verify = (inputValue) => {
    if (inputValue < minimum) return "Input is less than minimum value";
    else if (inputValue > maximum) return "Input is more than maximum value";
    else return "Input is in range";
  };
  return verify;
}

const verify = makeInputVerifier(3, 10);
console.log(verify);
console.log(verify(5));
