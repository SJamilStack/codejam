function twoStrings(s1: string, s2: string): string {
  // Write your code here
  let flag: string = "NO";
  // @ts-ignore
  const chars: string[] = [...s1];
  const setS2 = new Set();
  chars.forEach((c) => {
    if (s2.indexOf(c) != -1) flag = "YES";
  });
  return flag;
}

console.log(twoStrings("hello", "world"));
