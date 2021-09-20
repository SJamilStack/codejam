// A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become . Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

// Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

// Function Description

// Complete the function rotLeft in the editor below.

// rotLeft has the following parameter(s):

// int a[n]: the array to rotate
// int d: the number of rotations
// Returns

// int a'[n]: the rotated array
// Input Format

// The first line contains two space-separated integers  and , the size of  and the number of left rotations.
// The second line contains  space-separated integers, each an .

// Constraints

// Sample Input

// 5 4
// 1 2 3 4 5
// Sample Output

// 5 1 2 3 4

function rotLeft(a, d) {
  const len = a.length;
  if (len === 0 || d == 0 || d == len) return a;
  // enable the below line if d >= n in the constraint and replace d with rotateCount in return statement
  //const rotateCount = d % len;

  return a.slice(d, len).concat(a.slice(0, d));
}

rotLeft([1, 2, 3, 4, 5], 1);
rotLeft([1, 2, 3, 4, 5], 2);
rotLeft([1, 2, 3, 4, 5], 3);
rotLeft([1, 2, 3, 4, 5], 4);
rotLeft([1, 2, 3, 4, 5], 5);
// rotLeft([1, 2, 3, 4, 5], 6);
// rotLeft([1, 2, 3, 4, 5], 7);
