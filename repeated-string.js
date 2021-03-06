function repeatedString(s, n) {
  let len = s.length;
  const min = 1;
  const maxs = 100;
  const maxn = 1000000000000;

  if (s.length == 1 && s.indexOf("a") != -1) return n;
  else if (
    typeof s === "string" &&
    s.length >= min &&
    s.length <= maxs &&
    n === parseInt(n, 0) &&
    n >= min &&
    n <= maxn &&
    s.indexOf("a") != -1
  ) {
    let re = /a/gi;
    let count = s.match(re).length;
    let comp = Math.floor(n / len);
    let extra = n % len;
    console.log(extra);
    let extraStrCount = 0;
    if (extra != 0) {
      let extraStr = s.slice(0, extra).match(re);
      if (extraStr) extraStrCount = extraStr.length;
    }
    return comp * count + extraStrCount;
  }
  return 0;
}

console.log(repeatedString("x", 970770));
