const words = [
  "pear",
  "amleth",
  "dormitory",
  "tinsel",
  "dirty room",
  "hamlet",
  "listen",
  "silnet",
];

words.sort();
// console.log(words);

const cleanString = (str) =>
  str.replace(/\W/g, "").toLowerCase().split("").sort().join("");

const hasWhiteSpace = (str) =>
  str.indexOf(" ") >= 0 ? str.replace(" ", "+") : str;

let hashMap = {};

words.forEach((item) => {
  let cleanWord = cleanString(item);
  let escapeStr = hasWhiteSpace(item);
  // if a key already exists, i am appending the value by comma(,)
  if (cleanWord in hashMap)
    hashMap[cleanWord] = hashMap[cleanWord] + "," + escapeStr;
  else hashMap[cleanWord] = escapeStr;
});

console.log(Object.values(hashMap).join("\n").replace("+", " "));
