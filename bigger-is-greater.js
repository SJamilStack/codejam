// Lexicographical order is often known as alphabetical order when dealing with strings. A string is greater than another string if it comes later in a lexicographically sorted list.

// Given a word, create a new word by swapping some or all of its characters. This new word must meet two criteria:

// It must be greater than the original word
// It must be the smallest word that meets the first condition
// Example

// The next largest word is .

// Complete the function biggerIsGreater below to create and return the new string meeting the criteria. If it is not possible, return no answer.

// Function Description

// Complete the biggerIsGreater function in the editor below.

// biggerIsGreater has the following parameter(s):

// string w: a word
// Returns
// - string: the smallest lexicographically higher string possible or no answer

// Input Format

// The first line of input contains , the number of test cases.
// Each of the next  lines contains .

// Constraints

//  will contain only letters in the range ascii[a..z].
// Sample Input 0

// 5
// ab
// bb
// hefg
// dhck
// dkhc
// Sample Output 0

// ba
// no answer
// hegf
// dhkc
// hcdk

// Sample Input 1

// 6
// lmno
// dcba
// dcbb
// abdc
// abcd
// fedcbabcd
// Sample Output 1

// lmon
// no answer
// no answer
// acbd
// abdc
// fedcbabdc

// const sortAlphabets = function (text, targetChar = undefined) {
//   return targetChar
//     ? text
//         .split("")
//         .filter((c) => c > targetChar)
//         .sort()
//         .join("")
//     : text.split("").sort().join("");
// };

const sortAlphabets = function (text, targetChar = undefined) {
  return text
    .split("")
    .filter((c) => (targetChar ? c > targetChar : true))
    .sort()
    .join("");
};

function biggerIsGreater(w) {
  // console.log(w);
  const word = [...w];
  let targetValue = 0;
  let targetIndex = 0;
  for (let i = word.length - 2; i >= 0; i--) {
    if (word[i] < word[i + 1]) {
      targetValue = word[i];
      targetIndex = i;
      break;
    }
  }
  // console.log(targetIndex, targetValue);
  if (targetValue == 0) return "no answer";
  else {
    let intactStr = w.substring(0, targetIndex);
    let processingStr = w.substring(targetIndex + 1, word.length);
    const swapWithChar = sortAlphabets(processingStr, targetValue).charAt(0);
    intactStr = intactStr + swapWithChar;
    processingStr = processingStr.replace(swapWithChar, targetValue);
    // console.log(intactStr + sortAlphabets(processingStr));
    return intactStr + sortAlphabets(processingStr);
  }
}

console.log(biggerIsGreater("dkhc")); //hcdk
