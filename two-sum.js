function twoSum(arr, target) {
  obj = new Map();
  result = [];
  for (let i = 0; i < arr.length; i++) {
    comp = target - arr[i];
    if (obj.has(comp)) result.push([obj.get(comp), i]);
    obj.set(arr[i], i);
  }
  console.log(obj);
  return result;
}

console.log(twoSum([2, 7, 7, 8], 9));

var target = 66;
var arr = [10, 18, 21, 28, 31, 39, 40, 55, 60, 62];
function twoSum1(a, t) {
  var obj = {};
  for (var i = 0; i < a.length; i++) {
    var comp = (t - a[i]).toString();
    if (a[i] in obj) return true;
    obj[comp] = 1;
  }
  return false;
}
console.log(twoSum1(arr, target));
