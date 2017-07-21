/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (rotated, target) {
  // Your code here:
  var left = 0, right = rotated.length - 1;
  while(left <= right) {
    var mid = Math.floor((left + right) / 2);
    if(rotated[mid] === target){
      return mid;
    }
    if(rotated[left] < mid) {
      if (rotated[left] <= target && target < rotated[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (rotated[mid] <= target && target < rotated[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  } 
  return null;
};

console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2));
console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100));

console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 5));

console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 0));
