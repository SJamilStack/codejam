// Given an array of integers, determine the minimum number of elements to delete to leave only elements of equal value.

// Example

// Delete the  elements  and  leaving . If both twos plus either the  or the  are deleted, it takes  deletions to leave either  or . The minimum number of deletions is .

// Function Description

// Complete the equalizeArray function in the editor below.

// equalizeArray has the following parameter(s):

// int arr[n]: an array of integers
// Returns

// int: the minimum number of deletions required
// Input Format

// The first line contains an integer , the number of elements in .
// The next line contains  space-separated integers .

// Constraints

// Sample Input

// STDIN       Function
// -----       --------
// 5           arr[] size n = 5
// 3 3 2 1 3   arr = [3, 3, 2, 1, 3]
// Sample Output

// 2
// Explanation

// Delete  and  to leave . This is minimal. The only other options are to delete  elements to get an array of either  or .

function equalizeArray(arr) {
  // Write your code here

  let check = {};
  arr.forEach((elem) => {
    elem in check ? (check[elem] = check[elem] + 1) : (check[elem] = 1);
  });
  let max = Math.max(...Object.values(check));
  let delCount =
    Object.values(check).reduce((acc, curr) => (acc = acc + curr), 0) - max;
  console.log(delCount);
}

equalizeArray([3, 2, 1, 3, 3, 4, 4]);
equalizeArray([3, 3, 2, 1, 3]);
