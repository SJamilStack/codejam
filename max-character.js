function getMostAppearedChar(str) {
  const obj = {};
  for (s of str) {
    obj[s] = obj[s] + 1 || 1;
  }
  let max = Math.max(...Object.values(obj));
  let list = [];
  for (let [key, val] of Object.entries(obj)) {
    if (max == val) list.push(key);
  }
  console.log(list);
}

getMostAppearedChar("shihabbb");
