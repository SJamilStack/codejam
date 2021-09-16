let array = [25626, 25757, 24367, 24267, 16, 100, 2, 7277];

const checkEncoding = (number) =>
  number <= -127 || number >= 127 ? [-128, number] : [number];

let result = [];

for (let i = 0; i < array.length - 1; i++) {
  if (i == 0) result.push(array[i]);
  let diff = array[i + 1] - array[i];
  result.push(...checkEncoding(diff));
}

console.log(result);

// 25626 131 -1390 -100 -24251 84 -98 7275
// 25626 -128 131 -128 -1390 -100 -128 -24251 84 -98 -128 7275
