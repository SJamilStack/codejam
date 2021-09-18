function twoStrings(s1, s2) {
  // Write your code here
  let flag = "NO";
  const chars = [...s1];
  const setS2 = new Set([...s2]);
  chars.forEach((c) => {
    if (setS2.has(c)) flag = "YES";
  });
  return flag;
}

console.log(twoStrings("hello", "world"));
