function cleanString(str) {
  return str.replace(/\W/g, "").toLowerCase().split("").sort().join("");
}

function isAnagram(str1, str2) {
  return cleanString(str1) === cleanString(str2);
}

console.log(isAnagram("Mon k", "konm"));
